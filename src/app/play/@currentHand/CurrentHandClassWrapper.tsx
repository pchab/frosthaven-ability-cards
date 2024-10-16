'use client';

import { useFrosthavenStore } from '@/stores/cards.store';
import { isGeminate } from '@/domain/geminate/class';
import CurrentHand from './CurrentHand';
import type { GeminateCard } from '@/domain/geminate/cards';
import { useShallow } from 'zustand/shallow';
import { getClass } from '@/stores/class.store';
import { useRouter } from 'next/navigation';

export default function CurrentHandClassWrapper() {
  const selectedClass = getClass();
  const {
    currentForm,
  } = useFrosthavenStore(useShallow((state) => ({
    currentForm: state.currentForm,
  })));
  const router = useRouter();

  if (!selectedClass) {
    router.push('/');
    return <></>;
  }

  return <CurrentHand
    classFilter={
      (selectedClass && isGeminate(selectedClass))
        ? (card: GeminateCard) => card.form === currentForm
        : undefined
    } />;
}