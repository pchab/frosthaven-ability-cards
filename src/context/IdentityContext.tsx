'use client';

import useSecretary from '@/app/_components/secretary/useSecretary';
import { createContext, use, useEffect, useState } from 'react';
import { ClassContext } from './ClassContext';

export const IdentityContext = createContext<{
  identity: number;
  changeIdentity: (identity: number, fromTo: [string, string]) => void;
}>({
  identity: 0,
  changeIdentity: () => {
    // do nothing.
  },
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
  const [identity, setIdentity] = useState(0);

  useEffect(() => {
    if (!isConnected || !currentClass || !currentCharacter) return;
    const { identity } = currentCharacter;
    setIdentity(identity);
  }, [currentCharacter, isConnected, currentClass]);

  const changeIdentity = (identity: number, fromTo: [string, string]) => {
    setIdentity(identity);
    if (isConnected) {
      setGhsIdentity(identity, fromTo);
    }
  }

  return <IdentityContext value={{ identity, changeIdentity }}>
    {children}
  </IdentityContext>;
}