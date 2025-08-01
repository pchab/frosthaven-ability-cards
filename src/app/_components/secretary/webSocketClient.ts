import type { GameState } from '@/domain/secretary/game.state';

export async function connectToSecretary({
  host,
  secretaryId,
  onData,
  onDisconnect,
}: {
  host: string;
  secretaryId: string;
  onData: (data: GameState) => void;
  onDisconnect: () => void;
}) {
  const client = new WebSocket(host);

  return new Promise<WebSocket>((resolve) => {
    client.onmessage = (event) => {
      const { type, payload } = JSON.parse(event.data) as { type: string, payload: GameState };
      if (type === 'game' || type === 'game-update' || type === 'game-undo') {
        onData(payload);
      }
    };

    client.onopen = () => {
      localStorage.setItem('secretary-id', secretaryId);
      localStorage.setItem('secretary-host', host);
      client.send(JSON.stringify({
        code: secretaryId,
        password: secretaryId,
        type: "request-game",
      }));
      console.log('Connected to secretary:', host);
      resolve(client);
    };

    client.onerror = () => {
      client.close();
      onDisconnect();
    };

    client.onclose = () => {
      console.log('Connection closed');
    };
  });
}
