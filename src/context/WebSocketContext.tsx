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
  gameState?: GameState;
  sendGameStateToGhs?: WsGameStateUpdate;
  connect?: ({ host, id }: { host: string, id: string }) => Promise<void>;
}>({
  isConnected: false,
  id: '',
});

export default function WebSocketProvider({ children }: { children: ReactNode }) {
  const wsClient = useRef<WebSocket | null>(null);
  const [secretaryId, setSecretaryId] = useState<string>('');
  const [isConnectModalOpen, setConnectModalOpen] = useState(false);
  const [isConnected, setConnected] = useState(false);
  const [gameState, setGameState] = useState<GameState>();

  const sendGameStateToGhs = (newState: GameState, info: string[]) => {
    if (!wsClient.current) return;
    setGameState(newState);

    wsClient.current.send(JSON.stringify({
      code: secretaryId,
      password: secretaryId,
      type: "game",
      payload: newState,
      revision: 0,
      undoinfo: info,
      undolength: 1,
    }));
  };

  const connect = async ({ host, id }: { host: string, id: string }) => {
    if (wsClient.current) {
      wsClient.current.close();
    }

    const onDisconnect = async () => {
      console.error('Connection lost, trying to reconnect...');
      setTimeout(() => connect({ host, id }), 1000); // Reconnect after 1 second
    };

    const client = await connectToSecretary({
      host,
      secretaryId: id,
      onData: setGameState,
      onDisconnect,
    });
    wsClient.current = client;
    setSecretaryId(id);
    setConnected(true);
    setConnectModalOpen(false);
  };

  useEffect(() => {
    const host = localStorage.getItem('secretary-host');
    const id = localStorage.getItem('secretary-id');
    if (!id || !host) return;
    connect({ host, id });
    return () => wsClient.current?.close();
  }, []);

  return <WebSocketContext value={{
    isConnected,
    id: secretaryId,
    gameState,
    sendGameStateToGhs,
    connect,
  }}>
    {isConnectModalOpen && <Modal onCancel={() => setConnectModalOpen(false)}>
      <ConnectForm />
    </Modal>}
    {children}
    <Menu onOpenConnectModal={() => setConnectModalOpen(true)} />
  </WebSocketContext>;
}
