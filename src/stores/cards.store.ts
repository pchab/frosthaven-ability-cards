import { type Card } from '@/domain/cards.type';
import { type FrosthavenClass } from '@/domain/frosthaven-class.type';
import { GeminateForm } from '@/domain/geminate/cards';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { indexedDBStorage } from './indexed-db.storage';

type AbilityCardsState = {
  level: number;
  selectedClass: FrosthavenClass<Card> | undefined;
  cards: Card[];
  states: Card[][];
  currentStateIndex: number;
  currentForm: GeminateForm;
}

type AbilityCardsActions = {
  setLevel: (level: number) => void;
  selectClass: (playerClass: FrosthavenClass<Card>) => void;
  selectCards: (cards: Card[]) => void;
  setStateIndex: (index: number) => void;
  updateStates: <X extends Card>(states: X[][]) => void;
  setForm: (form: GeminateForm) => void;
}

const initialState: AbilityCardsState = {
  level: 1,
  selectedClass: undefined,
  cards: [],
  states: [[]],
  currentStateIndex: 0,
  currentForm: GeminateForm.melee,
}

export const useFrosthavenStore = create<AbilityCardsState & AbilityCardsActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setLevel: (level: number) => set({ level }),
      selectClass: (playerClass: FrosthavenClass<Card>) => {
        if (playerClass.name !== get().selectedClass?.name) {
          set({ level: 1, selectedClass: playerClass, cards: [], states: [], currentStateIndex: 0 });
        }
      },
      selectCards: (cards: Card[]) => set({ cards, states: [cards], currentStateIndex: 0 }),
      updateStates: <X extends Card>(states: X[][]) => set({ states, currentStateIndex: states.length - 1 }),
      setStateIndex: (index: number) => set({ currentStateIndex: index }),
      setForm: (currentForm: GeminateForm) => set({ currentForm }),
    }),
    {
      name: 'test-storage',
      storage: createJSONStorage(() => indexedDBStorage),
    }
  )
);
