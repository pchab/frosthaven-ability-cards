'use client';

import CardPile from '@/app/_components/cards/CardPile';
import { PredefinedHoverArea } from '@/app/_components/cards/hover-area';
import { useCards } from '@/app/play/useCards';
import { CardStatus } from '@/domain/cards.type';
import type { GeminateCard } from '@/domain/geminate/cards';
import { useFrosthavenStore } from '@/stores/cards.store';

export default function GeminateCurrentHand() {
  const currentForm = useFrosthavenStore((state) => state.currentForm);
  const {
    currentCards,
    selectCard,
    loseCard,
  } = useCards<GeminateCard>();

  const currentHand = currentCards
    .filter((card) => card.form === currentForm)
    .filter((card) => card.status === CardStatus.inHand);

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