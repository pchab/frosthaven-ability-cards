import type { ReactNode } from 'react';

export default function Modal({
  children,
  onCancel,
}: {
  children: ReactNode;
  onCancel: () => void;
}) {
  return <div
    className='fixed top-0 left-0 w-full h-full flex flex-col gap-4 items-center justify-center bg-black/80 z-60'
  >
    {children}
    <button aria-label='Close modal' onClick={onCancel} className='absolute top-0 right-0 p-8'>X</button>
  </div>;
}
