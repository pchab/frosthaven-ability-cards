'use client';

import { FrosthavenClass, frosthavenClasses } from '@/domain/frosthaven-class.type';
import { SelectCards } from './select/SelectCards';
import { type Card } from '@/domain/cards.type';
import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { GeminateSelectedCards } from './_components/geminate/GeminateSelectedCards';

function isGeminate(frosthavenClass: FrosthavenClass<Card>): frosthavenClass is FrosthavenClass<GeminateCard> {
  return frosthavenClass.name === 'Geminate';
}

export default function Home() {
  const { geminate } = frosthavenClasses;

  if (isGeminate(geminate)) {
    return (<SelectCards
      frosthavenClass={geminate}
      checkHandSize={(cards) => (
        cards.filter((card) => card.form === GeminateForm.melee).length <= geminate.handSize
        && cards.filter((card) => card.form === GeminateForm.ranged).length <= geminate.handSize
      )}
      selectedCardComponent={GeminateSelectedCards}
    />);
  }
  return <SelectCards frosthavenClass={geminate} />;
}
