import type { ReactNode } from 'react'

export default function BoardArea({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return <div className='m-2 p-2 border-solid border-2 rounded w-full'>
    <p>{title}</p>
    {children}
  </div>;
}
