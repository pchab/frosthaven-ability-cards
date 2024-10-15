'use client';

import { useFrosthavenStore } from '@/stores/cards.store';
import { isGeminate } from '@/domain/geminate/class';
import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { SelectedGeminateCards } from '../_components/class/geminate/SelectedGeminateCards';
import { SelectCards } from './SelectCards';
import Link from 'next/link';

export default function SelectCardsClassWrapper() {
  const selectedClass = useFrosthavenStore((state) => state.selectedClass);

  if (!selectedClass) {
    return <Link href={'/'}>Select a class</Link>;
  }

  return isGeminate(selectedClass)
    ? <SelectCards
      frosthavenClass={selectedClass}
      checkHandSize={(cards: GeminateCard[]) => (
        cards.filter((card) => card.form === GeminateForm.melee).length <= selectedClass.handSize
        && cards.filter((card) => card.form === GeminateForm.ranged).length <= selectedClass.handSize
      )}
      selectedCardComponent={SelectedGeminateCards}
    />
    : <SelectCards frosthavenClass={selectedClass} />;
}