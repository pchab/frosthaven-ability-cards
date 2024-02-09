'use client';

import { isGeminate } from '@/domain/frosthaven-class.type';
import { GeminateCard } from '@/domain/geminate/cards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { redirect } from 'next/navigation';
import PlayGeminateCards from '../_components/geminate/PlayGeminateCards';
import PlayCards from './PlayCards';

export default function PlayCardsPage() {
  const { cards, selectedClass } = useFrosthavenStore((state) => ({
    selectedClass: state.selectedClass,
    cards: state.cards,
  }));

  if (selectedClass === undefined) {
    redirect('/');
  }

  if (cards.length === 0) {
    redirect('/select');
  }

  return isGeminate(selectedClass)
    ? <PlayGeminateCards cards={cards as GeminateCard[]} />
    : <PlayCards cards={cards} />;
}
