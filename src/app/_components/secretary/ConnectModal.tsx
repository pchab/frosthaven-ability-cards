import Button from '../inputs/Button';
import Modal from '../layout/Modal';
import { useActionState } from 'react';
import { connectToSecretary } from './webSocketClient';

export default function ConnectModal({
  onConnect,
}: {
  onConnect: (args: {
    client: WebSocket;
    id: string;
  }) => void;
}) {
  const [, connect, isPending] = useActionState(
    async (_: any, formData: FormData) => {
      const id = formData.get('secretary-id')! as string;
      const client = connectToSecretary(id);

      onConnect({ client, id });
    },
    null,
  );

  return <Modal>
    <form action={connect} className='flex flex-col gap-4 items-center'>
      <label htmlFor='secretary-id'>Secretary ID</label>
      <input className='bg-black min-w-96' type='text' name='secretary-id' placeholder='859b7dfd-c433-4afd-b18d-44d408786ea8' />
      <Button type='submit'>Connect</Button>
      {isPending && <p>Connecting...</p>}
    </form>
  </Modal>;
}