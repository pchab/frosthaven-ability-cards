'use client';

import CardPile from '@/app/_components/cards/CardPile';
import { ClassContext } from '@/context/ClassContext';
import type { Card } from '@/domain/cards.type';
import { isGeminate } from '@/domain/geminate/class';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import { use, useCallback, useMemo } from 'react';

export default function CurrentHand<X extends Card>({
  classFilter = () => true,
}: {
  classFilter?: (card: X) => boolean;
}) {
  const selectedClass = use(ClassContext);
  const {
    currentCards,
    selectCard,
    discardCard,
    loseCard,
  } = useCards<X>();

  const currentHand = useMemo(() => currentCards
    .filter(classFilter)
    .filter(({ status }) => status === 'inHand'),
    [currentCards, classFilter],
  );

  const actions = useCallback((card: X) => [{
    name: 'Select Card',
    onClick: () => selectCard(card),
  }, {
    name: 'Discard Card',
    onClick: () => discardCard(card),
  }, {
    name: 'Lose Card',
    onClick: () => loseCard(card),
  }], [selectCard, discardCard, loseCard]);

  return <CardPile
    cards={currentHand}
    actions={actions}
    maxCardLength={isGeminate(selectedClass) ? selectedClass.handSize / 2 : selectedClass.handSize}
  />;
}