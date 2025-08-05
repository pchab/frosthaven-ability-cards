'use client';

import { ClassContext } from '@/context/ClassContext';
import { WebSocketContext } from '@/context/WebSocketContext';
import { isBlinkblade, speeds } from '@/domain/blinkblade/class';
import type { Card } from '@/domain/cards.type';
import { CharacterState, type Figure, type GameState } from '@/domain/secretary/game.state';
import { mapCharacterNameToSecretary } from '@/domain/secretary/secretary-character.mapper';
import { use, useEffect, useState } from 'react';

function updateGameStateForFigure<F extends Figure>(
  oldGameState: GameState,
  figureName: F['name'],
  newFigureState: Partial<F>,
  lastUpdateInSeconds: number,
): GameState {
  const {
    characters,
    monsters,
    revision,
    playSeconds,
    ...rest
  } = oldGameState;

  const currentCharacterIndex = characters
    .findIndex(({ name }) => name === figureName);
  const currentMonsterIndex = monsters
    .findIndex(({ name }) => name === figureName);

  const newFiguresState = {
    characters,
    monsters,
  };
  if (currentCharacterIndex > -1) {
    newFiguresState.characters = characters.with(currentCharacterIndex, {
      ...characters[currentCharacterIndex],
      ...newFigureState,
    });
  } else if (currentMonsterIndex > -1) {
    newFiguresState.monsters = monsters.with(currentMonsterIndex, {
      ...monsters[currentMonsterIndex],
      ...newFigureState,
    });
  }

  const newGameState = {
    ...rest,
    revision: revision + 1,
    playSeconds: playSeconds + (getNowInSeconds() - lastUpdateInSeconds),
    ...newFiguresState,
  }
  return newGameState;
}

function getNowInSeconds() {
  return Math.floor(Date.now() / 1000);
}

export default function useSecretary<X extends Card>() {
  const {
    connectionStatus,
    gameState,
    sendGameStateToGhs,
  } = use(WebSocketContext);
  const currentClass = use(ClassContext);
  const [currentCharacter, setCurrentCharacter] = useState<CharacterState>();
  const [currentPlayingFigure, setCurrentPlayingFigure] = useState<Figure>();
  const [state, setState] = useState<GameState['state']>();
  const [lastUpdateInSeconds, setLastUpdateInSeconds] = useState<number>(getNowInSeconds());

  const setGhsInitiative = ({ initiative }: X) => {
    if (connectionStatus !== WebSocket.OPEN || !currentClass || !currentCharacter || !gameState) return;

    let newInitiative = initiative;

    if (isBlinkblade(currentClass)) {
      const currentSpeed = currentCharacter.identity;
      if (speeds[currentSpeed] === 'slow') {
        newInitiative += 30;
      }
    }

    const newGameState = updateGameStateForFigure(gameState, currentCharacter.name, { initiative: newInitiative }, lastUpdateInSeconds);
    if (sendGameStateToGhs) {
      sendGameStateToGhs(newGameState, ['setInitiative', currentCharacter.title || currentClass.name, `'${newInitiative}'`]);
    }
  };

  const setGhsInactive = () => {
    if (connectionStatus !== WebSocket.OPEN || !currentClass || !gameState) return;
    let newGameState = gameState;
    const { figures } = gameState;
    const ghsCharacterName = mapCharacterNameToSecretary(currentClass.name);

    // Set the current character to inactive
    if (!currentCharacter || currentCharacter.off || !currentCharacter.active) return;
    newGameState = updateGameStateForFigure(gameState, currentCharacter.name, { active: false, off: true }, lastUpdateInSeconds);

    // Set the next character to active if current character is not the last one
    const currentInitiativeOrder = figures
      .findIndex(figure => figure === `fh-${ghsCharacterName}`);
    if (currentInitiativeOrder < figures.length - 1) {
      const nextActingFigure = figures[currentInitiativeOrder + 1];
      newGameState = updateGameStateForFigure(newGameState, nextActingFigure.replace('fh-', ''), { active: true, off: false }, lastUpdateInSeconds);
    }

    if (sendGameStateToGhs) {
      sendGameStateToGhs(newGameState, ['unsetActive', currentCharacter.title || currentClass.name]);
    }
  }

  const setGhsIdentity = (identity: number, fromTo: [string, string]) => {
    if (!gameState || !currentClass || !currentCharacter) return;
    const { name, title } = currentCharacter;

    const undoInfo = ['nextIdentity', title || currentClass.name, name, ...fromTo];

    const newGameState = updateGameStateForFigure(gameState, name, { identity }, lastUpdateInSeconds);
    if (sendGameStateToGhs) {
      sendGameStateToGhs(newGameState, undoInfo);
    }
  }

  useEffect(() => {
    if (!gameState) return;

    const currentCharacter = gameState.characters
      .find(({ name }) => name === mapCharacterNameToSecretary(currentClass.name));
    const currentPlayingFigure = [...(gameState.characters ?? []), ...(gameState.monsters ?? [])]
      .find(({ active }) => active);

    setLastUpdateInSeconds(getNowInSeconds());
    setCurrentCharacter(currentCharacter);
    setCurrentPlayingFigure(currentPlayingFigure);
    setState(gameState.state);
  }, [gameState, currentClass.name]);

  return {
    connectionStatus,
    state,
    currentCharacter,
    currentPlayingFigure,
    setGhsInitiative,
    setGhsInactive,
    setGhsIdentity,
  };
}
