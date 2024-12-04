import type { ReactNode } from 'react'

export default function BoardArea({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return <div className='border-solid border-l-2 rounded-lg border-primary'>
    <div className='flex'>
      <h2 className='text-lg px-2 bg-slate-700 border-t-2 border-r-2 rounded-t-lg border-primary -mb-[2px] pb-[2px] z-10'>{title}</h2>
    </div>
    <div className='p-2 border-r-2 border-b-2 border-t-2 border-primary rounded-tr-lg rounded-b-lg bg-linear-to-r from-slate-700 to-blue-300'>
      {children}
    </div>
  </div>;
}
