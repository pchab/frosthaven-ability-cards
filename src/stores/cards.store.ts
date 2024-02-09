import { type Card } from '@/domain/cards.type';
import { type FrosthavenClass } from '@/domain/frosthaven-class.type';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AbilityCardsState {
  selectedClass: FrosthavenClass<Card> | undefined;
  cards: Card[];
  selectClass: (playerClass: FrosthavenClass<Card>) => void;
  selectCards: (cards: Card[]) => void;
}

export const useFrosthavenStore = create<AbilityCardsState>()(
  persist(
    (set) => ({
      selectedClass: undefined,
      cards: [],
      selectClass: (playerClass: FrosthavenClass<Card>) => set({ selectedClass: playerClass }),
      selectCards: (cards: Card[]) => set({ cards }),
    }),
    {
      name: 'frosthaven-ability-cards-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
