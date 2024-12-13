import type { HiveCard } from '@/domain/hive/cards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useMemo } from 'react';
import { useShallow } from 'zustand/shallow';

export function useHiveMode() {
  const {
    states,
    updateStates,
    currentStateIndex,
  } = useFrosthavenStore(useShallow((store) => ({
    states: store.states,
    updateStates: store.updateStates,
    currentStateIndex: store.currentStateIndex,
  })));
  const currentCards = useMemo(() => states[currentStateIndex] as HiveCard[], [states, currentStateIndex]);

  const activateHiveMode = (card: HiveCard) => {
    if (!card.mode) {
      throw new Error(`Card ${card.name} can't be transfered to`);
    }

    const cardIndex = currentCards.findIndex(c => c === card);
    const newState = currentCards
      .with(cardIndex, { ...card, status: 'activeTop', isSelectedMode: true });
    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  };

  const transferHive = (card: HiveCard) => {
    if (!card.mode) {
      throw new Error(`Card ${card.name} can't be transfered to`);
    }

    const currentModeIndex = currentCards.findIndex(c => c.isSelectedMode);
    if (currentModeIndex === -1) {
      throw new Error('Hive should have at least one mode activated');
    }

    const cardIndex = currentCards.findIndex(c => c === card);
    const newState = (currentCards as HiveCard[])
      .map((card) => ({ ...card, isSelectedMode: false }))
      .with(cardIndex, { ...card, isSelectedMode: true });
    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  };

  return {
    activateHiveMode,
    transferHive,
  };
}