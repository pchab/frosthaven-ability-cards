import { type Card } from '@/domain/cards.type';
import { GeminateForm } from '@/domain/geminate/cards';
import { useState } from 'react';

export function useCards<X extends Card>(cards: X[]) {
  const [currentHand, setCurrentHand] = useState<X[]>(cards);
  const [currentForm, setCurrentForm] = useState<GeminateForm>(GeminateForm.melee);

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
    currentForm,
    setCurrentForm,
    discardCard,
    loseCard,
    recoverLostCard,
    recoverDiscardedCard,
  };
}