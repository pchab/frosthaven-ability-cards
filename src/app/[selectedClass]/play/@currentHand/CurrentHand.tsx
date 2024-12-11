'use client';

import CardPile from '@/app/_components/cards/CardPile';
import { ClassContext } from '@/context/ClassContext';
import type { Card } from '@/domain/cards.type';
import { isGeminate } from '@/domain/geminate/class';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import { use } from 'react';

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

  const currentHand = currentCards
    .filter(classFilter)
    .filter(({ status }) => status === 'inHand');

  const actions = (card: X) => [{
    name: 'Select Card',
    onClick: () => selectCard(card),
  }, {
    name: 'Discard Card',
    onClick: () => discardCard(card),
  }, {
    name: 'Lose Card',
    onClick: () => loseCard(card),
  }];

  return <CardPile
    cards={currentHand}
    actions={actions}
    maxCardLength={isGeminate(selectedClass) ? selectedClass.handSize / 2 : selectedClass.handSize}
  />;
}