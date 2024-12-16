import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const deathwalkerPath = '/deathwalker/abilities';

export const deathwalkerCards: Card[] = createCards([
  {
    level: 'X',
    name: 'forceful spirits',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 34,
  },
  {
    level: 'X',
    name: 'rest in the shade',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 39, y: 54 } },
    ],
    initiative: 26,
  },
  {
    level: 'X',
    name: 'wave of anguish',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 142 } },
      { type: 'square', position: { x: 93, y: 165 } },
    ],
    initiative: 58,
  },
  {
    level: 1,
    name: 'anger of the dead',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 71, y: 34 } },
    ],
    initiative: 14,
  },
  {
    level: 1,
    name: 'black barrage',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 70, y: 50 } },
      { type: 'square', position: { x: 92, y: 152 } },
    ],
    initiative: 28,
  },
  {
    level: 1,
    name: 'call of doom',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 46, y: 40 } },
      { type: 'square', position: { x: 91, y: 148 } },
    ],
    initiative: 32,
  },
  {
    level: 1,
    name: 'call to the abyss',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 82,
  },
  {
    level: 1,
    name: 'dark fog',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 64, y: 36 } },
      { type: 'square', position: { x: 93, y: 151 } },
    ],
    initiative: 46,
  },
  {
    level: 1,
    name: 'eclipse',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 153 } },
    ],
    initiative: 86,
  },
  {
    level: 1,
    name: 'fluid night',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 37 } },
    ],
    initiative: 24,
  },
  {
    level: 1,
    name: 'lingering rot',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 49, y: 44 } },
      { type: 'square', position: { x: 90, y: 142 } },
    ],
    initiative: 64,
  },
  {
    level: 1,
    name: 'shadow step',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 39 } },
      { type: 'diamond', position: { x: 89, y: 81 } },
      { type: 'circle', position: { x: 89, y: 138 } },
    ],
    initiative: 19,
  },
  {
    level: 1,
    name: 'strength of the abyss',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 50,
  },
  {
    level: 1,
    name: 'sunless apparition',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 72, y: 44 } },
    ],
    initiative: 96,
  },
  {
    level: 2,
    name: 'deepening despair',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 51, y: 51 } },
      { type: 'circle', position: { x: 90, y: 169 } },
    ],
    initiative: 11,
  },
  {
    level: 2,
    name: 'restless spirits',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 38 } },
      { type: 'square', position: { x: 92, y: 137 } },
    ],
    initiative: 20,
  },
  {
    level: 3,
    name: 'dead bolt',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 70, y: 49 } },
      { type: 'square', position: { x: 91, y: 151 } },
    ],
    initiative: 88,
  },
  {
    level: 3,
    name: 'ritual sacrifice',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 49 } },
      { type: 'square', position: { x: 90, y: 171 } },
    ],
    initiative: 13,
  },
  {
    level: 4,
    name: 'fleeting dusk',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 40, y: 47 } },
    ],
    initiative: 36,
  },
  {
    level: 4,
    name: 'pulled across',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 134 } },
    ],
    initiative: 77,
  },
  {
    level: 5,
    name: 'dominate',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 36 } },
      { type: 'circle', position: { x: 91, y: 147 } },
    ],
    initiative: 29,
  },
  {
    level: 5,
    name: 'medium',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 32 } },
    ],
    initiative: 55,
  },
  {
    level: 6,
    name: 'the night takes shape',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 73, y: 37 } },
      { type: 'summonSquare', position: { x: 73, y: 52 } },
      { type: 'square', position: { x: 93, y: 126 } },
    ],
    initiative: 94,
  },
  {
    level: 6,
    name: 'vengeful storm',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 38 } },
    ],
    initiative: 18,
  },
  {
    level: 7,
    name: 'hungry grasps',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 25,
  },
  {
    level: 7,
    name: 'proliferation of the abyss',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 134 } },
      { type: 'square', position: { x: 92, y: 175 } },
    ],
    initiative: 38,
  },
  {
    level: 8,
    name: 'frozen in fear',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 153 } },
    ],
    initiative: 21,
  },
  {
    level: 8,
    name: 'lashing tendrils',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 93, y: 129 } },
    ],
    initiative: 80,
  },
  {
    level: 9,
    name: 'black lance',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 74, y: 138 } },
    ],
    initiative: 16,
  },
  {
    level: 9,
    name: 'when your time comes',
    actions: { top: 'activeDiscard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 65, y: 67 } },
    ],
    initiative: 72,
  },
], deathwalkerPath);
