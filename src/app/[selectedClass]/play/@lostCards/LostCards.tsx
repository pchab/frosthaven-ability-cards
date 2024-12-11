'use client';

import type { Card } from '@/domain/cards.type';
import CardPile from '@/app/_components/cards/CardPile';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import { ClassContext } from '@/context/ClassContext';
import { use } from 'react';

export default function LostCards() {
  const fhClass = use(ClassContext);
  const {
    currentCards,
    recoverCard,
  } = useCards();

  const lostPile = currentCards
    .filter(({ status }) => status === 'lost');

  const recoverAction = (card: Card) => [{
    name: 'Recover Card',
    onClick: () => recoverCard(card),
  }];

  return <CardPile
    cards={lostPile}
    actions={recoverAction}
    maxCardLength={fhClass.handSize}
  />;
}