import { initialState, type PersistedCard } from '../cards.store';
import { frosthavenClasses } from '@/domain/frosthaven-class';
import { get, put } from '../indexed-db';
import type { CardStatus } from '@/domain/cards.type';

const statusInEnumOrder: CardStatus[] = ['lost', 'discarded', 'inHand', 'selected', 'activeTop', 'activeBottom']

function convertNumericStatusToStringStatus(status: string): CardStatus {
  const statusIndex = parseInt(status, 10);
  if (isNaN(statusIndex)) {
    return status as CardStatus;
  }
  return statusInEnumOrder[statusIndex];
}

function updateCardStatus({ status, ...card }: PersistedCard): PersistedCard {
  return {
    status: convertNumericStatusToStringStatus(status),
    ...card,
  };
}

export default async function updateCardsStatus(transaction: IDBTransaction) {
  const classNames = frosthavenClasses.map(({ name }) => name);

  await Promise.all(classNames.map(async (className) => {
    const state = await get(transaction)(className);

    const { availableCards, cards, states, ...stateRest } = state ?? initialState;

    await put(transaction)(className, JSON.stringify({
      state: {
        availableCards: availableCards.map(updateCardStatus),
        cards: cards.map(updateCardStatus),
        states: states.map((state) => state.map(updateCardStatus)),
        ...stateRest,
      }
    }));
  }));
}