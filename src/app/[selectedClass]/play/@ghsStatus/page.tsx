'use client';

import BoardArea from '@/app/_components/layout/BoardArea';
import useSecretary from '@/app/_components/secretary/useSecretary';
import type { GameState } from '@/domain/secretary/game.state';

function getCurrentPhase(state: GameState['state'] | undefined) {
  if (state === 'draw') return 'Initiative';
  if (state === 'next') return 'Round';
  return 'unknown';
}

export default function GhsStatus() {
  const {
    isConnected,
    state,
    currentCharacter,
    currentPlayingFigure,
  } = useSecretary();

  if (!isConnected) {
    return <></>;
  }

  return <BoardArea title='GHS Status: 🟢'>
    <div className='p-4'>
      {state === 'next' && <p>
        {!currentPlayingFigure && 'End of round'}
        {currentPlayingFigure && `Current Turn:
        ${currentPlayingFigure.name === currentCharacter?.name
            ? 'You'
            : currentPlayingFigure.name}`
        }
      </p>}
      {state === 'draw' && <p>
        Chosen Initiative: {currentCharacter?.initiative || '-'}
      </p>}
    </div>
  </BoardArea>
}