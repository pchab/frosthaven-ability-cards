'use client';

import { CardComponent } from '@/app/_components/cards/Card';
import CharacterMat from '@/app/_components/class/CharacterMat';
import Button from '@/app/_components/inputs/Button';
import { ClassContext } from '@/context/ClassContext';
import { CardStatus, type Card } from '@/domain/cards.type';
import { useCards, type Action } from '@/hooks/useCards';
import useSecretary from '@/hooks/useSecretary';
import { AnimatePresence } from 'framer-motion';
import { use, useState } from 'react';

type SelectedActions = [
  Action | undefined,
  Action | undefined,
];

function areAllActionsSelected(actions: SelectedActions): actions is [Action, Action] {
  return actions.every(action => action !== undefined);
}

export default function PlayedCards<X extends Card>() {
  const fhClass = use(ClassContext);
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

  return <CharacterMat fhClassName={fhClass.name}>
    <div className='h-full w-full flex gap-4 items-center justify-between p-12'>
      <AnimatePresence>
        {selectedCards
          .map((card, index) => <div
            key={card.name}
            className='flex flex-col'
          >
            <CardComponent card={card}
              actions={getPlayableActions(card)}
            />
            <div className='flex flex-col items-center p-4'>
              <div className='text-xs'>Selected Action:</div>
              <div className='text-sm uppercase'>{selectedActions[index]}</div>
            </div>
          </div>)}
      </AnimatePresence>
      <div className='place-self-center'>
        {selectedCards.length === 2 && areAllActionsSelected(selectedActions) &&
          <Button onClick={endTurn}>End Turn</Button>
        }
      </div>
    </div>
  </CharacterMat>;
}