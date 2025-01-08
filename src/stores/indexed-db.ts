import type { PersistedState } from './cards.store';
import updateAvailableCards from './migrations/update-available-cards';
import updateCardsStatus from './migrations/update-cards-status';

const STORE_NAME = 'fh-cards-store';

const db = (function () {
  let instance: IDBDatabase;
  return {
    get: async function () {
      if (instance) {
        return instance;
      }

      return new Promise<IDBDatabase>((resolve) => {
        const request = indexedDB.open(STORE_NAME, 11);

        request.onsuccess = () => {
          resolve(request.result);
        };
        request.onupgradeneeded = async (event) => {
          const { target } = event as unknown as { target: IDBOpenDBRequest };
          const db = target.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME);
          }
          const { transaction } = target;
          if (transaction) {
            // APPLY MIGRATIONS HERE
            await updateAvailableCards(transaction);
            await updateCardsStatus(transaction);
          }
          resolve(db);
        };
      }).then((db) => {
        instance = db;
        return db;
      });
    }
  };
})();

export async function startTransaction() {
  return (await db.get()).transaction(STORE_NAME, 'readwrite');
}

export function get(transaction: IDBTransaction) {
  return (key: string) => {
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);
    return new Promise<PersistedState | undefined>((resolve) => {
      request.onsuccess = () => {
        if (!request.result) {
          return resolve(undefined);
        }

        const { state } = JSON.parse(request.result) as { state: PersistedState };
        resolve(state);
      };
    });
  };
}

export function getAllKeys<X extends string>(transaction: IDBTransaction) {
  return () => {
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAllKeys();
    return new Promise<X[]>((resolve) => {
      request.onsuccess = () => {
        const result = request.result as X[];
        resolve(result);
      };
    });
  };
}

export function put(transaction: IDBTransaction) {
  return (key: string, value: string) => {
    const store = transaction.objectStore(STORE_NAME);
    store.put(value, key);
    return new Promise<void>((resolve) => {
      transaction.oncomplete = () => {
        resolve();
      };
    });
  };
}

export function del(transaction: IDBTransaction) {
  return (key: string) => {
    const store = transaction.objectStore(STORE_NAME);
    store.delete(key);
    return new Promise<void>((resolve) => {
      transaction.oncomplete = () => {
        resolve();
      };
    });
  };
}