import type { ReactNode } from 'react';

export default function Modal({
  children,
}: {
  children: ReactNode;
}) {
  return <div
    className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/80 z-40'
  >
    {children}
  </div>;
}