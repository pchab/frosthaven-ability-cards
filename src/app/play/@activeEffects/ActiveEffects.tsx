'use client';

import { Card, CardActions, CardStatus } from '@/domain/cards.type';
import { CardComponent } from '../../_components/cards/Card';
import CardWithSlot from '../../_components/cards/CardWithSlot';
import { useCards } from '@/app/play/useCards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { isDrifter } from '@/domain/drifter/class';

export default function ActiveEffects<X extends Card>() {
  const selectedClass = useFrosthavenStore((state) => state.selectedClass);
  const {
    currentCards,
    discardCard,
    loseCard,
    moveTokenForward,
    moveTokenBackward,
  } = useCards<X>();

  const activeEffects = currentCards
    .filter(card => [CardStatus.activeTop, CardStatus.activeBottom].includes(card.status));

  const removeEffectAction = (card: X) => ({
    name: 'Remove effect',
    onClick: () => {
      const action = card.status === CardStatus.activeTop ? card.actions.top : card.actions.bottom;
      action === CardActions.activeDiscard ? discardCard(card) : loseCard(card)
    },
  });

  const moveTokenForwardAction = (card: X) => ({
    name: 'Move token forward',
    onClick: () => {
      moveTokenForward(card);
    },
  });

  const moveTokenBackwardAction = (card: X) => ({
    name: 'Move token backward',
    onClick: () => {
      moveTokenBackward(card);
    },
  });

  return <div
    className='flex flex-wrap gap-4 min-w-cards-2 min-h-card'
  >
    {activeEffects
      .map((card) => {
        const cardElement = !!card.slots
          ? <CardWithSlot key={card.name} card={card} actions={(
            selectedClass
            && isDrifter(selectedClass)
            && card.tokenPosition
            && card.tokenPosition > 0
          )
            ? [removeEffectAction(card), moveTokenBackwardAction(card), moveTokenForwardAction(card)]
            : [removeEffectAction(card), moveTokenForwardAction(card)]
          } />
          : <CardComponent key={card.name} card={card} actions={[removeEffectAction(card)]} />;
        return cardElement;
      })
    }
  </div>
}
