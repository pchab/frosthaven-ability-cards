import type { ReactNode } from 'react'

export default function BoardArea({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return <div className='m-1 p-1 border-solid border-2 rounded w-full'>
    <p>{title}</p>
    {children}
  </div>;
}
