import { type Card } from '@/domain/cards.type';
import { useState } from 'react';

export function useCards<X extends Card>(cards: X[]) {
  const [currentHand, setCurrentHand] = useState<X[]>(cards);

  const discardCard = (card: X) => {
    const newCurrentHand = currentHand.filter(c => c !== card);
    setCurrentHand([...newCurrentHand, { ...card, isDiscarded: true }]);
  }

  const loseCard = (card: X) => {
    const newCurrentHand = currentHand.filter(c => c !== card);
    setCurrentHand([...newCurrentHand, { ...card, isLost: true }]);
  }

  const recoverLostCard = (card: X) => {
    const newCurrentHand = currentHand.filter(c => c !== card);
    setCurrentHand([...newCurrentHand, { ...card, isLost: false }]);
  }

  const recoverDiscardedCard = (card: X) => {
    const newCurrentHand = currentHand.filter(c => c !== card);
    setCurrentHand([...newCurrentHand, { ...card, isDiscarded: false }]);
  }

  return {
    currentHand,
    discardCard,
    loseCard,
    recoverLostCard,
    recoverDiscardedCard,
  };
}