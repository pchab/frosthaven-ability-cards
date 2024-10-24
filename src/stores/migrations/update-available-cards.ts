import { initialState, partializeCard } from '../cards.store';
import { frosthavenClasses } from '@/domain/frosthaven-class';
import { get, put } from '../indexed-db';

export default async function updateAvailableCards(transaction: IDBTransaction) {
  const classNames = frosthavenClasses.map(({ name }) => name);

  await Promise.all(classNames.map(async (className) => {
    const state = await get(transaction)(className);

    const { availableCards, ...stateRest } = state ?? initialState;
    const storedClass = frosthavenClasses.find(({ name }) => name === className);
    if (availableCards.length > 0 || !storedClass) {
      return;
    }

    await put(transaction)(className, JSON.stringify({
      state: {
        availableCards: storedClass.cards.map(partializeCard),
        ...stateRest,
      }
    }));
  }));
}