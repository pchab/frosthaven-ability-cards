'use client';

import type { PileActions } from '@/app/_components/cards/CardPile';
import BoardArea from '@/app/_components/layout/BoardArea';
import Modal from '@/app/_components/layout/Modal';
import { ClassContext } from '@/context/ClassContext';
import type { Card } from '@/domain/cards.type';
import type { GeminateCard } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import { use, useState } from 'react';
import EnhanceCard from '../(enhance)/EnhanceCard';
import { useSelectCards } from '@/hooks/useSelectCards';
import { SelectedCards } from './SelectedCards';
import { SelectedGeminateCards } from './SelectedCards.geminate';

export default function SelectedCardsPage<X extends Card>() {
  const selectedClass = use(ClassContext);
  const { cards, enhanceCard } = useSelectCards<X>();
  const [enhancingCard, setEnhancingCard] = useState<X | null>(null);

  const enhanceAction = (card: X) => card.availableEnhancements
    ? [{ name: 'Enhance Card', onClick: () => setEnhancingCard(card) }]
    : [];

  return <BoardArea title={`Selected Cards: ${cards.length}/${selectedClass.handSize}`}>
    {enhancingCard && <Modal onCancel={() => setEnhancingCard(null)}>
      <EnhanceCard card={enhancingCard} onEnhanceCard={(card: X) => {
        setEnhancingCard(null);
        enhanceCard(card);
      }} />
    </Modal>}

    {isGeminate(selectedClass)
      ? <SelectedGeminateCards actions={enhanceAction as unknown as PileActions<GeminateCard>} />
      : <SelectedCards actions={enhanceAction} />}
  </BoardArea>;
}