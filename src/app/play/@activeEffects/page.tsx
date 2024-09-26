'use client';

import { CardActions, CardStatus, type Card } from '@/domain/cards.type';
import BoardArea from '@/app/_components/BoardArea';
import { useCards } from '../useCards';
import { useFrosthavenStore } from '@/stores/cards.store';
import ActiveEffects from '@/app/_components/cards/ActiveEffects';
import { redirect } from 'next/navigation';
import { PredefinedHoverArea } from '@/app/_components/cards/hover-area';

export default function ActiveEffectsPage<X extends Card>() {
  const { selectedClass } = useFrosthavenStore((state) => ({
    selectedClass: state.selectedClass,
  }));
  const {
    currentCards,
    discardCard,
    loseCard,
  } = useCards<X>();

  if (!selectedClass) {
    return redirect('/');
  }

  const activeEffects = currentCards
    .filter(card => [CardStatus.activeTop, CardStatus.activeBottom].includes(card.status));

  const removeEffectClickProps = {
    getZone: (card: X) => card.status === CardStatus.activeTop ? PredefinedHoverArea.top : PredefinedHoverArea.bottom,
    onClick: (card: X) => {
      const action = card.status === CardStatus.activeTop ? card.actions.top : card.actions.bottom;
      action === CardActions.activeDiscard ? discardCard(card) : loseCard(card)
    },
    info: 'Remove effect',
  };

  return <BoardArea title='Active effects'>
    <ActiveEffects
      className={selectedClass.name}
      cards={activeEffects}
      clickProps={[removeEffectClickProps]}
    />
  </BoardArea>;
}