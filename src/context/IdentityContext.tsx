'use client';

import useSecretary from '@/app/_components/secretary/useSecretary';
import type { Identity } from '@/domain/frosthaven-class.type';
import { createContext, use, useEffect, useState } from 'react';
import { ClassContext } from './ClassContext';

export const IdentityContext = createContext<{
  identity: Identity;
  changeIdentity: (identity: Identity) => void;
}>({
  identity: 0,
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
  const [identity, setIdentity] = useState<Identity>(0);

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