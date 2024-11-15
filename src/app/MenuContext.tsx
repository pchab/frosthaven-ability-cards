'use client';

import type { CharacterState } from '@/domain/secretary/game.state';
import { getClass } from '@/stores/class.store';
import { getGameState } from '@/stores/game.store';
import { createContext, useEffect, useState, type ReactNode } from 'react';
import MenuButton from './MenuButton';
import ConnectForm from './_components/secretary/ConnectForm';
import { connectToSecretary } from './_components/secretary/webSocketClient';
import { mapCharacterNameToSecretary } from '@/domain/secretary/secretary-character.mapper';
import Modal from './_components/layout/Modal';

type WsGameStateUpdate = (state: Partial<CharacterState>, info: string[]) => void;

export const WebSocketContext = createContext<{
  isConnected: boolean;
  id: string;
  update?: WsGameStateUpdate | null;
}>({
  isConnected: false,
  id: '',
});

export default function MenuContext({ children }: { children: ReactNode }) {
  const [wsClient, setWsClient] = useState<WebSocket | null>(null);
  const [secretaryId, setSecretaryId] = useState<string>('');
  const [isConnectModalOpen, setConnectModalOpen] = useState(false);

  const updateGameState = (state: Partial<CharacterState>, info: string[]) => {
    if (!wsClient) return;
    const oldGameState = getGameState();
    if (!oldGameState) return;
    const fhClass = getClass();
    if (!fhClass) return;

    const {
      characters,
      revision,
      ...rest
    } = oldGameState;
    const currentCharacterIndex = characters
      .findIndex(({ name }) => name === mapCharacterNameToSecretary(fhClass.name));

    const newGameState = {
      ...rest,
      revision: revision + 1,
      characters: characters.with(currentCharacterIndex, {
        ...characters[currentCharacterIndex],
        ...state,
      }),
    }
    info.splice(1, 0, fhClass.name);
    wsClient.send(JSON.stringify({
      code: secretaryId,
      password: secretaryId,
      type: "game",
      payload: newGameState,
      revision: 0,
      undoinfo: info,
      undolength: 1,
    }))
  }

  useEffect(() => {
    const host = localStorage.getItem('secretary-host');
    const id = localStorage.getItem('secretary-id');
    if (!id || !host) return;
    connectToSecretary({ host, id }).then((client) => {
      setWsClient(client);
      setSecretaryId(id);
    });
    return () => wsClient?.close();
  }, []);

  return <WebSocketContext value={{
    isConnected: !!wsClient,
    id: secretaryId,
    update: updateGameState
  }}>
    {isConnectModalOpen && <Modal onCancel={() => setConnectModalOpen(false)}>
      <ConnectForm onConnect={({ client, id }) => {
        setWsClient(client);
        setSecretaryId(id);
        setConnectModalOpen(false);
      }} />
    </Modal>}
    <MenuButton onOpenConnectModal={() => setConnectModalOpen(true)} />
    {children}
  </WebSocketContext>;
}
