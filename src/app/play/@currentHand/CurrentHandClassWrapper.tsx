'use client';

import type { GeminateCard } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useClassHook } from '@/stores/class.store';
import { useShallow } from 'zustand/shallow';
import CurrentHand from './CurrentHand';

export default function CurrentHandClassWrapper() {
  const selectedClass = useClassHook();
  const currentForm = useFrosthavenStore(useShallow((state) => state.currentForm));

  if (!selectedClass) {
    return <CurrentHand />;
  }

  return <CurrentHand
    classFilter={
      (selectedClass && isGeminate(selectedClass))
        ? ({ form }: GeminateCard) => form === currentForm
        : undefined
    } />;
}