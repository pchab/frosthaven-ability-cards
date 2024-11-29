'use client';

import { CardComponent } from '@/app/_components/cards/Card';
import Button from '@/app/_components/inputs/Button';
import { CardStatus, type Card } from '@/domain/cards.type';
import { useCards, type Action } from '@/hooks/useCards';
import useSecretary from '@/hooks/useSecretary';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type SelectedActions = [
  Action | undefined,
  Action | undefined,
];

function areAllActionsSelected(actions: SelectedActions): actions is [Action, Action] {
  return actions.every(action => action !== undefined);
}

function getSelectedActionMasks(action: Action) {
  const masks = [];
  if (['top', 'default'].includes(action)) {
    masks.push(<div
      key={'mask-action-top'}
      className='m-2 absolute bg-black/80 left-0 w-action h-action top-[108px]' />);
  }
  if (['bottom', 'default'].includes(action)) {
    masks.push(<div
      key={'mask-action-bottom'}
      className='m-2 absolute bg-black/80 left-0 w-action h-action top-[12px]' />);
  }
  return masks;
}

export default function PlayedCards<X extends Card>() {
  const {
    currentCards,
    playCards,
  } = useCards<X>();
  const [selectedActions, setSelectedActions] = useState<SelectedActions>([undefined, undefined]);
  const {
    isConnected,
    setInitiative,
    setInactive,
  } = useSecretary();

  const selectedCards = currentCards
    .filter(card => card.status === CardStatus.selected);

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
    onClick: () => setInitiative(card),
  })

  const endTurn = () => {
    if (areAllActionsSelected(selectedActions)) {
      const [firstCard, secondCard] = selectedCards;
      const [firstAction, secondAction] = selectedActions;
      setSelectedActions([undefined, undefined]);
      playCards([
        { action: firstAction, card: firstCard },
        { action: secondAction, card: secondCard },
      ]);

      if (isConnected) {
        setInactive();
      }
    }
  };

  const getPlayableActions = (card: X) => [
    playDefaultAction(card),
    playTopAction(card),
    ...(isConnected ? [selectInitiative(card)] : []),
    playBottomAction(card),
  ];

  return <div className='flex gap-4 min-h-card min-w-[440px]'>
    <AnimatePresence>
      {selectedCards
        .map((card, index) => <CardComponent
          key={card.name}
          card={card}
          actions={getPlayableActions(card)}
        >
          {selectedActions[index] && getSelectedActionMasks(selectedActions[index])}
        </CardComponent>)}
    </AnimatePresence>
    <div className='place-self-center'>
      {selectedCards.length === 2 && areAllActionsSelected(selectedActions) &&
        <Button onClick={endTurn}>End Turn</Button>
      }
    </div>
  </div>;
}