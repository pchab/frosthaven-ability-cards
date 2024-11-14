'use client';

import type { PileActions } from '@/app/_components/cards/CardPile';
import { SelectedGeminateCards } from '@/app/_components/class/geminate/SelectedGeminateCards';
import BoardArea from '@/app/_components/layout/BoardArea';
import Modal from '@/app/_components/layout/Modal';
import type { Card } from '@/domain/cards.type';
import type { GeminateCard } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import { useClassHook } from '@/stores/class.store';
import { useState } from 'react';
import EnhanceCard from '../(enhance)/EnhanceCard';
import { useSelectCards } from '../useSelectCards';
import { SelectedCards } from './SelectedCards';

export default function SelectedCardsPage<X extends Card>() {
  const selectedClass = useClassHook();
  const { enhanceCard } = useSelectCards<X>();
  const [enhancingCard, setEnhancingCard] = useState<X | null>(null);

  const enhanceAction = (card: X) => card.availableEnhancements
    ? [{ name: 'Enhance Card', onClick: () => setEnhancingCard(card) }]
    : [];

  if (!selectedClass) {
    return <BoardArea title={'Selected Cards: 0/10'} />;
  }

  return <>
    {enhancingCard && <Modal onCancel={() => setEnhancingCard(null)}>
      <EnhanceCard card={enhancingCard} onEnhanceCard={(card: X) => {
        setEnhancingCard(null);
        enhanceCard(card);
      }} />
    </Modal>}

    {isGeminate(selectedClass)
      ? <SelectedGeminateCards actions={enhanceAction as unknown as PileActions<GeminateCard>} />
      : <SelectedCards actions={enhanceAction} />}
  </>;
}
