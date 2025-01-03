import Button from '../inputs/Button';
import { useActionState, useContext } from 'react';
import { connectToSecretary } from './webSocketClient';
import { WebSocketContext } from '@/context/WebSocketContext';
import type { GameState } from '@/domain/secretary/game.state';
import SecretaryLink from './SecretaryLink';

type State = 'Connected' | 'Failed to connect' | null;

export default function ConnectForm({
  onConnect,
  onData,
}: {
  onConnect: (args: {
    client: WebSocket;
    id: string;
  }) => void;
  onData: (data: GameState) => void;
}) {
  const { id: currentId, isConnected } = useContext(WebSocketContext);
  const [state, connect, isPending] = useActionState(
    async (_state: State, formData: FormData) => {
      const host = formData.get('secretary-host') as string;
      const id = formData.get('secretary-id') as string;
      try {
        const client = await connectToSecretary({ host, secretaryId: id, onData });
        onConnect({ client, id });
        return 'Connected';
      }
      catch (error) {
        console.error(error);
        return 'Failed to connect';
      }
    },
    null,
  );

  return <form action={connect} className='bg-linear-to-b from-black to-blue-500 rounded-lg grid grid-cols-4 gap-4 justify-items-center items-center p-4 border-2 border-solid'>
    <h3 className='col-span-full text-xl'>Connect to <SecretaryLink>GH Secretary</SecretaryLink></h3>

    <label className='col-span-1' htmlFor='secretary-host'>Host :</label>
    <input className='col-span-3 bg-black min-w-96' type='text' name='secretary-host' defaultValue='wss://gloomhaven-secretary.de:8443/' />

    <label className='col-span-1' htmlFor='secretary-id'>ID :</label>
    <input autoFocus className='col-span-3 bg-black min-w-96' type='text' name='secretary-id' placeholder='GH Secretary ID' />

    <div className='col-span-full'>
      <Button
        label='Connect to GH Secretary'
        type='submit'
      >
        Connect
      </Button>
    </div>

    <div className='col-span-full'>
      {isPending && <p>Connecting...</p>}
      {isConnected && <p>Connected to {currentId}</p>}
      {state && <p>{state}</p>}
    </div>
  </form>;
}