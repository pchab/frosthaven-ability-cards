'use client';

import { CardStatus, type Card } from '@/domain/cards.type';
import { CardComponent } from '../../_components/cards/Card';
import { useCards, type Action } from '@/app/play/useCards';
import { useState } from 'react';
import Button from '@/app/_components/inputs/Button';
import useSecretary from '@/app/_components/secretary/useSecretary';

type SelectedActions = [
  Action | undefined,
  Action | undefined,
];

function areAllActionsSelected(actions: SelectedActions): actions is [Action, Action] {
  return actions.every(action => action !== undefined);
}

export default function PlayedCards<X extends Card>() {
  const {
    currentCards,
    playCards,
  } = useCards<X>();
  const [selectedActions, setSelectedActions] = useState<SelectedActions>([undefined, undefined]);
  const { isConnected, setInitiative } = useSecretary();

  const selectedCards = currentCards
    .filter(card => card.status === CardStatus.selected);

  const selectAction = (action: Action) => (card: X) => {
    const cardIndex = selectedCards.indexOf(card);
    const [firstAction, secondAction] = [...selectedActions];

    setSelectedActions(cardIndex
      ? [
        action !== 'default' && action === firstAction
          ? undefined : firstAction,
        action,
      ]
      : [
        action,
        action !== 'default' && action === secondAction
          ? undefined : secondAction,
      ]);
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
    }
  };

  const getPlayableActions = (card: X) => [
    playDefaultAction(card),
    playTopAction(card),
    playBottomAction(card),
    ...(isConnected ? [selectInitiative(card)] : [])
  ];

  return <div className='flex gap-4 min-h-[266px]'>
    {selectedCards
      .map((card, index) => <div
        key={card.name}
        className='flex flex-col'>
        <CardComponent card={card}
          actions={getPlayableActions(card)}
        />
        <div className='flex flex-col items-center p-4'>
          <div className='text-xs'>Selected Action:</div>
          <div className='text-sm uppercase'>{selectedActions[index]}</div>
        </div>
      </div>)}
    <div className='place-self-center'>
      {selectedCards.length === 2 && areAllActionsSelected(selectedActions) &&
        <Button onClick={endTurn}>End Turn</Button>
      }
    </div>
  </div>;
}