import type { ReactNode } from 'react';

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
    <div className='p-2 flex flex-row'>

      <div className='basis-2/3'>
        {currentHand}
        {discardedCards}
        {lostCards}
      </div>

      <div className='basis-1/3 p-2 m-2 flex flex-col items-center'>
        {children}
        {selectedCards}
        {activeEffects}
      </div>
    </div>
  );
}