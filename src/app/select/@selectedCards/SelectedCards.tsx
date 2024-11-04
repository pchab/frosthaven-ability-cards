'use client';

import { type Card } from '@/domain/cards.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useClassHook } from '@/stores/class.store';
import { useState } from 'react';
import { useShallow } from 'zustand/shallow';
import EnhanceCardModal from '../(enhance)/EnhanceCard';
import CardPile from '../../_components/cards/CardPile';
import BoardArea from '../../_components/layout/BoardArea';
import { useSelectCards } from '../useSelectCards';

export function SelectedCards<X extends Card>() {
  const selectedClass = useClassHook();
  const cards = useFrosthavenStore(useShallow((state) => state.cards as X[]));
  const { removeCard, enhanceCard } = useSelectCards<X>();
  const [enhancingCard, setEnhancingCard] = useState<X | null>(null);

  const removeAction = (card: X) => ({
    name: 'Remove Card',
    onClick: () => removeCard(card),
  });
  const enhanceAction = (card: X) => ({
    name: 'Enhance Card',
    onClick: () => setEnhancingCard(card),
  });
  const actions = (card: X) => card.availableEnhancements
    ? [removeAction(card), enhanceAction(card)]
    : [removeAction(card)];

  return <>
    {enhancingCard && <EnhanceCardModal card={enhancingCard} onEnhanceCard={(card: X) => {
      setEnhancingCard(null);
      enhanceCard(card);
    }} />}
    <BoardArea title={`Selected Cards: ${cards.length}/${selectedClass?.handSize}`}>
      <CardPile
        cards={cards}
        actions={actions}
        maxCardLength={selectedClass?.handSize}
      />
    </BoardArea>
  </>;
}
