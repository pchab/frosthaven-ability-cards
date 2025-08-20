import Heading from '@/app/_components/layout/Heading';
import IdentityProvider from '@/context/IdentityContext';

export default function PlayLayout({
  children,
  currentHand,
  discardedCards,
  lostCards,
  selectedCards,
  activeEffects,
}: LayoutProps<'/[selectedClass]/play'>) {
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