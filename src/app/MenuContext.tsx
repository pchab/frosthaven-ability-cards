'use client';

import { createContext, useEffect, useState, type ReactNode } from 'react';
import MenuButton from './MenuButton';
import ConnectModal from './_components/secretariat/ConnectModal';
import type { CharacterState } from '@/domain/secretariat/game.state';
import { getGameState } from '@/stores/game.store';
import { getClass } from '@/stores/class.store';
import { connectToSecretariat } from './_components/secretariat/webSocketClient';


type WsGameStateUpdate = (state: Partial<CharacterState>, info: string[]) => void
export const WebSocketContext = createContext<WsGameStateUpdate | null>(null);

export default function MenuContext({ children }: { children: ReactNode }) {
  const [wsClient, setWsClient] = useState<WebSocket | null>(null);
  const [secretariatId, setSecretariatId] = useState<string>('');
  const [isConnectModalOpen, setConnectModalOpen] = useState(false);

  const updateGameState = (state: Partial<CharacterState>, info: string[]) => {
    if (!wsClient) return;
    const oldGameState = getGameState();
    if (!oldGameState) return;
    const fhClass = getClass();
    if (!fhClass) return;

    const {
      characters,
      ...rest
    } = oldGameState;
    const currentCharacterIndex = characters
      .findIndex(({ name }) => name === fhClass.name.toLowerCase());

    const newGameState = {
      ...rest,
      characters: characters.with(currentCharacterIndex, {
        ...characters[currentCharacterIndex],
        ...state,
      }),
    }
    info.splice(1, 0, fhClass.name);
    wsClient.send(`{"code":"${secretariatId}","password":"${secretariatId}","type":"game","payload":${JSON.stringify(newGameState)},"revision":0,"undoinfo":${JSON.stringify(info)},"undolength":1}`)
  }

  useEffect(() => {
    const id = localStorage.getItem('secretariat-id');
    if (!id) return;
    const client = connectToSecretariat(id);
    setSecretariatId(id);
    setWsClient(client);
    return () => client.close();
  }, []);

  return <WebSocketContext value={updateGameState}>
    {isConnectModalOpen && <ConnectModal onConnect={({ client, id }) => {
      setWsClient(client);
      setSecretariatId(id);
      setConnectModalOpen(false);
    }} />}
    <MenuButton onOpenConnectModal={() => setConnectModalOpen(true)} />
    {children}
  </WebSocketContext>;
}
