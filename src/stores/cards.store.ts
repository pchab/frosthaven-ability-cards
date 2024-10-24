import { type Card } from '@/domain/cards.type';
import { GeminateForm } from '@/domain/geminate/cards';
import { createJSONStorage, persist } from 'zustand/middleware';
import { indexedDBStorage } from './indexed-db.storage';
import { create } from 'zustand';

type AbilityCardsState = {
  level: number;
  cards: Card[];
  availableCards: Card[];
  states: Card[][];
  currentStateIndex: number;
  currentForm: GeminateForm;
}

type AbilityCardsActions = {
  setLevel: (level: number) => void;
  selectCards: (cards: Card[]) => void;
  enhanceCard: (card: Card) => void;
  validateCardSelection: () => void;
  setStateIndex: (index: number) => void;
  updateStates: <X extends Card>(states: X[][]) => void;
  setForm: (form: GeminateForm) => void;
}

export type PersistedCard = Pick<Card, 'name' | 'status' | 'tokenPosition' | 'enhancements'>;
export type PersistedState = {
  level: number;
  cards: PersistedCard[];
  availableCards: PersistedCard[];
  states: PersistedCard[][];
  currentStateIndex: number;
  currentForm: GeminateForm;
};
export function partializeCard<X extends Card>({
  name,
  status,
  tokenPosition,
  enhancements,
}: X): PersistedCard {
  return {
    name,
    status,
    tokenPosition,
    enhancements,
  };
}

export const initialState: AbilityCardsState = {
  level: 1,
  cards: [],
  availableCards: [],
  states: [[]],
  currentStateIndex: 0,
  currentForm: GeminateForm.melee,
}

export const useFrosthavenStore = create<AbilityCardsState & AbilityCardsActions>()(
  persist(
    (set) => ({
      ...initialState,
      setLevel: (level: number) => set({ level }),
      selectCards: (cards: Card[]) => set({ cards, states: [cards], currentStateIndex: 0 }),
      validateCardSelection: () => set(({ cards }) => ({ states: [cards], currentStateIndex: 0 })),
      enhanceCard: (card: Card) => set(({ cards, availableCards }) => ({
        cards: cards.with(cards.findIndex(({ name }) => name === card.name), card),
        availableCards: availableCards.with(availableCards.findIndex(({ name }) => name === card.name), card),
      })),
      updateStates: <X extends Card>(states: X[][]) => set({ states, currentStateIndex: states.length - 1 }),
      setStateIndex: (index: number) => set({ currentStateIndex: index }),
      setForm: (currentForm: GeminateForm) => set({ currentForm }),
    }),
    {
      name: 'fh-ability-cards',
      storage: createJSONStorage(() => indexedDBStorage),
      partialize: (state) => ({
        level: state.level,
        cards: state.cards.map(partializeCard),
        availableCards: state.availableCards.map(partializeCard),
        states: state.states.map((state) => state.map(partializeCard)),
        currentStateIndex: state.currentStateIndex,
        currentForm: state.currentForm,
      }),
    }
  ),
);
