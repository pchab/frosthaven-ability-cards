import { CardStatus, type Card, CardActions } from '@/domain/cards.type';
import { useEffect, useMemo, useState } from 'react';

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
  const [states, setStates] = useState<X[][]>([cards]);
  const [stateIndex, setStateIndex] = useState(0);
  const currentCards = useMemo(() => states[stateIndex], [states, stateIndex]);
  useEffect(() => {
    setStateIndex(states.length - 1);
  }, [states]);

  const changeCardStatus = (newStatus: CardStatus, condition?: () => boolean) => (card: X) => {
    if (condition && !condition()) return;
    const otherCards = currentCards.filter(c => c !== card);
    const newState = [...otherCards, { ...card, status: newStatus }];
    setStates([...states.slice(0, stateIndex + 1), newState]);
  };

  const selectCard = changeCardStatus(
    CardStatus.selected,
    () => currentCards.filter(c => c.status === CardStatus.selected).length < 2,
  );
  const discardCard = changeCardStatus(CardStatus.discarded);
  const loseCard = changeCardStatus(CardStatus.lost);
  const recoverCard = changeCardStatus(CardStatus.inHand);

  const playCards = (cardsPlayed: { action: Action; card: X }[]) => {
    const newState = [
      ...currentCards.filter(card => !cardsPlayed.map(({ card }) => card).includes(card)),
      ...cardsPlayed.map(({ action, card }) => ({ ...card, status: newStatusAfterAction(card.actions, action) })),
    ];
    setStates([...states.slice(0, stateIndex + 1), newState]);
  };

  const makeRest = ({ recovered, lost }: { recovered: X[], lost: X }) => {
    const newState = [
      ...currentCards.filter(c => c.status !== CardStatus.discarded),
      ...recovered.map(c => ({ ...c, status: CardStatus.inHand })),
      { ...lost, status: CardStatus.lost },
    ];
    setStates([...states.slice(0, stateIndex + 1), newState]);
  };

  const undo = () => {
    if (stateIndex === 0) return;
    setStateIndex(stateIndex - 1);
  };

  const redo = () => {
    if (stateIndex === states.length - 1) return;
    setStateIndex(stateIndex + 1);
  };

  return {
    currentCards,
    selectCard,
    playCards,
    discardCard,
    loseCard,
    recoverCard,
    makeRest,
    undo,
    redo,
  };
}