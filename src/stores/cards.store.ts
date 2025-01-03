import { type Card } from '@/domain/cards.type';
import { createJSONStorage, persist } from 'zustand/middleware';
import { indexedDBStorage } from './indexed-db.storage';
import { create } from 'zustand';
import type { Action } from '@/app/[selectedClass]/play/useCards';
import type { HiveCard } from '@/domain/hive/cards';

export type SelectedActions = [
  Action | undefined,
  Action | undefined,
];

interface AbilityCardsState {
  level: number;
  cards: Card[];
  availableCards: Card[];
  states: Card[][];
  currentStateIndex: number;
  selectedActions: SelectedActions;
}

interface AbilityCardsActions {
  setLevel: (level: number) => void;
  validateCardSelection: () => void;
  enhanceCard: (card: Card) => void;
  selectCards: (cards: Card[]) => void;
  setSelectedActions: (actions: SelectedActions) => void;
  setStateIndex: (index: number) => void;
  updateStates: <X extends Card>(states: X[][]) => void;
  reset: () => void;
}

export type PersistedCard =
  | Pick<Card,
    | 'name'
    | 'status'
    | 'tokenPosition'
    | 'enhancements'>
  & Pick<HiveCard, 'isSelectedMode'>;
export interface PersistedState {
  level: number;
  cards: PersistedCard[];
  availableCards: PersistedCard[];
  states: PersistedCard[][];
  currentStateIndex: number;
};
export function partializeCard<X extends HiveCard>({
  name,
  status,
  tokenPosition,
  enhancements,
  isSelectedMode
}: X): PersistedCard {
  return {
    name,
    status,
    tokenPosition,
    enhancements,
    isSelectedMode,
  };
}

export const initialState: AbilityCardsState = {
  level: 1,
  cards: [],
  availableCards: [],
  states: [[]],
  currentStateIndex: 0,
  selectedActions: [undefined, undefined],
}

export const useFrosthavenStore = create<AbilityCardsState & AbilityCardsActions>()(
  persist(
    (set) => ({
      ...initialState,
      setLevel: (level: number) => set({ level }),
      validateCardSelection: () => set(({ cards }) => ({ states: [cards], currentStateIndex: 0 })),
      enhanceCard: (card: Card) => set(({ cards, availableCards }) => ({
        cards: cards.with(cards.findIndex(({ name }) => name === card.name), card),
        availableCards: availableCards.with(availableCards.findIndex(({ name }) => name === card.name), card),
      })),
      selectCards: (cards: Card[]) => set({ cards, states: [cards], currentStateIndex: 0 }),
      setSelectedActions: (selectedActions) => set({ selectedActions }),
      updateStates: <X extends Card>(states: X[][]) => set({ states, currentStateIndex: states.length - 1 }),
      setStateIndex: (index: number) => set({ currentStateIndex: index }),
      reset: async () => {
        const stateString = await indexedDBStorage.getItem('');
        if (!stateString) {
          return set(initialState);
        }
        const { state } = JSON.parse(stateString) as { state: AbilityCardsState };
        set(state);
      },
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
      }),
    }
  ),
);
