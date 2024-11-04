import type { Card } from '@/domain/cards.type';
import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { geminate, isGeminateCards } from '@/domain/geminate/class';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useClassHook } from '@/stores/class.store';
import { useRouter } from 'next/navigation';
import { useShallow } from 'zustand/shallow';

type CheckHandSize<X extends Card> = (cards: X[]) => boolean;
const geminateCheckHandsize: CheckHandSize<GeminateCard> = (cards: GeminateCard[]) => (
  cards.filter((card) => card.form === GeminateForm.melee).length <= geminate.handSize / 2
  && cards.filter((card) => card.form === GeminateForm.ranged).length <= geminate.handSize / 2
);

export function useSelectCards<X extends Card>() {
  const selectedClass = useClassHook<X>();
  const {
    cards,
    selectCards,
    validateCardSelection,
    enhanceCard,
  } = useFrosthavenStore(useShallow((state) => ({
    cards: state.cards as X[],
    setLevel: state.setLevel,
    selectCards: state.selectCards,
    validateCardSelection: state.validateCardSelection,
    enhanceCard: state.enhanceCard,
  })));
  const router = useRouter();

  const selectCard = (card: X) => {
    if (!selectedClass || cards.includes(card)) return;
    const newSelectedCards = [...cards, card] as X[];

    if (!isGeminateCards(selectedClass, newSelectedCards) && newSelectedCards.length <= selectedClass.handSize) {
      return selectCards(newSelectedCards);
    }

    if (isGeminateCards(selectedClass, newSelectedCards) && geminateCheckHandsize(newSelectedCards)) {
      return selectCards(newSelectedCards);
    }
  };

  const removeCard = (card: X) => selectCards(cards.filter(({ name }) => name !== card.name));

  const validateSelection = () => {
    if (selectedClass && cards.length === selectedClass.handSize) {
      validateCardSelection();
      router.push('/play');
    }
  };

  return {
    selectCard,
    removeCard,
    validateSelection,
    enhanceCard,
  };
}
