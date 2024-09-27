import { CardStatus, type Card, CardActions } from '@/domain/cards.type';
import { useFrosthavenStore } from '@/stores/cards.store';
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

export function useCards<X extends Card>() {
  const {
    states,
    setStates,
    currentStateIndex,
    setStateIndex,
  } = useFrosthavenStore((store) => ({
    states: store.states,
    setStates: store.setStates,
    currentStateIndex: store.currentStateIndex,
    setStateIndex: store.setStateIndex,
  }));
  const currentCards = useMemo(() => states[currentStateIndex] as X[], [states, currentStateIndex]);
  useEffect(() => {
    setStateIndex(states.length - 1);
  }, [setStateIndex, states]);

  const updateState = (newStates: X[][]) => {
    setStates(newStates);
    setStateIndex(newStates.length - 1);
  };

  const changeCardStatus = (newStatus: CardStatus, condition?: () => boolean) => (card: X) => {
    if (condition && !condition()) return;
    const otherCards = currentCards.filter(c => c !== card);
    const newState = [...otherCards, { ...card, status: newStatus }];
    updateState([...states.slice(0, currentStateIndex + 1), newState] as X[][]);
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
      ...currentCards.filter(card => !cardsPlayed.map(({ card }) => card.name).includes(card.name)),
      ...cardsPlayed.map(({ action, card }) => ({ ...card, status: newStatusAfterAction(card.actions, action) })),
    ];

    updateState([...states.slice(0, currentStateIndex + 1), newState] as X[][]);
  };

  const makeRest = ({ recovered, lost }: { recovered: X[], lost: X }) => {
    const newState = [
      ...currentCards.filter(c => c.status !== CardStatus.discarded),
      ...recovered.map(c => ({ ...c, status: CardStatus.inHand })),
      { ...lost, status: CardStatus.lost },
    ];
    updateState([...states.slice(0, currentStateIndex + 1), newState] as X[][]);
  };

  const undo = () => {
    if (currentStateIndex === 0) return;
    setStateIndex(currentStateIndex - 1);
  };

  const redo = () => {
    if (currentStateIndex === states.length - 1) return;
    setStateIndex(currentStateIndex + 1);
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