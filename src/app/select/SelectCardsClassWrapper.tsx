'use client';

import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import { useClassHook } from '@/stores/class.store';
import { SelectedGeminateCards } from '../_components/class/geminate/SelectedGeminateCards';
import { SelectCards } from './SelectCards';

export default function SelectCardsClassWrapper() {
  const selectedClass = useClassHook();

  if (!selectedClass) {
    return <></>;
  }

  return isGeminate(selectedClass)
    ? <SelectCards
      frosthavenClass={selectedClass}
      checkHandSize={(cards: GeminateCard[]) => (
        cards.filter((card) => card.form === GeminateForm.melee).length <= selectedClass.handSize / 2
        && cards.filter((card) => card.form === GeminateForm.ranged).length <= selectedClass.handSize / 2
      )}
      selectedCardComponent={SelectedGeminateCards}
    />
    : <SelectCards frosthavenClass={selectedClass} />;
}