'use client';

import { isBlinkblade } from '@/domain/blinkblade/class';
import type { Identity } from '@/domain/frosthaven-class.type';
import { GeminateForm } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import { BlinkbladeSpeed, CharacterState } from '@/domain/secretary/game.state';
import { mapCharacterNameToSecretary } from '@/domain/secretary/secretary-character.mapper';
import { getCharacterState, getGameState, updateGameStateForFigure } from '@/stores/game.store';
import { createContext, use, useEffect, useState } from 'react';
import { ClassContext } from './ClassContext';
import { WebSocketContext } from './WebSocketContext';

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
  const currentClass = use(ClassContext);
  const [identity, setIdentity] = useState<Identity | null>(
    isGeminate(currentClass)
      ? GeminateForm.melee
      : isBlinkblade(currentClass)
        ? BlinkbladeSpeed.FAST
        : null
  );

  const updateIdentityToGHS = (form: Identity) => {
    if (!updateGameState || !currentClass) return;
    const { name, title } = getCharacterState(currentClass.name)!;

    const undoInfo = ["nextIdentity", title, name];
    if (isGeminate(currentClass)) {
      if (form === GeminateForm.melee) {
        undoInfo.push("range", "melee");
      }
      if (form === GeminateForm.ranged) {
        undoInfo.push("melee", "range");
      }
    }

    if (isBlinkblade(currentClass)) {
      if (form === BlinkbladeSpeed.FAST) {
        undoInfo.push("slow", "fast");
      }
      if (form === BlinkbladeSpeed.SLOW) {
        undoInfo.push("fast", "slow");
      }
    }
    const newGameState = updateGameStateForFigure<CharacterState>(name, { identity: form })!;
    updateGameState(newGameState, undoInfo);
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
  }, [isConnected, currentClass]);

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