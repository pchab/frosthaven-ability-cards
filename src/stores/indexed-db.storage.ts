import type { StateStorage } from 'zustand/middleware';
import type { Card } from '@/domain/cards.type';
import type { PersistedCard } from './cards.store';
import { FrosthavenClass } from '@/domain/frosthaven-class.type';
import { del, get, put, startTransaction } from './indexed-db';
import { classURIToName, frosthavenClasses } from '@/domain/frosthaven-class';

function getClass<X extends Card>() {
  const selectedClassName = classURIToName(document.location.pathname.split('/')[1] as FrosthavenClass<X>['name']);
  return frosthavenClasses.find(({ name }) => name === selectedClassName) as FrosthavenClass<X>;
}

function departializeCardForClass<X extends Card>(fhClass: FrosthavenClass<X>) {
  return ({
    name,
    status,
    tokenPosition,
    enhancements,
  }: PersistedCard): X => {
    const card = fhClass.cards.find((card) => card.name === name)!;
    return {
      ...card,
      status,
      tokenPosition,
      enhancements,
    };
  };
}

export const indexedDBStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    const selectedClass = getClass();
    if (!selectedClass) {
      return null;
    }
    const transaction = await startTransaction();
    const result = await get(transaction)(selectedClass.name);
    if (!result) {
      return null;
    }
    const departializeCard = departializeCardForClass(selectedClass);
    const {
      cards, availableCards, states, ...state
    } = result;
    return JSON.stringify({
      state: {
        ...state,
        cards: cards.map(departializeCard),
        availableCards: (availableCards.length === 0 ? selectedClass.cards : availableCards)
          .map(departializeCard),
        states: states.map((state) => state.map(departializeCard)),
      }
    });
  },
  setItem: async (name: string, value: string): Promise<void> => {
    const selectedClass = getClass();
    if (!selectedClass) {
      return;
    }
    const transaction = await startTransaction();
    await put(transaction)(selectedClass.name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    const selectedClass = getClass();
    if (!selectedClass) {
      return;
    }
    const transaction = await startTransaction();
    await del(transaction)(selectedClass.name);
  },
};
