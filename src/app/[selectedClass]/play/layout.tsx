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
  identity,
}: {
  children: ReactNode;
  currentHand: ReactNode;
  discardedCards: ReactNode;
  lostCards: ReactNode;
  selectedCards: ReactNode;
  activeEffects: ReactNode;
  identity: ReactNode;
}) {
  return <div className='p-8'>
    <Heading title='Play your cards' />

    <IdentityProvider>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-center items-center gap-4'>
          {identity}
          {activeEffects}
          {children}
        </div>

        <div className='flex flex-row justify-center items-center'>
          {discardedCards}
          {selectedCards}
          {lostCards}
        </div>

        <div className='flex flex-row justify-center items-center'>
          {currentHand}
        </div>
      </div>
    </IdentityProvider>
  </div>;
}