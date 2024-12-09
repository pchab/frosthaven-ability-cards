import Heading from '@/app/_components/layout/Heading';
import type { ReactNode } from 'react';
import IdentityProvider from '@/context/IdentityContext';

export default function PlayLayout({
  children,
  currentHand,
  discardedCards,
  lostCards,
  selectedCards,
  activeEffects,
  rests,
  ghsStatus,
}: {
  children: ReactNode;
  currentHand: ReactNode;
  discardedCards: ReactNode;
  lostCards: ReactNode;
  selectedCards: ReactNode;
  activeEffects: ReactNode;
  rests: ReactNode;
  ghsStatus: ReactNode;
}) {
  return <div className='h-full p-2 gap-4 flex flex-col-reverse lg:flex-row justify-center'>
    <Heading title='Play your cards' />

    <IdentityProvider>
      <div className='h-full flex flex-col items-center gap-4'>
        {currentHand}
        {discardedCards}
        {lostCards}
      </div>

      <div className='h-full flex flex-col items-center gap-4'>
        <div className='flex flex-row lg:flex-col gap-4 items-center'>
          {children}
          {selectedCards}
        </div>
        {activeEffects}
      </div>
    </IdentityProvider>
  </div>;
}