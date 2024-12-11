'use client';

import useSecretary from '@/app/_components/secretary/useSecretary';
import { createContext, use, useEffect, useState } from 'react';
import { ClassContext } from './ClassContext';
import type { Identity } from '@/domain/frosthaven-class.type';

export const IdentityContext = createContext<{
  identity: number;
  changeIdentity: (identity: Identity, fromTo: [string, string]) => void;
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

  const changeIdentity = (identity: Identity, fromTo: [string, string]) => {
    setIdentity(identity);
    if (isConnected) {
      setGhsIdentity(identity, fromTo);
    }
  }

  return <IdentityContext value={{ identity, changeIdentity }}>
    {children}
  </IdentityContext>;
}