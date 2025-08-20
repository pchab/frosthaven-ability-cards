import Heading from '@/app/_components/layout/Heading';
import AvailableCardsByLevel from './@cardsForLevelUp/AvailableCardsByLevel';
import BoardArea from '@/app/_components/layout/BoardArea';

export default function SelectCardsLayout({
  children,
  selectedCards,
  cardsForLevelUp,
}: LayoutProps<'/[selectedClass]/select'>) {
  return (<div className='p-8 flex flex-col gap-4 items-center'>
    <Heading title='Select your cards' />
    <BoardArea>
      {children}
    </BoardArea>

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
