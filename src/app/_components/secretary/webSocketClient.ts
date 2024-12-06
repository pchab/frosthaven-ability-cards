import type { GameState } from '@/domain/secretary/game.state';
import { setGameState } from '@/stores/game.store';

export async function connectToSecretary({
  host,
  id,
}: {
  host: string;
  id: string;
}) {
  const client = new WebSocket(host);

  return new Promise<WebSocket>((resolve, reject) => {
    client.onmessage = (event) => {
      const { type, payload } = JSON.parse(event.data) as { type: string, payload: GameState };
      if (type === 'game' || type === 'game-update' || type === 'game-undo') {
        setGameState(payload);
      }
    };

    client.onopen = () => {
      localStorage.setItem('secretary-id', id);
      localStorage.setItem('secretary-host', host);
      client.send(JSON.stringify({
        code: id,
        password: id,
        type: "request-game",
      }));
      resolve(client);
    };

    client.onerror = (event) => {
      reject();
    };
  });
}
