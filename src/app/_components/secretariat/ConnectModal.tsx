import type { GameState } from '@/domain/secretariat/game.state';
import Button from '../inputs/Button';
import Modal from '../layout/Modal';
import { setGameState } from '@/stores/game.store';
import { useActionState } from 'react';

export default function ConnectModal({
  onConnect,
}: {
  onConnect: (args: {
    client: WebSocket;
    id: string;
  }) => void;
}) {
  const [error, connect, isPending] = useActionState(
    async (_: any, formData: FormData) => {
      const id = formData.get('secretariat-id')! as string;
      const client = new WebSocket('wss://gloomhaven-secretariat.de:8443/');

      client.onmessage = (event) => {
        const { type, payload } = JSON.parse(event.data) as { type: string, payload: GameState };
        if (type === 'game' || type === 'game-update') {
          setGameState(payload);
        }
      };

      client.onopen = () => {
        console.log('connected');
        client.send(`{ "code": ${id}, "password": ${id}, "type": "request-game" }`);
      };

      onConnect({ client, id });
    },
    null,
  );

  return <Modal>
    <form action={connect} className='flex flex-col gap-4 items-center'>
      <input type='text' name='secretariat-id' placeholder='859b7dfd-c433-4afd-b18d-44d408786ea8' />
      <Button type='submit'>Connect</Button>
      {isPending && <p>Connecting...</p>}
    </form>
  </Modal>;
}