'use client';

import { useCards } from '@/app/[selectedClass]/play/useCards';
import { CardComponent } from '@/app/_components/cards/Card';
import CardPile from '@/app/_components/cards/CardPile';
import CardWithSlots, { type CardWithRequiredSlots } from '@/app/_components/cards/CardWithSlots';
import CardWithMode, { type HiveCardWithRequiredMode } from '@/app/_components/class/hive/CardWithMode';
import { useHiveMode } from '@/app/_components/class/hive/useHiveMode';
import BoardArea from '@/app/_components/layout/BoardArea';
import Modal from '@/app/_components/layout/Modal';
import { ClassContext } from '@/context/ClassContext';
import { Card } from '@/domain/cards.type';
import type { HiveCard } from '@/domain/hive/cards';
import { isHive } from '@/domain/hive/class';
import { AnimatePresence } from 'motion/react';
import { use, useEffect, useState } from 'react';

function cardHasSlots(card: Card): card is CardWithRequiredSlots {
  return !!card.slots;
}

function cardHasMode(card: HiveCard): card is HiveCardWithRequiredMode {
  return !!card.mode;
}

export default function ActiveEffects<X extends Card>() {
  const {
    currentCards,
    discardCard,
    loseCard,
  } = useCards<X>();
  const {
    activateHiveMode,
  } = useHiveMode();
  const currentClass = use(ClassContext);
  const [isSelectingMode, setIsSelectingMode] = useState(false);

  const activeEffects = currentCards
    .filter(({ status }) => ['activeTop', 'activeBottom'].includes(status));

  const removeEffectAction = (card: X) => {
    const action = card.status === 'activeTop' ? card.actions.top : card.actions.bottom;
    return action === 'activeDiscard' ? discardCard(card) : loseCard(card);
  };

  const getCardComponent = (card: X) => {
    if (isHive(currentClass) && cardHasMode(card)) {
      return <CardWithMode key={card.name} card={card} onCloseCard={() => removeEffectAction(card)} />;
    }
    if (cardHasSlots(card)) {
      return <CardWithSlots key={card.name} card={card} onCloseCard={() => removeEffectAction(card)} />;
    }
    return <CardComponent key={card.name} card={card} onCloseCard={() => removeEffectAction(card)} />;
  };

  useEffect(() => {
    if (!isHive(currentClass) || isSelectingMode || !currentCards.length) return;
    const hasSelectedMode = (currentCards as HiveCard[]).some((card) => card.isSelectedMode);
    if (hasSelectedMode) return;
    setIsSelectingMode(true);
  }, [currentClass, currentCards, isSelectingMode]);

  const activateHiveModeAction = (card: HiveCard) => [{
    name: 'Activate Hive Mode',
    onClick: () => {
      activateHiveMode(card);
      setIsSelectingMode(false);
    },
  }];

  const cardsWithMode = currentCards.filter(cardHasMode);

  return <div className='grid grid-cols-3 gap-4 min-w-[461px] min-h-card'>
    {isSelectingMode && <Modal onCancel={() => setIsSelectingMode(false)}>
      <BoardArea title="Select mode">
        <CardPile
          cards={cardsWithMode}
          actions={activateHiveModeAction}
          maxCardLength={cardsWithMode.length}
          onCloseCard={removeEffectAction}
        />
      </BoardArea>
    </Modal>}
    <AnimatePresence mode='popLayout'>
      {activeEffects
        .map((card) => getCardComponent(card))}
    </AnimatePresence>
  </div>
}
