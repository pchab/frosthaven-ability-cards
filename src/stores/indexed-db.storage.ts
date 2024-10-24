import type { StateStorage } from 'zustand/middleware';
import { getClass } from './class.store';
import type { Card } from '@/domain/cards.type';
import type { PersistedCard, PersistedState } from './cards.store';
import { FrosthavenClass } from '@/domain/frosthaven-class.type';

const STORE_NAME = 'fh-cards-store';

const db = (function () {
  let instance: IDBDatabase;
  return {
    get: async function () {
      if (instance) {
        return instance;
      }

      return new Promise<IDBDatabase>((resolve) => {
        const request = indexedDB.open(STORE_NAME, 1);

        request.onsuccess = () => {
          resolve(request.result);
        };
        request.onupgradeneeded = (event) => {
          const db = (event.target as any).result;
          db.createObjectStore(STORE_NAME);
          resolve(db);
        };
      }).then((db) => {
        instance = db;
        return db;
      });
    }
  };
})();

async function startTransaction() {
  return (await db.get()).transaction(STORE_NAME, 'readwrite');
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
    const selectedClass = await getClass();
    if (!selectedClass) {
      return null;
    }
    const transaction = await startTransaction();
    const request = transaction.objectStore(STORE_NAME).get(selectedClass.name);
    const departializeCard = departializeCardForClass(selectedClass);
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        if (!request.result) {
          return resolve(null);
        }
        const {
          state: { cards, availableCards, states, ...state },
        } = JSON.parse(request.result) as { state: PersistedState };
        resolve(JSON.stringify({
          state: {
            ...state,
            cards: cards.map(departializeCard),
            availableCards: (availableCards.length === 0 ? selectedClass.cards : availableCards)
              .map(departializeCard),
            states: states.map((state) => state.map(departializeCard)),
          }
        }));
      }
    });
  },
  setItem: async (name: string, value: string): Promise<void> => {
    const selectedClass = await getClass();
    if (!selectedClass) {
      return;
    }
    const transaction = await startTransaction();
    transaction.objectStore(STORE_NAME).put(value, selectedClass.name);
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        resolve();
      };
    });
  },
  removeItem: async (name: string): Promise<void> => {
    const selectedClass = await getClass();
    if (!selectedClass) {
      return;
    }
    const transaction = await startTransaction();
    transaction.objectStore(STORE_NAME).delete(selectedClass.name);
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        resolve();
      };
    });
  },
};
