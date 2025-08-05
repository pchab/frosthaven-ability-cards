'use client';

import { useCards } from '@/app/[selectedClass]/play/useCards';
import ChangeSpeed from '@/app/_components/class/blinkblade/ChangeSpeed';
import ClassIcon from '@/app/_components/class/ClassIcon';
import ChangeForm from '@/app/_components/class/geminate/ChangeForm';
import ChangePressure from '@/app/_components/class/metal-mosaic/ChangePressure';
import BoardArea from '@/app/_components/layout/BoardArea';
import SecretaryLink from '@/app/_components/secretary/SecretaryLink';
import useSecretary from '@/app/_components/secretary/useSecretary';
import { ClassContext } from '@/context/ClassContext';
import { isBlinkblade } from '@/domain/blinkblade/class';
import { type Card } from '@/domain/cards.type';
import { upperFirstLetter } from '@/domain/frosthaven-class';
import { isGeminate } from '@/domain/geminate/class';
import { isMetalMosaic } from '@/domain/metal-mosaic/class';
import { use, useMemo } from 'react';

function mapConnectionStatustoDisplay(connectionStatus: WebSocket['readyState']) {
  switch (connectionStatus) {
    case WebSocket.OPEN:
      return '🟢';
    case WebSocket.CONNECTING:
      return '🔵';
    case WebSocket.CLOSING:
      return '🟡';
    case WebSocket.CLOSED:
      return '🔴';
    default:
      return '❓';
  }
}

export default function PlayPage<X extends Card>() {
  const selectedClass = use(ClassContext);
  const {
    undo,
    redo,
  } = useCards<X>();
  const {
    connectionStatus,
    state,
    currentCharacter,
    currentPlayingFigure,
  } = useSecretary();

  const currentPlayingString = useMemo(() => {
    if (!currentPlayingFigure) {
      return 'End of round';
    }
    if (currentPlayingFigure.name === currentCharacter?.name) {
      return 'Your turn';
    }
    return `Current Turn: ${currentPlayingFigure.title || upperFirstLetter(currentPlayingFigure.name)}`;
  }, [currentPlayingFigure, currentCharacter?.name]);

  return <BoardArea
    title={
      <SecretaryLink>GHS Status: {mapConnectionStatustoDisplay(connectionStatus)}</SecretaryLink>
    }
    actions={[
      <button key='undo' onClick={undo}>Undo</button>,
      <button key='redo' onClick={redo}>Redo</button>
    ]}>
    <div className='flex flex-col gap-4 items-center'>
      <div className='flex gap-4 justify-center items-center'>
        {!isGeminate(selectedClass) && <ClassIcon fhClass={selectedClass} />}
        {isGeminate(selectedClass) && <ChangeForm />}
        {isBlinkblade(selectedClass) && <ChangeSpeed />}
        {isMetalMosaic(selectedClass) && <ChangePressure />}
      </div>
      {connectionStatus === WebSocket.OPEN && <h3 className='text-lg font-bold'>
        {state === 'next' && currentPlayingString}
        {state === 'draw' && `Chosen Initiative: ${currentCharacter?.initiative || '-'}`}
      </h3>}
    </div>
  </BoardArea>;
}
