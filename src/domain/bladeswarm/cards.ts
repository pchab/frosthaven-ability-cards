import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const bladeswarmPath = '/bladeswarm/abilities';

export const bladeswarmCards: Card[] = createCards([
  {
    level: 'X',
    name: 'grasping advance',
    initiative: 18,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 99, y: 52 } },
      { type: 'diamond', position: { x: 100, y: 70 } },
    ],
  },
  {
    level: 'X',
    name: 'the tomb of the immortal',
    initiative: 59,
    actions: { top: 'lose', bottom: 'discard' },
  },
  {
    level: 'X',
    name: 'unstoppable army',
    initiative: 94,
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 58, y: 150 } },
      { type: 'summonSquare', position: { x: 88, y: 150 } },
      { type: 'summonSquare', position: { x: 58, y: 164 } },
    ],
  },
  {
    level: 1,
    name: 'call of the grave',
    initiative: 49,
    actions: { top: 'discard', bottom: 'activeLost' },
  },
  {
    level: 1,
    name: 'corrupting parasites',
    initiative: 97,
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 58, y: 56 } },
      { type: 'summonSquare', position: { x: 88, y: 56 } },
    ],
  },
  {
    level: 1,
    name: 'death march',
    initiative: 84,
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 58, y: 56 } },
      { type: 'summonSquare', position: { x: 88, y: 56 } },
      { type: 'summonSquare', position: { x: 58, y: 70 } },
    ],
  },
  {
    level: 1,
    name: 'deflecting blades',
    initiative: 11,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 98, y: 135 } },
    ],
  },
  {
    level: 1,
    name: 'engulfing stingers',
    initiative: 88,
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 58, y: 56 } },
      { type: 'summonSquare', position: { x: 88, y: 56 } },
      { type: 'diamondPlus', position: { x: 98, y: 147 } },
    ],
  },
  {
    level: 1,
    name: 'focused scourge',
    initiative: 50,
    actions: { top: 'activeLost', bottom: 'activeLost' },
  },
  {
    level: 1,
    name: 'hive mind',
    initiative: 5,
    actions: { top: 'activeLost', bottom: 'activeLost' },
  },
  {
    level: 1,
    name: 'omniscient assault',
    initiative: 22,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 95, y: 68 } },
      { type: 'diamondPlus', position: { x: 98, y: 135 } },
    ],
  },
  {
    level: 1,
    name: 'scattered defense',
    initiative: 13,
    actions: { top: 'activeDiscard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 102, y: 38 } },
      { type: 'diamondPlus', position: { x: 98, y: 141 } },
    ],
  },
  {
    level: 1,
    name: 'swarming minions',
    initiative: 61,
    actions: { top: 'discard', bottom: 'lose' },
  },
  {
    level: 1,
    name: 'the storms edge',
    initiative: 37,
    actions: { top: 'discard', bottom: 'lose' },
  },
  {
    level: 2,
    name: 'infest',
    initiative: 43,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 99, y: 51 } },
    ],
  },
  {
    level: 2,
    name: 'overwhelming offensive',
    initiative: 12,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 99, y: 46 } },
    ],
  },
  {
    level: 3,
    name: 'armed and dangerous',
    initiative: 78,
    actions: { top: 'activeLost', bottom: 'discard' },
  },
  {
    level: 3,
    name: 'putrid grubs',
    initiative: 16,
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 98, y: 136 } },
    ],
  },
  {
    level: 4,
    name: 'incubation',
    initiative: 9,
    actions: { top: 'activeDiscard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 95, y: 37 } },
      { type: 'diamondPlus', position: { x: 97, y: 85 } },
    ],
  },
  {
    level: 4,
    name: 'vampiric tempest',
    initiative: 64,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 98, y: 137 } },
    ],
  },
  {
    level: 5,
    name: 'bioluminescence',
    initiative: 80,
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 59, y: 150 } },
      { type: 'summonSquare', position: { x: 89, y: 150 } },
    ],
  },
  {
    level: 5,
    name: 'cyclone of blades',
    initiative: 27,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 98, y: 145 } },
    ],
  },
  {
    level: 6,
    name: 'blood drain',
    initiative: 47,
    actions: { top: 'discard', bottom: 'discard' },
  },
  {
    level: 6,
    name: 'sunstroke',
    initiative: 32,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 98, y: 47 } },
    ],
  },
  {
    level: 7,
    name: 'fury of the horde',
    initiative: 86,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 58, y: 56 } },
      { type: 'summonSquare', position: { x: 88, y: 56 } },
      { type: 'summonSquare', position: { x: 58, y: 70 } },
      { type: 'diamondPlus', position: { x: 98, y: 140 } },
    ],
  },
  {
    level: 7,
    name: 'repulsive host',
    initiative: 19,
    actions: { top: 'activeDiscard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 98, y: 145 } },
    ],
  },
  {
    level: 8,
    name: 'blood daggers',
    initiative: 68,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 99, y: 164 } },
      { type: 'diamond', position: { x: 93, y: 175 } },
    ],
  },
  {
    level: 8,
    name: 'endless biting',
    initiative: 41,
    actions: { top: 'discard', bottom: 'activeDiscard' },
  },
  {
    level: 9,
    name: 'oasis',
    initiative: 4,
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 98, y: 130 } },
    ],
  },
  {
    level: 9,
    name: 'wasteland',
    initiative: 96,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 58, y: 56 } },
      { type: 'summonSquare', position: { x: 58, y: 70 } },
      { type: 'square', position: { x: 94, y: 147 } },
    ],
  },
], bladeswarmPath);
