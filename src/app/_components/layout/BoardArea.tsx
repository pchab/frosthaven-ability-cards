import type { ReactNode } from 'react'

export default function BoardArea({
  title,
  actions,
  children,
}: {
  title: string;
  actions?: ReactNode[];
  children?: ReactNode;
}) {
  return <div className='border-solid border-l-2 rounded-lg border-primary'>
    <div className='flex justify-between gap-2'>
      <h2 className='text-lg px-2 border-t-2 border-r-2 rounded-t-lg bg-linear-to-r from-slate-700 to-slate-500 border-primary -mb-[2px] pb-[2px]'>{title}</h2>
      {actions &&
        <div className='flex gap-1'>
          {actions.map((action, index) => <div
            key={index}
            className='text-lg px-2 border-t-2 border-l-2 border-r-2 rounded-t-lg bg-linear-to-r from-slate-500 to-blue-300 border-primary -mb-[2px] pb-[2px]'
          >
            {action}
          </div>)}
        </div>
      }
    </div>
    <div className={`p-2 border-r-2 border-b-2 border-t-2 border-primary ${!actions && 'rounded-tr-lg'} rounded-b-lg bg-linear-to-r from-slate-700 to-blue-300`}>
      {children}
    </div>
  </div>;
}
