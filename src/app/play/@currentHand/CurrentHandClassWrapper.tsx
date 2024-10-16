'use client';

import { useFrosthavenStore } from '@/stores/cards.store';
import { isGeminate } from '@/domain/geminate/class';
import CurrentHand from './CurrentHand';
import type { GeminateCard } from '@/domain/geminate/cards';
import { useShallow } from 'zustand/shallow';
import { useClassHook } from '@/stores/class.store';
import { useRouter } from 'next/navigation';

export default function CurrentHandClassWrapper() {
  const selectedClass = useClassHook();
  const currentForm = useFrosthavenStore(useShallow((state) => state.currentForm));
  const router = useRouter();

  if (!selectedClass) {
    return <></>;
  }

  return <CurrentHand
    classFilter={
      (selectedClass && isGeminate(selectedClass))
        ? (card: GeminateCard) => card.form === currentForm
        : undefined
    } />;
}