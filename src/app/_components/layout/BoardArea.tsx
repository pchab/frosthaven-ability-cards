import type { ReactNode } from 'react'

export default function BoardArea({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return <div className='border-solid border-l-2 rounded-lg'>
    <div className='flex'>
      <h2 className='text-lg px-2 bg-slate-700 border-t-2 border-r-2 rounded-t-lg'>{title}</h2>
      <div className='grow bg-transparent border-b-2 mr-2'></div>
    </div>
    <div className='p-2 border-r-2 border-b-2 rounded-tr-lg rounded-b-lg bg-gradient-to-r from-slate-700 to-blue-300'>
      {children}
    </div>
  </div>;
}
