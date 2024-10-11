'use client';

import { CardStatus, type Card } from '@/domain/cards.type';
import { CardComponent } from '../../_components/cards/Card';
import { useCards, type Action } from '@/app/play/useCards';
import { useState } from 'react';
import Button from '@/app/_components/Button';

type SelectedActions = Action[];

export default function PlayedCards<X extends Card>() {
  const {
    currentCards,
    playCards,
  } = useCards<X>();
  const [selectedActions, setSelectedActions] = useState<SelectedActions>([]);

  const selectedCards = currentCards
    .filter(card => card.status === CardStatus.selected);

  const selectAction = (action: Action) => (card: X) => {
    const cardIndex = selectedCards.indexOf(card);
    const newSelectedActions = [...selectedActions];
    newSelectedActions[cardIndex] = action;
    setSelectedActions(newSelectedActions);
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

  const endTurn = () => {
    if (selectedActions.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      const [firstAction, secondAction] = selectedActions;
      setSelectedActions([]);
      playCards([
        { action: firstAction, card: firstCard },
        { action: secondAction, card: secondCard },
      ]);
    }
  };

  const getPlayableActions = (index: number, card: X) => {
    if (selectedCards.length < 2) {
      return [];
    }
    const otherSelectedAction = selectedActions[index === 0 ? 1 : 0];
    if (!otherSelectedAction || otherSelectedAction === 'default') {
      return [playDefaultAction(card), playBottomAction(card), playTopAction(card)];
    }
    return otherSelectedAction === 'top'
      ? [playDefaultAction(card), playBottomAction(card)]
      : [playDefaultAction(card), playTopAction(card)];
  }

  return <div className='flex gap-4 min-h-[266px]'>
    {selectedCards
      .map((card, index) => <div
        key={card.name}
        className='flex flex-col'>
        <CardComponent card={card}
          actions={getPlayableActions(index, card)}
        />
        <div className='flex flex-col items-center p-4'>
          <div className='text-xs'>Selected Action:</div>
          <div className='text-sm uppercase'>{selectedActions[index]}</div>
        </div>
      </div>)}
    {selectedCards.length === 2 && <Button onClick={endTurn}>End Turn</Button>}
  </div>;
}