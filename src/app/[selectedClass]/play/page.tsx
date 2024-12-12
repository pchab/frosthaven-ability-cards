'use client';

import { useCards, type Action } from '@/app/[selectedClass]/play/useCards';
import ChangeSpeed from '@/app/_components/class/blinkblade/ChangeSpeed';
import ChangeForm from '@/app/_components/class/geminate/ChangeForm';
import ChangePressure from '@/app/_components/class/metal-mosaic/ChangePressure';
import Button from '@/app/_components/inputs/Button';
import BoardArea from '@/app/_components/layout/BoardArea';
import useSecretary from '@/app/_components/secretary/useSecretary';
import { ClassContext } from '@/context/ClassContext';
import { isBlinkblade } from '@/domain/blinkblade/class';
import { type Card } from '@/domain/cards.type';
import { upperFirstLetter } from '@/domain/frosthaven-class';
import { isGeminate } from '@/domain/geminate/class';
import { isMetalMosaic } from '@/domain/metal-mosaic/class';
import { useFrosthavenStore, type SelectedActions } from '@/stores/cards.store';
import { use, useMemo } from 'react';
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
    state,
    currentCharacter,
    currentPlayingFigure,
  } = useSecretary();

  const {
    selectedActions,
    setSelectedActions
  } = useFrosthavenStore(useShallow((store) => ({
    selectedActions: store.selectedActions,
    setSelectedActions: store.setSelectedActions,
  })));
  const selectedCards = currentCards
    .filter(card => card.status === 'selected');

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

  const currentPlayingString = useMemo(() => {
    if (!currentPlayingFigure) {
      return 'End of round';
    }
    if (currentPlayingFigure.name === currentCharacter?.name) {
      return 'Your turn';
    }
    return `Current Turn: ${currentPlayingFigure.title || upperFirstLetter(currentPlayingFigure.name)}`;
  }, [currentPlayingFigure, currentCharacter?.name]);

  return <BoardArea title={`GHS Status: ${isConnected ? '🟢' : '🔴'}`}>
    <div className='flex flex-col gap-4 items-center'>
      <h3 className='text-lg font-bold'>
        {state === 'next' && currentPlayingString}
        {state === 'draw' && `Chosen Initiative: ${currentCharacter?.initiative || '-'}`}
      </h3>
      <div className='flex flex-col lg:flex-row gap-4 justify-center items-center min-w-[302px]'>
        {isGeminate(selectedClass) && <ChangeForm />}
        {isBlinkblade(selectedClass) && <ChangeSpeed />}
        {isMetalMosaic(selectedClass) && <ChangePressure />}
        <div className='grid grid-cols-2 grid-rows-2 place-items-center gap-2'>
          <Button onClick={undo}>Undo</Button>
          <Button onClick={redo}>Redo</Button>

          <div className='col-span-2'>
            {selectedCards.length === 2 && areAllActionsSelected(selectedActions) &&
              <Button onClick={endTurn}>End Turn</Button>
            }
          </div>
        </div>
      </div>
    </div>
  </BoardArea>;
}
