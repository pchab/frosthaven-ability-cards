'use client';

import Menu from '@/app/Menu';
import Modal from '@/app/_components/layout/Modal';
import ConnectForm from '@/app/_components/secretary/ConnectForm';
import { connectToSecretary } from '@/app/_components/secretary/webSocketClient';
import type { CharacterState } from '@/domain/secretary/game.state';
import { mapCharacterNameToSecretary } from '@/domain/secretary/secretary-character.mapper';
import { getClass } from '@/stores/class.store';
import { getGameState, setGameState } from '@/stores/game.store';
import { createContext, useEffect, useRef, useState, type ReactNode } from 'react';

type WsGameStateUpdate = (state: Partial<CharacterState>, info: string[]) => void;

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
  const secretaryId = useRef<string>('');
  const [isConnectModalOpen, setConnectModalOpen] = useState(false);

  const updateGameState = (state: Partial<CharacterState>, info: string[]) => {
    if (!wsClient.current) return;
    const oldGameState = getGameState();
    if (!oldGameState) return;
    const currentClass = getClass();
    if (!currentClass) return;

    const {
      characters,
      revision,
      ...rest
    } = oldGameState;
    const currentCharacterIndex = characters
      .findIndex(({ name }) => name === mapCharacterNameToSecretary(currentClass.name));
    const character = characters[currentCharacterIndex];

    const newGameState = {
      ...rest,
      revision: revision + 1,
      characters: characters.with(currentCharacterIndex, {
        ...character,
        ...state,
      }),
    }
    info.splice(1, 0, character.title);
    wsClient.current.send(JSON.stringify({
      code: secretaryId,
      password: secretaryId,
      type: "game",
      payload: newGameState,
      revision: 0,
      undoinfo: info,
      undolength: 1,
    }));
    setGameState(newGameState);
  }

  useEffect(() => {
    const host = localStorage.getItem('secretary-host');
    const id = localStorage.getItem('secretary-id');
    if (!id || !host) return;
    connectToSecretary({ host, id }).then((client) => {
      wsClient.current = client;
      secretaryId.current = id;
    });
    return () => wsClient.current?.close();
  }, []);

  return <WebSocketContext value={{
    isConnected: !!wsClient.current,
    id: secretaryId.current,
    update: updateGameState
  }}>
    {isConnectModalOpen && <Modal onCancel={() => setConnectModalOpen(false)}>
      <ConnectForm onConnect={({ client, id }) => {
        wsClient.current = client;
        secretaryId.current = id;
        setConnectModalOpen(false);
      }} />
    </Modal>}
    <Menu onOpenConnectModal={() => setConnectModalOpen(true)} />
    {children}
  </WebSocketContext>;
}
