'use client';

import { isGeminate } from '@/domain/frosthaven-class.type';
import { SelectCards } from './SelectCards';
import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { SelectedGeminateCards } from '../_components/geminate/SelectedGeminateCards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { redirect } from 'next/navigation';

export default function SelectCardPage() {
  const selectedClass = useFrosthavenStore((state) => state.selectedClass);

  if (selectedClass === undefined) {
    redirect('/');
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
