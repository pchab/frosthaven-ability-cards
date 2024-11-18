'use client';

import type { Identity } from '@/domain/frosthaven-class.type';
import { createContext, use, useEffect, useState } from 'react';
import { getGameState } from '@/stores/game.store';
import { useClassHook } from '@/stores/class.store';
import { mapCharacterNameToSecretary } from '@/domain/secretary/secretary-character.mapper';
import { WebSocketContext } from '../WebSocketContext';
import { isGeminate } from '@/domain/geminate/class';
import { GeminateForm } from '@/domain/geminate/cards';
import { isBlinkblade } from '@/domain/blinkblade/class';
import { BlinkbladeSpeed } from '@/domain/secretary/game.state';

export const IdentityContext = createContext<{
  identity: Identity | null;
  changeIdentity: (identity: Identity) => void;
}>({
  identity: null,
  changeIdentity: () => { },
});

export default function IdentityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    isConnected,
    update: updateGameState,
  } = use(WebSocketContext);
  const currentClass = useClassHook();
  const [identity, setIdentity] = useState<Identity | null>(null);

  const updateIdentityToGHS = (form: Identity) => {
    if (!updateGameState || !currentClass) return;

    const undoInfo = ["nextIdentity"];
    if (isGeminate(currentClass)) {
      undoInfo.push("geminate");
      if (form === GeminateForm.melee) {
        undoInfo.push("range", "melee");
      }
      if (form === GeminateForm.ranged) {
        undoInfo.push("melee", "range");
      }
    }

    if (isBlinkblade(currentClass)) {
      undoInfo.push("blinkblade");
      if (form === BlinkbladeSpeed.FAST) {
        undoInfo.push("slow", "fast");
      }
      if (form === BlinkbladeSpeed.SLOW) {
        undoInfo.push("fast", "slow");
      }
    }
    updateGameState({ identity: form }, undoInfo);
  }

  useEffect(() => {
    if (!isConnected || !currentClass) return;
    const gameState = getGameState();
    if (!gameState) return;

    const { characters } = gameState;
    const currentCharacter = characters
      .find(({ name }) => name === mapCharacterNameToSecretary(currentClass.name));

    if (!currentCharacter) return;
    const { identity } = currentCharacter;
    setIdentity(identity);
  }, [isConnected]);

  const changeIdentity = (identity: Identity) => {
    setIdentity(identity);
    if (isConnected) {
      updateIdentityToGHS(identity);
    }
  }

  return <IdentityContext value={{ identity, changeIdentity }}>
    {children}
  </IdentityContext>;
}