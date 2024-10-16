'use client';

import { isGeminate } from '@/domain/geminate/class';
import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { SelectedGeminateCards } from '../_components/class/geminate/SelectedGeminateCards';
import { SelectCards } from './SelectCards';
import { getClass } from '@/stores/class.store';
import { useRouter } from 'next/navigation';

export default function SelectCardsClassWrapper() {
  const selectedClass = getClass();
  const router = useRouter();

  if (!selectedClass) {
    router.push('/');
    return <></>;
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