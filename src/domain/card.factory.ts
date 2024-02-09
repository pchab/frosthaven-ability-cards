import { Card, CardStatus } from './cards.type';

export function createCard<X extends Card>(card: Omit<X, 'status'>): X {
  const newCard = {
    ...card,
    status: CardStatus.inHand,
  } as X;
  return newCard;
}
