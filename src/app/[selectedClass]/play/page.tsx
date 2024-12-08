'use client';

import ChangeSpeed from '@/app/_components/class/blinkblade/ChangeSpeed';
import ChangeForm from '@/app/_components/class/geminate/ChangeForm';
import Button from '@/app/_components/inputs/Button';
import { ClassContext } from '@/context/ClassContext';
import { isBlinkblade } from '@/domain/blinkblade/class';
import { CardStatus, type Card } from '@/domain/cards.type';
import { isGeminate } from '@/domain/geminate/class';
import { useCards, type Action } from '@/app/[selectedClass]/play/useCards';
import useSecretary from '@/app/_components/secretary/useSecretary';
import { useFrosthavenStore, type SelectedActions } from '@/stores/cards.store';
import { use } from 'react';
import { useShallow } from 'zustand/shallow';

function areAllActionsSelected(actions: SelectedActions): actions is [Action, Action] {
  return actions.every(action => action !== undefined);
}

export default function PlayPage<X extends Card>() {
  const selectedClass = use(ClassContext);
  const {
    currentCards,
    undo,
    redo,
    playCards,
  } = useCards<X>();
  const {
    isConnected,
    setGhsInactive,
  } = useSecretary();

  const {
    selectedActions,
    setSelectedActions
  } = useFrosthavenStore(useShallow((store) => ({
    selectedActions: store.selectedActions,
    setSelectedActions: store.setSelectedActions,
  })));
  const selectedCards = currentCards
    .filter(card => card.status === CardStatus.selected);

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
        setGhsInactive();
      }
    }
  };

  return <div className='flex flex-col lg:flex-row gap-4 justify-center items-center'>
    {isGeminate(selectedClass) && <ChangeForm />}
    {isBlinkblade(selectedClass) && <ChangeSpeed />}
    <div className='grid grid-cols-2 grid-rows-2 place-items-center gap-2'>
      <Button onClick={undo}>Undo</Button>
      <Button onClick={redo}>Redo</Button>
      <div className='col-span-2'>
        {selectedCards.length === 2 && areAllActionsSelected(selectedActions) &&
          <Button onClick={endTurn}>End Turn</Button>
        }
      </div>
    </div>
  </div>;
}
