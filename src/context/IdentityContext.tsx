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
    connectionStatus,
    currentCharacter,
    setGhsIdentity,
  } = useSecretary();
  const currentClass = use(ClassContext);
  const [identity, setIdentity] = useState(0);

  useEffect(() => {
    if (connectionStatus !== WebSocket.OPEN || !currentClass || !currentCharacter) return;
    const { identity } = currentCharacter;
    setIdentity(identity);
  }, [currentCharacter, connectionStatus, currentClass]);

  const changeIdentity = (identity: number, fromTo: [string, string]) => {
    setIdentity(identity);
    if (connectionStatus === WebSocket.OPEN) {
      setGhsIdentity(identity, fromTo);
    }
  }

  return <IdentityContext value={{ identity, changeIdentity }}>
    {children}
  </IdentityContext>;
}