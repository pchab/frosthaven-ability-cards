import Button from '../inputs/Button';
import { useActionState, useContext } from 'react';
import { connectToSecretary } from './webSocketClient';
import { WebSocketContext } from '@/app/MenuContext';

export default function ConnectForm({
  onConnect,
}: {
  onConnect: (args: {
    client: WebSocket;
    id: string;
  }) => void;
}) {
  const { isConnected, id } = useContext(WebSocketContext);
  const [state, connect, isPending] = useActionState(
    async (_: any, formData: FormData) => {
      const host = formData.get('secretary-host')! as string;
      const id = formData.get('secretary-id')! as string;
      try {
        const client = await connectToSecretary({ host, id });
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

  return <form action={connect} className='bg-gradient-to-b from-black to-blue-500 rounded-lg grid grid-cols-4 gap-4 justify-items-center items-center p-4 border-2 border-solid'>
    <h3 className='col-span-full text-xl'>Connect to GH Secretary</h3>

    <label className='col-span-1' htmlFor='secretary-host'>Host :</label>
    <input className='col-span-3 bg-black min-w-96' type='text' name='secretary-host' defaultValue='wss://gloomhaven-secretary.de:8443/' />

    <label className='col-span-1' htmlFor='secretary-id'>ID :</label>
    <input className='col-span-3 bg-black min-w-96' type='text' name='secretary-id' placeholder='GH Secretary ID' />

    <div className='col-span-full'>
      <Button type='submit'>Connect</Button>
    </div>

    <div className='col-span-full'>
      {isPending && <p>Connecting...</p>}
      {isConnected && <p>Connected to {id}</p>}
      {state && <p>{state}</p>}
    </div>
  </form>;
}