import { CardStatus, type Card, CardActions } from '@/domain/cards.type';
import { useState } from 'react';

function newStatusAfterAction(action: CardActions): CardStatus {
  switch (action) {
    case CardActions.discard:
      return CardStatus.discarded;
    case CardActions.lose:
      return CardStatus.lost;
    case CardActions.activeDiscard:
      return CardStatus.activeDiscard;
    case CardActions.activeLost:
      return CardStatus.activeLost;
  }
}

export function useCards<X extends Card>(cards: X[]) {
  const [currentCards, setCurrentCards] = useState<X[]>(cards);

  const selectCard = (card: X) => {
    if (currentCards.filter(c => c.status === CardStatus.selected).length < 2) {
      const newCurrentCards = currentCards.filter(c => c !== card);
      setCurrentCards([...newCurrentCards, { ...card, status: CardStatus.selected }]);
    }
  };

  const discardCard = (card: X) => setCurrentCards([
    ...currentCards.filter(c => c !== card),
    { ...card, status: CardStatus.discarded }
  ]);

  const loseCard = (card: X) => setCurrentCards([
    ...currentCards.filter(c => c !== card),
    { ...card, status: CardStatus.lost }],
  );

  const recoverCard = (card: X) => setCurrentCards([
    ...currentCards.filter(c => c !== card),
    { ...card, status: CardStatus.inHand },
  ]);

  const playCard = (action: 'top' | 'bottom') => (card: X) => setCurrentCards([
    ...currentCards.filter(c => c !== card),
    { ...card, status: newStatusAfterAction(card.actions[action]) },
  ]);

  const makeShortRest = ({ recovered, lost }: { recovered: X[], lost: X }) => setCurrentCards([
    ...currentCards.filter(c => c.status !== CardStatus.discarded),
    ...recovered.map(c => ({ ...c, status: CardStatus.inHand })),
    { ...lost, status: CardStatus.lost },
  ]);

  return {
    currentCards,
    selectCard,
    playCard,
    discardCard,
    loseCard,
    recoverCard,
    makeShortRest,
  };
}