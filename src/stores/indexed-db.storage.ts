import type { StateStorage } from 'zustand/middleware';

const STORE_NAME = 'fh-cards-store';

const db = new Promise<IDBDatabase>((resolve) => {
  const request = indexedDB.open(STORE_NAME, 1);
  request.onsuccess = () => {
    resolve(request.result);
  };
  request.onupgradeneeded = (event) => {
    const db = (event.target as any).result;
    db.createObjectStore(STORE_NAME);
    resolve(db);
  };
});

async function startTransaction() {
  return (await db).transaction(STORE_NAME, 'readwrite');
}

export const indexedDBStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    const transaction = await startTransaction();
    const request = transaction.objectStore(STORE_NAME).get(name);
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        resolve(request.result);
      };
    });
  },
  setItem: async (name: string, value: string): Promise<void> => {
    const transaction = await startTransaction();
    transaction.objectStore(STORE_NAME).put(value, name);
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        resolve();
      };
    });
  },
  removeItem: async (name: string): Promise<void> => {
    const transaction = await startTransaction();
    transaction.objectStore(STORE_NAME).delete(name);
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        resolve();
      };
    });
  },
};
