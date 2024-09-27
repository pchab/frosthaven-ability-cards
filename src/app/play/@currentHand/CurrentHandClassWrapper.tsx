'use client';

import { useFrosthavenStore } from '@/stores/cards.store';
import { isGeminate } from '@/domain/geminate/class';
import CurrentHand from './CurrentHand';
import type { GeminateCard } from '@/domain/geminate/cards';

export default function CurrentHandClassWrapper() {
  const {
    selectedClass,
    currentForm,
  } = useFrosthavenStore((state) => ({
    selectedClass: state.selectedClass,
    currentForm: state.currentForm,
  }));

  return <CurrentHand
    classFilter={
      (selectedClass && isGeminate(selectedClass))
        ? (card: GeminateCard) => card.form === currentForm
        : undefined
    } />;
}