import { type ReactNode } from 'react';
import Heading from '@/app/_components/layout/Heading';
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
  return (<div className='p-8 flex flex-col gap-4 items-center'>
    <Heading title='Select your cards' />
    <div className='flex justify-between items-center gap-4 border-solid border-2 rounded-lg p-4 bg-linear-to-r from-slate-700 to-blue-300'>
      {children}
    </div>

    <div className='flex flex-col gap-4 items-center w-[811px]'>
      {selectedCards}

      <AvailableCardsByLevel level={1} />
      <div className='flex flex-row flex-wrap gap-4 justify-center items-center'>
        <AvailableCardsByLevel level={'X'} />
        {cardsForLevelUp}
      </div>
    </div>
  </div>);
}
