import type { Card } from '@/domain/cards.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useMemo } from 'react';
import { useShallow } from 'zustand/shallow';

function getActiveAction(cardStatus: Card['status']): keyof Card['actions'] {
  if (cardStatus === 'activeTop') {
    return 'top';
  }
  if (cardStatus === 'activeBottom') {
    return 'bottom';
  }
  throw new Error('Invalid card status');
}

export function useCardsSlots<X extends Card>() {
  const {
    states,
    updateStates,
    currentStateIndex,
  } = useFrosthavenStore(useShallow((store) => ({
    states: store.states,
    updateStates: store.updateStates,
    currentStateIndex: store.currentStateIndex,
  })));
  const currentCards = useMemo(() => states[currentStateIndex] as X[], [states, currentStateIndex]);

  const moveTokenForward = (card: X) => {
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
  };

  const moveTokenBackward = (card: X) => {
    if (!card.slots) {
      throw new Error(`Card ${card.name} doesn't not have slots`)
    }

    const cardIndex = currentCards.findIndex(c => c === card);
    const newTokenPosition = Math.max(card.tokenPosition ? card.tokenPosition - 1 : 0, 0);
    const newState = currentCards.with(cardIndex, { ...card, tokenPosition: newTokenPosition });
    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  };

  return {
    moveTokenForward,
    moveTokenBackward,
  };
}