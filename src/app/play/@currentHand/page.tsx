'use client';

import { useFrosthavenStore } from '@/stores/cards.store';
import { isGeminate } from '@/domain/geminate/class';
import CurrentHand from './CurrentHand';
import GeminateCurrentHand from '@/app/_components/geminate/GeminateCurrentHand';
import BoardArea from '@/app/_components/BoardArea';

export default function CurrentHandPage() {
  const { selectedClass } = useFrosthavenStore((state) => ({
    selectedClass: state.selectedClass,
  }));

  return <BoardArea title='Current hand'>
    {!selectedClass
      ? <></>
      : isGeminate(selectedClass)
        ? <GeminateCurrentHand />
        : <CurrentHand />}
  </BoardArea>;
}