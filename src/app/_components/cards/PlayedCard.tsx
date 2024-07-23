import type { Card } from '@/domain/cards.type';
import { CardComponent } from './Card';
import type { Action } from '@/app/play/useCards';
import { useState } from 'react';
import { PredefinedHoverArea } from './hover-area';

type SelectedActions = Action[];

export default function PlayedCard<X extends Card>({
  cards,
  playCards,
}: {
  cards: X[];
  playCards: (cardsPlayed: { action: Action; card: X }[]) => void;
}) {
  const [selectedActions, setSelectedActions] = useState<SelectedActions>([]);

  const selectAction = (action: Action) => (card: X) => {
    const cardIndex = cards.indexOf(card);
    const newSelectedActions = [...selectedActions];
    newSelectedActions[cardIndex] = action;
    setSelectedActions(newSelectedActions);
  };

  const playTopClickProps = {
    getZone: () => PredefinedHoverArea.top,
    onClick: selectAction('top'),
    info: 'Play top',
  };
  const playBottomClickProps = {
    getZone: () => PredefinedHoverArea.bottom,
    onClick: selectAction('bottom'),
    info: 'Play bottom',
  };

  const endTurn = () => {
    if (selectedActions.length === 2) {
      const [firstCard, secondCard] = cards;
      const [firstAction, secondAction] = selectedActions;
      setSelectedActions([]);
      playCards([
        { action: firstAction, card: firstCard },
        { action: secondAction, card: secondCard },
      ]);
    }
  };

  const fixedAreaProps = (action: Action) => {
    if (!action || action === 'default') {
      return {};
    }
    return { fixedArea: action === 'top' ? PredefinedHoverArea.top : PredefinedHoverArea.bottom };
  };

  const getPlayableActions = (index: number) => {
    if (cards.length < 2) {
      return [];
    }
    const otherSelectedAction = selectedActions[index === 0 ? 1 : 0];
    if (!otherSelectedAction || otherSelectedAction === 'default') {
      return [playTopClickProps, playBottomClickProps];
    }
    return otherSelectedAction === 'top' ? [playBottomClickProps] : [playTopClickProps];
  }

  return <div className='flex gap-4 min-h-[266px]'>
    {cards
      .map((card, index) => <div
        key={card.name}
        className='flex flex-col'>
        <CardComponent card={card}
          clickableAreasProps={getPlayableActions(index)}
          {...fixedAreaProps(selectedActions[index])}
        />
        <button
          className={selectedActions[index] === 'default' ? 'text-red-500' : ''}
          onClick={() => selectAction('default')(card)}
        >Default Action</button>
      </div>)}
    {cards.length === 2 && <button onClick={endTurn}>End Turn</button>}
  </div>;
}