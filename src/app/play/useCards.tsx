import { CardStatus, type Card } from '@/domain/cards.type';
import { useState } from 'react';

export function useCards<X extends Card>(cards: X[]) {
  const [currentCards, setCurrentCards] = useState<X[]>(cards);

  const selectCard = (card: X) => {
    if (currentCards.filter(c => c.status === CardStatus.selected).length < 2) {
      const newCurrentCards = currentCards.filter(c => c !== card);
      setCurrentCards([...newCurrentCards, { ...card, status: CardStatus.selected }]);
    }
  };

  const discardCard = (card: X) => {
    const newCurrentCards = currentCards.filter(c => c !== card);
    setCurrentCards([...newCurrentCards, { ...card, status: CardStatus.discarded }]);
  };

  const loseCard = (card: X) => setCurrentCards([
    ...currentCards.filter(c => c !== card),
    { ...card, status: CardStatus.lost }],
  );

  const recoverCard = (card: X) => setCurrentCards([
    ...currentCards.filter(c => c !== card),
    { ...card, status: CardStatus.inHand },
  ]);

  const makeShortRest = ({ recovered, lost }: { recovered: X[], lost: X }) => setCurrentCards([
    ...currentCards.filter(c => c.status !== CardStatus.discarded),
    ...recovered.map(c => ({ ...c, status: CardStatus.inHand })),
    { ...lost, status: CardStatus.lost },
  ]);

  return {
    currentCards,
    selectCard,
    discardCard,
    loseCard,
    recoverCard,
    makeShortRest,
  };
}