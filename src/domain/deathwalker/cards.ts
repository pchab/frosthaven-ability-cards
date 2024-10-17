import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const deathwalkerPath = '/deathwalker/abilities';

export const deathwalkerCards: Card[] = createCards([
  {
    level: 'X',
    name: 'forceful spirits',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
  },
  {
    level: 'X',
    name: 'rest in the shade',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'diamond', position: { x: 39, y: 54 } },
    ],
  },
  {
    level: 'X',
    name: 'wave of anguish',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 142 } },
      { type: 'square', position: { x: 93, y: 165 } },
    ],
  },
  {
    level: 1,
    name: 'anger of the dead',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'square', position: { x: 71, y: 34 } },
    ],
  },
  {
    level: 1,
    name: 'black barrage',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 70, y: 50 } },
      { type: 'square', position: { x: 92, y: 152 } },
    ],
  },
  {
    level: 1,
    name: 'call of doom',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 46, y: 40 } },
      { type: 'square', position: { x: 91, y: 148 } },
    ],
  },
  {
    level: 1,
    name: 'call to the abyss',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
  },
  {
    level: 1,
    name: 'dark fog',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 64, y: 36 } },
      { type: 'square', position: { x: 93, y: 151 } },
    ],
  },
  {
    level: 1,
    name: 'eclipse',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 153 } },
    ],
  },
  {
    level: 1,
    name: 'fluid night',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 37 } },
    ],
  },
  {
    level: 1,
    name: 'lingering rot',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 49, y: 44 } },
      { type: 'square', position: { x: 90, y: 142 } },
    ],
  },
  {
    level: 1,
    name: 'shadow step',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 39 } },
      { type: 'diamond', position: { x: 89, y: 81 } },
      { type: 'circle', position: { x: 89, y: 138 } },
    ],
  },
  {
    level: 1,
    name: 'strength of the abyss',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
  },
  {
    level: 1,
    name: 'sunless apparition',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 72, y: 44 } },
    ],
  },
  {
    level: 2,
    name: 'deepening despair',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 51, y: 51 } },
      { type: 'circle', position: { x: 90, y: 169 } },
    ],
  },
  {
    level: 2,
    name: 'restless spirits',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 38 } },
      { type: 'square', position: { x: 92, y: 137 } },
    ],
  },
  {
    level: 3,
    name: 'dead bolt',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 70, y: 49 } },
      { type: 'square', position: { x: 91, y: 151 } },
    ],
  },
  {
    level: 3,
    name: 'ritual sacrifice',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 49 } },
      { type: 'square', position: { x: 90, y: 171 } },
    ],
  },
  {
    level: 4,
    name: 'fleeting dusk',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 40, y: 47 } },
    ],
  },
  {
    level: 4,
    name: 'pulled across',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 134 } },
    ],
  },
  {
    level: 5,
    name: 'dominate',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 36 } },
      { type: 'circle', position: { x: 91, y: 147 } },
    ],
  },
  {
    level: 5,
    name: 'medium',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 32 } },
    ],
  },
  {
    level: 6,
    name: 'the night takes shape',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 73, y: 37 } },
      { type: 'summonSquare', position: { x: 73, y: 52 } },
      { type: 'square', position: { x: 93, y: 126 } },
    ],
  },
  {
    level: 6,
    name: 'vengeful storm',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 38 } },
    ],
  },
  {
    level: 7,
    name: 'hungry grasps',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
  },
  {
    level: 7,
    name: 'proliferation of the abyss',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 134 } },
      { type: 'square', position: { x: 92, y: 175 } },
    ],
  },
  {
    level: 8,
    name: 'frozen in fear',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 153 } },
    ],
  },
  {
    level: 8,
    name: 'lashing tendrils',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 93, y: 129 } },
    ],
  },
  {
    level: 9,
    name: 'black lance',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 74, y: 138 } },
    ],
  },
  {
    level: 9,
    name: 'when your time comes',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 65, y: 67 } },
    ],
  },
], deathwalkerPath);
