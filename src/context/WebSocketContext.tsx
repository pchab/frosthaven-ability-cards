'use client';

import Menu from '@/app/Menu';
import Modal from '@/app/_components/layout/Modal';
import ConnectForm from '@/app/_components/secretary/ConnectForm';
import { connectToSecretary } from '@/app/_components/secretary/webSocketClient';
import type { GameState } from '@/domain/secretary/game.state';
import { createContext, useEffect, useRef, useState, type ReactNode } from 'react';

type WsGameStateUpdate = (state: GameState, info: string[]) => void;

export const WebSocketContext = createContext<{
  isConnected: boolean;
  id: string;
  update?: WsGameStateUpdate | null;
}>({
  isConnected: false,
  id: '',
});

export default function WebSocketProvider({ children }: { children: ReactNode }) {
  const wsClient = useRef<WebSocket | null>(null);
  const [secretaryId, setSecretaryId] = useState<string>('');
  const [isConnectModalOpen, setConnectModalOpen] = useState(false);
  const [isConnected, setConnected] = useState(false);

  const updateGameState = (newState: GameState, info: string[]) => {
    if (!wsClient.current) return;

    wsClient.current.send(JSON.stringify({
      code: secretaryId,
      password: secretaryId,
      type: "game",
      payload: newState,
      revision: 0,
      undoinfo: info,
      undolength: 1,
    }));
  }

  useEffect(() => {
    const host = localStorage.getItem('secretary-host');
    const id = localStorage.getItem('secretary-id');
    if (!id || !host) return;
    connectToSecretary({ host, id }).then((client) => {
      wsClient.current = client;
      setSecretaryId(id);
      setConnected(true);
    });
    return () => wsClient.current?.close();
  }, []);

  return <WebSocketContext value={{
    isConnected,
    id: secretaryId,
    update: updateGameState
  }}>
    {isConnectModalOpen && <Modal onCancel={() => setConnectModalOpen(false)}>
      <ConnectForm onConnect={({ client, id }) => {
        wsClient.current = client;
        setSecretaryId(id);
        setConnectModalOpen(false);
        setConnected(true);
      }} />
    </Modal>}
    <Menu onOpenConnectModal={() => setConnectModalOpen(true)} />
    {children}
  </WebSocketContext>;
}
