'use client';

import { CardComponent } from '@/app/_components/cards/Card';
import type { Card } from '@/domain/cards.type';
import { useCards, type Action } from '@/app/[selectedClass]/play/useCards';
import useSecretary from '@/app/_components/secretary/useSecretary';
import { useFrosthavenStore, type SelectedActions } from '@/stores/cards.store';
import { AnimatePresence } from 'motion/react';
import { useShallow } from 'zustand/shallow';
import BoardArea from '@/app/_components/layout/BoardArea';

const bottomActionMask = <div
  key={'mask-action-top'}
  className='m-2 absolute bg-black/80 left-0 w-action h-action top-[108px]' />;
const topActionMask = <div
  key={'mask-action-bottom'}
  className='m-2 absolute bg-black/80 left-0 w-action h-action top-[12px]' />;

function getSelectedActionMasks(action: Action) {
  const masks = [];
  if (['top', 'default'].includes(action)) {
    masks.push(bottomActionMask);
  }
  if (['bottom', 'default'].includes(action)) {
    masks.push(topActionMask);
  }
  return masks;
}

function areAllActionsSelected(actions: SelectedActions): actions is [Action, Action] {
  return actions.every(action => action !== undefined);
}

export default function PlayedCards<X extends Card>() {
  const { currentCards, playCards, recoverCard } = useCards<X>();
  const {
    selectedActions,
    setSelectedActions,
  } = useFrosthavenStore(useShallow((store) => ({
    selectedActions: store.selectedActions,
    setSelectedActions: store.setSelectedActions,
  })))
  const {
    connectionStatus,
    setGhsInactive,
    setGhsInitiative,
  } = useSecretary();

  const selectedCards = currentCards
    .filter(card => card.status === 'selected');

  const selectAction = (action: Action) => (card: X) => {
    const cardIndex = selectedCards.indexOf(card);
    const [firstAction, secondAction] = [...selectedActions];

    setSelectedActions(cardIndex
      ? [action !== 'default' && action === firstAction
        ? undefined : firstAction,
        action]
      : [action,
        action !== 'default' && action === secondAction
          ? undefined : secondAction]
    );
  };

  const playTopAction = (card: X) => ({
    name: 'Play top',
    onClick: () => selectAction('top')(card),
  });
  const playBottomAction = (card: X) => ({
    name: 'Play bottom',
    onClick: () => selectAction('bottom')(card),
  });
  const playDefaultAction = (card: X) => ({
    name: 'Play default',
    onClick: () => selectAction('default')(card),
  });
  const selectInitiative = (card: X) => ({
    name: 'Select Initiative',
    onClick: () => setGhsInitiative(card),
  })

  const getPlayableActions = (card: X) => [
    playDefaultAction(card),
    playTopAction(card),
    ...(connectionStatus === WebSocket.OPEN ? [selectInitiative(card)] : []),
    playBottomAction(card),
  ];

  const endTurn = () => {
    if (areAllActionsSelected(selectedActions)) {
      const [firstCard, secondCard] = selectedCards;
      const [firstAction, secondAction] = selectedActions;
      setSelectedActions([undefined, undefined]);
      playCards([
        { action: firstAction, card: firstCard },
        { action: secondAction, card: secondCard },
      ]);

      if (connectionStatus === WebSocket.OPEN) {
        setGhsInactive();
      }
    }
  };

  const actions = selectedCards.length === 2 && areAllActionsSelected(selectedActions)
    ? [<button autoFocus key='end-turn' onClick={endTurn}>End Turn</button>]
    : undefined;

  return <BoardArea title='Selected cards' actions={actions}>
    <div className='flex gap-4 min-h-card min-w-[302px]'>
      <AnimatePresence mode='popLayout'>
        {selectedCards
          .map((card, index) => <CardComponent
            autoFocus={index === 1}
            key={card.name}
            card={card}
            actions={getPlayableActions(card)}
            onCloseCard={() => recoverCard(selectedCards[index])}
          >
            {selectedActions[index] && getSelectedActionMasks(selectedActions[index])}
          </CardComponent>)}
      </AnimatePresence>
    </div>
  </BoardArea>;
}