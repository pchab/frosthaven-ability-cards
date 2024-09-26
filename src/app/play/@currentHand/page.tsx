'use client';

import { useFrosthavenStore } from '@/stores/cards.store';
import { isGeminate } from '@/domain/geminate/class';
import CurrentHand from './CurrentHand';
import GeminateCurrentHand from '@/app/_components/geminate/GeminateCurrentHand';
import { redirect } from 'next/navigation';
import BoardArea from '@/app/_components/BoardArea';

export default function CurrentHandPage() {
  const { selectedClass } = useFrosthavenStore((state) => ({
    selectedClass: state.selectedClass,
  }));

  if (!selectedClass) {
    return redirect('/');
  }

  return <BoardArea title='Current hand'>
    {isGeminate(selectedClass) ? <GeminateCurrentHand /> : <CurrentHand />}
  </BoardArea>;
}