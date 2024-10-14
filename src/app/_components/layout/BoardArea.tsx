import type { ReactNode } from 'react'

export default function BoardArea({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return <div className='m-1 p-2 border-solid border-2 rounded-lg w-full bg-gradient-to-r from-slate-700 to-blue-300'>
    <p className='text-lg'>{title}</p>
    {children}
  </div>;
}
