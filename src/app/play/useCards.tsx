import { CardStatus, type Card, CardActions } from '@/domain/cards.type';
import { useState } from 'react';

export type Action = 'top' | 'bottom' | 'default';

function newStatusAfterAction(cardActions: Card['actions'], action: Action): CardStatus {
  if (action === 'default') {
    return CardStatus.discarded;
  }
  const cardAction = cardActions[action];
  switch (cardAction) {
    case CardActions.discard:
      return CardStatus.discarded;
    case CardActions.lose:
      return CardStatus.lost;
    case CardActions.activeDiscard:
    case CardActions.activeLost:
      return action === 'top' ? CardStatus.activeTop : CardStatus.activeBottom;
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

  const playCards = (cardsPlayed: { action: Action; card: X }[]) => setCurrentCards([
    ...currentCards.filter(card => !cardsPlayed.map(({ card }) => card).includes(card)),
    ...cardsPlayed.map(({ action, card }) => ({ ...card, status: newStatusAfterAction(card.actions, action) })),
  ]);

  const makeRest = ({ recovered, lost }: { recovered: X[], lost: X }) => setCurrentCards([
    ...currentCards.filter(c => c.status !== CardStatus.discarded),
    ...recovered.map(c => ({ ...c, status: CardStatus.inHand })),
    { ...lost, status: CardStatus.lost },
  ]);

  return {
    currentCards,
    selectCard,
    playCards,
    discardCard,
    loseCard,
    recoverCard,
    makeRest,
  };
}