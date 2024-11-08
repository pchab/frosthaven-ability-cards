import type { GameState } from '@/domain/secretary/game.state';
import { setGameState } from '@/stores/game.store';

export async function connectToSecretary(id: string) {
  const client = new WebSocket('wss://gloomhaven-secretary.de:8443/');

  return new Promise<WebSocket>((resolve, reject) => {
    client.onmessage = (event) => {
      const { type, payload } = JSON.parse(event.data) as { type: string, payload: GameState };
      if (type === 'game' || type === 'game-update') {
        setGameState(payload);
      }
    };

    client.onopen = () => {
      console.log('connected');
      localStorage.setItem('secretary-id', id);
      client.send(`{ "code": ${id}, "password": ${id}, "type": "request-game" }`);
      resolve(client);
    };

    client.onerror = (event) => {
      console.error(event);
      reject();
    };
  });
}
