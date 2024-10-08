import type { ReactNode } from 'react'

export default function BoardArea({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return <div className='m-1 p-2 border-solid border-2 rounded w-full'>
    <p className='text-lg'>{title}</p>
    {children}
  </div>;
}
