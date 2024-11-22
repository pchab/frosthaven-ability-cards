'use client';

import { CardComponent } from '@/app/_components/cards/Card';
import CardWithSlots from '@/app/_components/cards/CardWithSlots';
import { Card, CardActions, CardStatus } from '@/domain/cards.type';
import { AnimatePresence } from 'framer-motion';
import { useCards } from '@/hooks/useCards';

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
    .filter(({ status }) => [CardStatus.activeTop, CardStatus.activeBottom].includes(status));

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
        .map((card) => cardHasSlots(card)
          ? <CardWithSlots key={card.name} card={card} actions={[removeEffectAction(card)]} />
          : <CardComponent key={card.name} card={card} actions={[removeEffectAction(card)]} />
        )}
    </AnimatePresence>
  </div>
}
