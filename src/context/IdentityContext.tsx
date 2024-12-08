'use client';

import { isBlinkblade } from '@/domain/blinkblade/class';
import type { Identity } from '@/domain/frosthaven-class.type';
import { GeminateForm } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import { BlinkbladeSpeed } from '@/domain/secretary/game.state';
import { mapCharacterNameToSecretary } from '@/domain/secretary/secretary-character.mapper';
import { createContext, use, useEffect, useState } from 'react';
import { ClassContext } from './ClassContext';
import useSecretary from '@/app/_components/secretary/useSecretary';

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
    currentCharacter,
    setGhsIdentity,
  } = useSecretary();
  const currentClass = use(ClassContext);
  const [identity, setIdentity] = useState<Identity | null>(
    isGeminate(currentClass)
      ? GeminateForm.melee
      : isBlinkblade(currentClass)
        ? BlinkbladeSpeed.FAST
        : null
  );

  useEffect(() => {
    if (!isConnected || !currentClass || !currentCharacter) return;
    const { identity } = currentCharacter;
    setIdentity(identity);
  }, [currentCharacter, isConnected, currentClass]);

  const changeIdentity = (identity: Identity) => {
    setIdentity(identity);
    if (isConnected) {
      setGhsIdentity(identity);
    }
  }

  return <IdentityContext value={{ identity, changeIdentity }}>
    {children}
  </IdentityContext>;
}