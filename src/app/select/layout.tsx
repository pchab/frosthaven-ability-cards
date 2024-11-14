import { type ReactNode } from 'react';
import Heading from '../_components/layout/Heading';
import AvailableCardsByLevel from './@cardsForLevelUp/AvailableCardsByLevel';

export default function SelectCardsLayout({
  children,
  selectedCards,
  cardsForLevelUp,
}: {
  children: ReactNode;
  selectedCards: ReactNode;
  cardsForLevelUp: ReactNode;
}) {
  return (<div className='p-4 flex flex-col gap-4 items-center'>
    <Heading title='Select your cards' />
    <div className='flex justify-between items-center gap-4 border-solid border-2 rounded-lg p-4 bg-gradient-to-r from-slate-700 to-blue-300'>
      {children}
    </div>

    <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-full'>
        {selectedCards}
      </div>

      <div className='col-span-full flex flex-row gap-4 w-full justify-between'>
        <AvailableCardsByLevel level={'X'} />

        <div className='grow'>
          <AvailableCardsByLevel level={1} />
        </div>
      </div>
      {cardsForLevelUp}
    </div>
  </div>);
}
