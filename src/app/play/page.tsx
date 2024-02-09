'use client';

import { isGeminate } from '@/domain/frosthaven-class.type';
import { GeminateCard } from '@/domain/geminate/cards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useRouter } from 'next/navigation';
import PlayGeminateCards from '../_components/geminate/PlayGeminateCards';
import PlayCards from './PlayCards';

export default function PlayCardsPage() {
  const { cards, selectedClass } = useFrosthavenStore((state) => ({
    selectedClass: state.selectedClass,
    cards: state.cards,
  }));
  const router = useRouter();

  if (selectedClass === undefined) {
    router.push('/');
    return <></>;
  }

  if (cards.length === 0) {
    router.push('/select');
    return <></>;
  }

  return isGeminate(selectedClass)
    ? <PlayGeminateCards cards={cards as GeminateCard[]} />
    : <PlayCards cards={cards} />;
}
