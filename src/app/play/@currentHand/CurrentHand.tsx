'use client';

import CardPile from '@/app/_components/cards/CardPile';
import { PredefinedHoverArea } from '@/app/_components/cards/hover-area';
import { CardStatus, type Card } from '@/domain/cards.type';
import { useCards } from '../useCards';

export default function CurrentHand<X extends Card>({
  classFilter = () => true,
}: {
  classFilter?: (card: X) => boolean;
}) {
  const {
    currentCards,
    selectCard,
    loseCard,
  } = useCards<X>();

  const currentHand = currentCards
    .filter(card => classFilter(card))
    .filter(card => card.status === CardStatus.inHand);

  const selectClickProps = {
    getZone: () => PredefinedHoverArea.left,
    onClick: selectCard,
    info: 'Select Card',
  };
  const loseClickProps = {
    getZone: () => PredefinedHoverArea.right,
    onClick: loseCard,
    info: 'Lose Card',
  };

  return <CardPile
    cards={currentHand}
    clickProps={[selectClickProps, loseClickProps]}
  />;
}