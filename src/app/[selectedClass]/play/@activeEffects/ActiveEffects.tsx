'use client';

import { CardComponent } from '@/app/_components/cards/Card';
import CardWithSlots from '@/app/_components/cards/CardWithSlots';
import { Card } from '@/domain/cards.type';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import { AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';

function cardHasSlots(card: Card): card is Required<Pick<Card, 'slots'>> & Card {
  return !!card.slots;
}

export default function ActiveEffects<X extends Card>() {
  const {
    currentCards,
    discardCard,
    loseCard,
  } = useCards<X>();

  const activeEffects = currentCards
    .filter(({ status }) => ['activeTop', 'activeBottom'].includes(status));

  const removeEffectAction = useCallback((card: X) => ({
    name: 'Remove effect',
    onClick: () => {
      const action = card.status === 'activeTop' ? card.actions.top : card.actions.bottom;
      action === 'activeDiscard' ? discardCard(card) : loseCard(card)
    },
  }), [discardCard, loseCard]);

  return <div className='grid grid-cols-3 gap-4 min-w-[461px] min-h-card'>
    <AnimatePresence mode='popLayout'>
      {activeEffects
        .map((card) => cardHasSlots(card)
          ? <CardWithSlots key={card.name} card={card} actions={[removeEffectAction(card)]} />
          : <CardComponent key={card.name} card={card} actions={[removeEffectAction(card)]} />
        )}
    </AnimatePresence>
  </div>
}
