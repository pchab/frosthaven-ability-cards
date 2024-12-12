'use client';

import type { Card } from '@/domain/cards.type';
import CardPile from '@/app/_components/cards/CardPile';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import { ClassContext } from '@/context/ClassContext';
import { use, useCallback, useMemo } from 'react';

export default function LostCards() {
  const fhClass = use(ClassContext);
  const {
    currentCards,
    recoverCard,
  } = useCards();

  const lostPile = useMemo(() => currentCards
    .filter(({ status }) => status === 'lost'),
    [currentCards]);

  const recoverAction = useCallback((card: Card) => [{
    name: 'Recover Card',
    onClick: () => recoverCard(card),
  }], [recoverCard]);

  return <CardPile
    cards={lostPile}
    actions={recoverAction}
    maxCardLength={fhClass.handSize}
  />;
}