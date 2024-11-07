import type { GameState } from '@/domain/secretariat/game.state';
import { setGameState } from '@/stores/game.store';

export function connectToSecretariat(id: string) {
  const client = new WebSocket('wss://gloomhaven-secretariat.de:8443/');

  client.onmessage = (event) => {
    const { type, payload } = JSON.parse(event.data) as { type: string, payload: GameState };
    if (type === 'game' || type === 'game-update') {
      setGameState(payload);
    }
  };

  client.onopen = () => {
    console.log('connected');
    localStorage.setItem('secretariat-id', id);
    client.send(`{ "code": ${id}, "password": ${id}, "type": "request-game" }`);
  };

  return client;
}
