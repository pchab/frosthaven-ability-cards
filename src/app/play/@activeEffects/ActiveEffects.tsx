'use client';

import { useCards } from '@/app/play/useCards';
import { Card, CardActions, CardStatus } from '@/domain/cards.type';
import { AnimatePresence } from 'framer-motion';
import { CardComponent } from '../../_components/cards/Card';
import CardWithSlot from '../../_components/cards/CardWithSlot';

export default function ActiveEffects<X extends Card>() {
  const {
    currentCards,
    discardCard,
    loseCard,
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

  return <div className='flex flex-wrap gap-4 min-w-cards-2 min-h-card'>
    <AnimatePresence>
      {activeEffects
        .map((card) => !!card.slots
          ? <CardWithSlot key={card.name} card={card} actions={[removeEffectAction(card)]} />
          : <CardComponent key={card.name} card={card} actions={[removeEffectAction(card)]} />
        )}
    </AnimatePresence>
  </div>
}
