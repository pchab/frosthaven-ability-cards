'use client';

import type { Card } from '@/domain/cards.type';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import CardPile from '@/app/_components/cards/CardPile';
import { use } from 'react';
import { ClassContext } from '@/context/ClassContext';
import ShortRestButton from './ShortRestButton';
import LongRestButton from './LongRestButton';

export default function DiscardedCards() {
  const fhClass = use(ClassContext);
  const {
    currentCards,
    recoverCard,
    loseCard,
  } = useCards();

  const discardPile = currentCards
    .filter(({ status }) => status === 'discarded');

  const actions = (card: Card) => [{
    name: 'Recover Card',
    onClick: () => recoverCard(card),
  }, {
    name: 'Lose Card',
    onClick: () => loseCard(card),
  }];

  return <div className='relative'>
    <CardPile
      cards={discardPile}
      actions={actions}
      maxCardLength={fhClass.handSize}
    />
    {discardPile.length > 1 && <div className='absolute right-0 top-0 bottom-0 flex flex-col justify-between z-21 pointer-events-none'>
      <div className='pointer-events-auto'><ShortRestButton cards={discardPile} /></div>
      <div className='pointer-events-auto'><LongRestButton cards={discardPile} /></div>
    </div>}
  </div>;
}