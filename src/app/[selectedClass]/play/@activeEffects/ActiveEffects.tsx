'use client';

import { CardComponent } from '@/app/_components/cards/Card';
import CardWithSlots from '@/app/_components/cards/CardWithSlots';
import { Card, CardActions, CardStatus } from '@/domain/cards.type';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';

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

  // 620px is the width of a 4 cards
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
