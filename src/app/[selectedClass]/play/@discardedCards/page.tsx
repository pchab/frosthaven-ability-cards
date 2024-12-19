'use client';

import type { Card } from '@/domain/cards.type';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import CardPile from '@/app/_components/cards/CardPile';
import { use } from 'react';
import { ClassContext } from '@/context/ClassContext';
import ShortRestButton from './ShortRestButton';
import LongRestButton from './LongRestButton';
import BoardArea from '@/app/_components/layout/BoardArea';

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

  return <BoardArea title='Discarded cards' actions={discardPile.length > 1
    ? [<ShortRestButton key='short-rest' cards={discardPile} />, <LongRestButton key='long-rest' cards={discardPile} />]
    : undefined
  }>
    <CardPile
      cards={discardPile}
      actions={actions}
      maxCardLength={fhClass.handSize}
    />
  </BoardArea>;
}