'use client';

import { CardStatus } from '@/domain/cards.type';
import { useCards } from '../useCards';
import { PredefinedHoverArea } from '@/app/_components/cards/hover-area';
import CardPile from '@/app/_components/cards/CardPile';
import ShortRestButton from '@/app/_components/rests/ShortRestButton';
import LongRestButton from '@/app/_components/rests/LongRestButton';

export default function DiscardedCards() {
  const {
    currentCards,
    recoverCard,
    makeRest,
  } = useCards();

  const discardPile = currentCards
    .filter(card => card.status === CardStatus.discarded);

  const recoverClickProps = {
    getZone: () => PredefinedHoverArea.all,
    onClick: recoverCard,
    info: 'Recover Card',
  };

  return <div className='flex justify-between'>
    <CardPile
      cards={discardPile}
      clickProps={[recoverClickProps]}
    />
    {discardPile.length > 1 && <div className='flex flex-col justify-between'>
      <ShortRestButton cards={discardPile} onShortRest={makeRest} />
      <LongRestButton cards={discardPile} onLongRest={makeRest} />
    </div>}
  </div>;
}