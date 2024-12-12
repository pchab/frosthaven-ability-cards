import type { CardStatus, Card } from '@/domain/cards.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useCallback, useMemo } from 'react';
import { useShallow } from 'zustand/shallow';

export type Action = 'top' | 'bottom' | 'default';

function newStatusAfterAction(cardActions: Card['actions'], action: Action): CardStatus {
  if (action === 'default') {
    return 'discarded';
  }
  const cardAction = cardActions[action];
  switch (cardAction) {
    case 'discard':
      return 'discarded';
    case 'lose':
      return 'lost';
    case 'activeDiscard':
    case 'activeLost':
      return action === 'top' ? 'activeTop' : 'activeBottom';
  }
}

function getActiveAction(cardStatus: Card['status']): keyof Card['actions'] {
  if (cardStatus === 'activeTop') {
    return 'top';
  }
  if (cardStatus === 'activeBottom') {
    return 'bottom';
  }
  throw new Error('Invalid card status');
}

export function useCards<X extends Card>() {
  const {
    states,
    updateStates,
    currentStateIndex,
    setStateIndex,
  } = useFrosthavenStore(useShallow((store) => ({
    states: store.states,
    updateStates: store.updateStates,
    currentStateIndex: store.currentStateIndex,
    setStateIndex: store.setStateIndex,
    selectedActions: store.selectedActions,
    setSelectedActions: store.setSelectedActions,
  })));
  const currentCards = useMemo(() => states[currentStateIndex] as X[], [states, currentStateIndex]);

  const changeCardStatus = useCallback((newStatus: CardStatus, condition?: () => boolean) => (card: X) => {
    if (condition && !condition()) return;
    const otherCards = currentCards.filter(c => c !== card);
    const newState = [...otherCards, { ...card, status: newStatus }];
    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  }, [currentCards, states, currentStateIndex, updateStates]);

  const selectCard = changeCardStatus(
    'selected',
    () => currentCards.filter(c => c.status === 'selected').length < 2,
  );
  const discardCard = changeCardStatus('discarded');
  const loseCard = changeCardStatus('lost');
  const recoverCard = changeCardStatus('inHand');

  const playCards = useCallback((cardsPlayed: { action: Action; card: X }[]) => {
    const newState = [
      ...currentCards.filter(card => !cardsPlayed.map(({ card }) => card.name).includes(card.name)),
      ...cardsPlayed.map(({ action, card }) => ({ ...card, status: newStatusAfterAction(card.actions, action) })),
    ];

    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  }, [currentCards, states, currentStateIndex, updateStates]);

  const moveTokenForward = useCallback((card: X) => {
    if (!card.slots) {
      throw new Error(`Card ${card.name} doest not have slots`)
    }

    const cardIndex = currentCards.findIndex(c => c === card);
    const newTokenPosition = (card.tokenPosition ?? 0) + 1;
    if (newTokenPosition >= card.slots.length) {
      const action = getActiveAction(card.status);
      const newStatus = card.actions[action] === 'activeDiscard' ? 'discarded' : 'lost';
      const newState = currentCards.with(cardIndex, { ...card, status: newStatus, tokenPosition: 0 });
      updateStates([...states.slice(0, currentStateIndex + 1), newState]);
    } else {
      const newState = currentCards.with(cardIndex, { ...card, tokenPosition: newTokenPosition });
      updateStates([...states.slice(0, currentStateIndex + 1), newState]);
    }
  }, [currentCards, states, currentStateIndex, updateStates]);

  const moveTokenBackward = useCallback((card: X) => {
    if (!card.slots) {
      throw new Error(`Card ${card.name} doest not have slots`)
    }

    const cardIndex = currentCards.findIndex(c => c === card);
    const newTokenPosition = Math.max(card.tokenPosition ? card.tokenPosition - 1 : 0, 0);
    const newState = currentCards.with(cardIndex, { ...card, tokenPosition: newTokenPosition });
    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  }, [currentCards, states, currentStateIndex, updateStates]);

  const makeRest = useCallback((lost: X) => {
    const recovered = currentCards
      .filter(({ status }) => status === 'discarded')
      .filter(({ name }) => name !== lost.name);

    const newState = [
      ...currentCards.filter(c => c.status !== 'discarded'),
      ...recovered.map(c => ({ ...c, status: 'inHand' })),
      { ...lost, status: 'lost' },
    ];
    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  }, [currentCards, states, currentStateIndex, updateStates]);

  const undo = useCallback(() => {
    if (currentStateIndex === 0) return;
    setStateIndex(currentStateIndex - 1);
  }, [currentStateIndex, setStateIndex]);

  const redo = useCallback(() => {
    if (currentStateIndex === states.length - 1) return;
    setStateIndex(currentStateIndex + 1);
  }, [states, currentStateIndex, setStateIndex]);

  return {
    currentCards,
    selectCard,
    playCards,
    discardCard,
    loseCard,
    recoverCard,
    moveTokenForward,
    moveTokenBackward,
    makeRest,
    undo,
    redo,
  };
}