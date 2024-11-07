import type { GameState } from '@/domain/secretary/game.state';

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