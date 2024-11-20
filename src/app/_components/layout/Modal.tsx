import type { ReactNode } from 'react';

export default function Modal({
  children,
  onCancel,
}: {
  children: ReactNode;
  onCancel: () => void;
}) {
  return <div
    className='absolute top-0 left-0 w-full h-full flex flex-col gap-4 items-center justify-center bg-black/80 z-40'
  >
    <button onClick={onCancel} className='absolute top-0 right-0 p-8'>X</button>
    {children}
  </div>;
}
