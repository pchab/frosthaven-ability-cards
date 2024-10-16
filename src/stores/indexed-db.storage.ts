import type { StateStorage } from 'zustand/middleware';
import { getClass } from './class.store';

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

const get = async (name: string): Promise<string | null> => {
  const transaction = await startTransaction();
  const request = transaction.objectStore(STORE_NAME).get(name);
  return new Promise((resolve) => {
    transaction.oncomplete = () => {
      resolve(request.result);
    };
  });
};

export const indexedDBStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    const selectedClass = await getClass();
    if (!selectedClass) {
      return null;
    }
    return get(selectedClass.name);
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
