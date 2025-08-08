import type { ReactNode } from 'react'

export default function BoardArea({
  title,
  actions,
  children,
}: {
  title?: string | ReactNode;
  actions?: ReactNode[];
  children?: ReactNode;
}) {
  return <div className='flex flex-col-reverse border-solid border-l-2 rounded-lg border-primary'>
    <div className={`p-2 border-r-2 border-b-2 border-t-2 border-primary ${!actions ? 'rounded-tr-lg' : ''} ${!title ? 'rounded-tl-lg' : ''} rounded-b-lg bg-slate-900 shadow-md shadow-primary`}>
      {children}
    </div>
    <div className='flex justify-between items-end gap-2'>
      {title && <h2 className='text-lg px-2 border-t-2 border-r-2 rounded-t-lg bg-slate-900 border-primary -mb-[2px] pb-[2px]'>{title}</h2>}
      {actions &&
        <div className='flex gap-1'>
          {actions.map((action, index) => <div
            key={index}
            className='text-lg px-2 border-t-2 border-l-2 border-r-2 rounded-t-lg bg-slate-900 border-primary -mb-[2px] pb-[2px]'
          >
            {action}
          </div>)}
        </div>
      }
    </div>
  </div>;
}
