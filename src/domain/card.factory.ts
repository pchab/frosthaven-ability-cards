import { Card } from './cards.type';

export function createCard<X extends Card>(card: Omit<X, 'isLost' | 'isDiscarded'>): X {
  const newCard = {
    ...card,
    isDiscarded: false,
    isLost: false,
  } as X;
  return newCard;
}
