import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import type { CharacterState, Figure, GameState } from '@/domain/secretary/game.state';
import { mapCharacterNameToSecretary } from '@/domain/secretary/secretary-character.mapper';

export function getGameState() {
  if (!window.localStorage) {
    return undefined;
  }
  const gameStateString = localStorage.getItem('game');
  return JSON.parse(gameStateString ?? '{}') as GameState;
}

export function setGameState(state: GameState) {
  if (!window.localStorage) {
    return undefined;
  }
  localStorage.setItem('game', JSON.stringify(state));
}

export function updateGameStateForFigure<X extends Figure>(
  figureName: X['name'],
  newFigureState: Partial<X>,
): GameState | undefined {
  const gameState = getGameState();
  if (!gameState) return;

  const {
    characters,
    monsters,
    revision,
    ...rest
  } = gameState;

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

  // update playSeconds
  const newGameState = {
    ...rest,
    revision: revision + 1,
    ...newFiguresState,
  }
  setGameState(newGameState);
  return newGameState;
}

export function getCharacterState(characterName: FrosthavenClassNames): CharacterState | undefined {
  const gameState = getGameState();
  if (!gameState) return;

  return gameState.characters
    .find(({ name }) => name === mapCharacterNameToSecretary(characterName));
}
