'use client';

import { CardStatus, type Card } from '@/domain/cards.type';
import { useCards } from '../useCards';
import CardPile from '@/app/_components/cards/CardPile';
import ShortRestButton from '@/app/_components/inputs/rests/ShortRestButton';
import LongRestButton from '@/app/_components/inputs/rests/LongRestButton';

export default function DiscardedCards() {
  const {
    currentCards,
    recoverCard,
    loseCard,
    makeRest,
  } = useCards();

  const discardPile = currentCards
    .filter(card => card.status === CardStatus.discarded);

  const actions = (card: Card) => [{
    name: 'Recover Card',
    onClick: () => recoverCard(card),
  }, {
    name: 'Lose Card',
    onClick: () => loseCard(card),
  }];

  return <div className='flex justify-between'>
    <CardPile
      cards={discardPile}
      actions={actions}
    />
    {discardPile.length > 1 && <div className='flex flex-col justify-between'>
      <ShortRestButton cards={discardPile} onShortRest={makeRest} />
      <LongRestButton cards={discardPile} onLongRest={makeRest} />
    </div>}
  </div>;
}