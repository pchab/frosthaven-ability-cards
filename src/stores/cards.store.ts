import { type Card } from '@/domain/cards.type';
import { type FrosthavenClass } from '@/domain/frosthaven-class.type';
import { GeminateForm } from '@/domain/geminate/cards';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AbilityCardsState {
  selectedClass: FrosthavenClass<Card> | undefined;
  cards: Card[];
  states: Card[][];
  selectClass: (playerClass: FrosthavenClass<Card>) => void;
  selectCards: (cards: Card[]) => void;
  setStates: <X extends Card>(states: X[][]) => void;
  currentForm: GeminateForm;
  setForm: (form: GeminateForm) => void;
}

export const useFrosthavenStore = create<AbilityCardsState>()(
  persist(
    (set, get) => ({
      selectedClass: undefined,
      cards: [],
      states: [],
      currentForm: GeminateForm.melee,
      selectClass: (playerClass: FrosthavenClass<Card>) => {
        if (playerClass.name !== get().selectedClass?.name) {
          set({ selectedClass: playerClass, cards: [] });
        }
      },
      selectCards: (cards: Card[]) => set({ cards, states: [cards] }),
      setStates: <X extends Card>(states: X[][]) => set({ states }),
      setForm: (currentForm: GeminateForm) => set({ currentForm }),
    }),
    {
      name: 'frosthaven-ability-cards-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
