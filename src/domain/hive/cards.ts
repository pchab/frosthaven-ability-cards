import { createCards } from '../card.factory';
import { Card } from '../cards.type';

export type HiveCard = Card & {
  mode?: {
    x: number; y: number;
  },
  isSelectedMode?: boolean;
};

const hivePath = '/hive/abilities';

export const hiveCards: HiveCard[] = createCards([
  {
    level: 'X',
    name: 'reassemble',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 172 } },
    ],
    initiative: 27,
  },
  {
    level: 'X',
    name: 'remote control',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 48,
  },
  {
    level: 'X',
    name: 'shocking pulse',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 61, y: 39 } },
      { type: 'summonSquare', position: { x: 94, y: 39 } },
    ],
    initiative: 86,
    mode: { x: 40, y: 81 },
  },
  {
    level: 1,
    name: 'aimed assault',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 71, y: 38 } },
      { type: 'summonSquare', position: { x: 115, y: 53 } },
      { type: 'square', position: { x: 91, y: 152 } },
    ],
    initiative: 88,
    mode: { x: 23, y: 75 },
  },
  {
    level: 1,
    name: 'coiled limbs',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 56, y: 39 } },
      { type: 'summonSquare', position: { x: 56, y: 58 } },
      { type: 'circle', position: { x: 74, y: 151 } },
    ],
    initiative: 82,
    mode: { x: 43, y: 80 },
  },
  {
    level: 1,
    name: 'faceless entity',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 12,
  },
  {
    level: 1,
    name: 'high impact projectiles',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 81, y: 58 } },
      { type: 'square', position: { x: 73, y: 158 } },
    ],
    initiative: 16,
  },
  {
    level: 1,
    name: 'prepare for deployment',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 59 } },
      { type: 'square', position: { x: 92, y: 152 } },
    ],
    initiative: 64,
  },
  {
    level: 1,
    name: 'reaper function',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'hex', position: { x: 83, y: 45, size: 14 } },
    ],
    initiative: 32,
  },
  {
    level: 1,
    name: 'reconstructive aid',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 63, y: 37 } },
      { type: 'summonSquare', position: { x: 95, y: 37 } },
      { type: 'summonSquare', position: { x: 95, y: 53 } },
      { type: 'circle', position: { x: 63, y: 151 } },
    ],
    initiative: 90,
    mode: { x: 23, y: 76 },
  },
  {
    level: 1,
    name: 'launch pod',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 38 } },
      { type: 'circle', position: { x: 70, y: 165 } },
    ],
    initiative: 77,
  },
  {
    level: 1,
    name: 'hunter killer',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 67, y: 37 } },
      { type: 'summonSquare', position: { x: 100, y: 37 } },
      { type: 'summonSquare', position: { x: 67, y: 52 } },
      { type: 'circle', position: { x: 91, y: 143 } },
      { type: 'square', position: { x: 91, y: 166 } },
    ],
    initiative: 84,
    mode: { x: 24, y: 76 },
  },
  {
    level: 1,
    name: 'interference',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 71, y: 58 } },
      { type: 'circle', position: { x: 91, y: 130 } },
    ],
    initiative: 21,
  },
  {
    level: 1,
    name: 'plated defense',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 68, y: 39 } },
      { type: 'summonSquare', position: { x: 100, y: 39 } },
      { type: 'summonSquare', position: { x: 68, y: 54 } },
      { type: 'square', position: { x: 89, y: 142 } },
      { type: 'square', position: { x: 89, y: 165 } },
    ],
    initiative: 80,
    mode: { x: 26, y: 78 },
  },
  {
    level: 2,
    name: 'force field',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 67, y: 41 } },
      { type: 'summonSquare', position: { x: 98, y: 41 } },
      { type: 'summonSquare', position: { x: 98, y: 56 } },
      { type: 'circle', position: { x: 90, y: 152 } },
    ],
    initiative: 78,
    mode: { x: 24, y: 79 },
  },
  {
    level: 2,
    name: 'long range missile',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 19,
  },
  {
    level: 3,
    name: 'hijack',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 40,
  },
  {
    level: 3,
    name: 'rapid fire',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 67, y: 39 } },
      { type: 'circle', position: { x: 91, y: 137 } },
      { type: 'square', position: { x: 91, y: 172 } },
    ],
    initiative: 92,
    mode: { x: 24, y: 76 },
  },
  {
    level: 4,
    name: 'divergent destruction',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 153 } },
    ],
    initiative: 22,
  },
  {
    level: 4,
    name: 'plague protocol',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 68, y: 40 } },
      { type: 'summonSquare', position: { x: 99, y: 40 } },
      { type: 'summonSquare', position: { x: 68, y: 55 } },
      { type: 'circle', position: { x: 90, y: 133 } },
    ],
    initiative: 98,
    mode: { x: 23, y: 77 },
  },
  {
    level: 5,
    name: 'code geminate',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 138 } },
      { type: 'square', position: { x: 91, y: 171 } },
    ],
    initiative: 28,
  },
  {
    level: 5,
    name: 'net dispersal',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 59, y: 39 } },
      { type: 'summonSquare', position: { x: 59, y: 61 } },
    ],
    initiative: 94,
    mode: { x: 24, y: 86 },
  },
  {
    level: 6,
    name: 'spinning blades',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 63, y: 39 } },
      { type: 'summonSquare', position: { x: 95, y: 39 } },
      { type: 'summonSquare', position: { x: 63, y: 57 } },
      { type: 'circle', position: { x: 91, y: 141 } },
    ],
    initiative: 79,
    mode: { x: 24, y: 81 },
  },
  {
    level: 6,
    name: 'triage program',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 70, y: 58 } },
      { type: 'circle', position: { x: 70, y: 177 } },
    ],
    initiative: 13,
  },
  {
    level: 7,
    name: 'mortar shells',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 64, y: 37 } },
      { type: 'summonSquare', position: { x: 97, y: 52 } },
      { type: 'square', position: { x: 90, y: 152 } },
    ],
    initiative: 85,
    mode: { x: 23, y: 77 },
  },
  {
    level: 7,
    name: 'recall',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 91,
  },
  {
    level: 8,
    name: 'burning slash',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'hex', position: { x: 86, y: 43, size: 14 } },
      { type: 'circle', position: { x: 90, y: 154 } },
    ],
    initiative: 29,
  },
  {
    level: 8,
    name: 'swarming bulwark',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 63, y: 39 } },
      { type: 'summonSquare', position: { x: 96, y: 39 } },
      { type: 'summonSquare', position: { x: 63, y: 54 } },
      { type: 'square', position: { x: 91, y: 133 } },
      { type: 'square', position: { x: 91, y: 176 } },
    ],
    initiative: 96,
    mode: { x: 24, y: 79 },
  },
  {
    level: 9,
    name: 'disassemble',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 60 } },
    ],
    initiative: 20,
  },
  {
    level: 9,
    name: 'heavy metal',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 65, y: 37 } },
      { type: 'summonSquare', position: { x: 98, y: 37 } },
      { type: 'summonSquare', position: { x: 65, y: 52 } },
      { type: 'circle', position: { x: 90, y: 132 } },
    ],
    initiative: 76,
    mode: { x: 22, y: 77 },
  },
], hivePath);
