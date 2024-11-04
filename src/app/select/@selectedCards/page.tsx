'use client';

import { SelectedGeminateCards } from '@/app/_components/class/geminate/SelectedGeminateCards';
import BoardArea from '@/app/_components/layout/BoardArea';
import { isGeminate } from '@/domain/geminate/class';
import { useClassHook } from '@/stores/class.store';
import { SelectedCards } from './SelectedCards';

export default function SelectedCardsPage() {
  const selectedClass = useClassHook();

  if (!selectedClass) {
    return <BoardArea title={'Selected Cards: 0/10'} />;
  }

  return isGeminate(selectedClass)
    ? <SelectedGeminateCards />
    : <SelectedCards />;
}
