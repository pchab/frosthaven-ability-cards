import { type ReactNode } from 'react';

export default function SelectCardsLayout({
  children,
  selectedCards,
  cardsByLevel,
}: {
  children: ReactNode;
  selectedCards: ReactNode;
  cardsByLevel: ReactNode;
}) {
  return (<div className='p-4 flex flex-col gap-4 items-center'>
    <div className='flex justify-between items-center gap-4 border-solid border-2 rounded-lg p-4 bg-gradient-to-r from-slate-700 to-blue-300'>
      {children}
    </div>

    <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-full'>
        {selectedCards}
      </div>

      {cardsByLevel}
    </div>
  </div>);
}
