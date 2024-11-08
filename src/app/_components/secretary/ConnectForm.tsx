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
      const id = formData.get('secretary-id')! as string;
      try {
        const client = await connectToSecretary(id);
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

  return <form action={connect} className='flex flex-col gap-4 items-center'>
    <label htmlFor='secretary-id'>Secretary ID</label>
    <input className='bg-black min-w-96' type='text' name='secretary-id' placeholder='GH Secretary ID' />
    <Button type='submit'>Connect</Button>
    {isPending && <p>Connecting...</p>}
    {isConnected && <p>Connected to {id}</p>}
    {state && <p>{state}</p>}
  </form>;
}