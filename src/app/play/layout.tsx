import type { ReactNode } from 'react';
import Heading from '../_components/layout/Heading';

export default function PlayLayout({
  children,
  currentHand,
  discardedCards,
  lostCards,
  selectedCards,
  activeEffects,
}: {
  children: ReactNode;
  currentHand: ReactNode;
  discardedCards: ReactNode;
  lostCards: ReactNode;
  selectedCards: ReactNode;
  activeEffects: ReactNode;
}) {
  return (
    <div className='h-full p-2 flex flex-row'>
      <Heading title='Play your cards' />
      <div className='h-full basis-2/3'>
        {currentHand}
        {discardedCards}
        {lostCards}
      </div>

      <div className='h-full basis-1/3 p-2 m-2 flex flex-col items-center'>
        {children}
        {selectedCards}
        {activeEffects}
      </div>
    </div>
  );
}