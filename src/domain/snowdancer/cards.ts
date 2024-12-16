import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const snowdancerPath = '/snowdancer/abilities';

export const snowdancerCards: Card[] = createCards([
  {
    level: 'X',
    name: 'blinding vortex',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 36 }, },
      { type: 'hex', position: { x: 110, y: 75, size: 15 }, },
      { type: 'circle', position: { x: 74, y: 152 }, },
    ],
    initiative: 31,
  },
  {
    level: 'X',
    name: 'the spirits call',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 72, y: 48 }, },
      { type: 'square', position: { x: 52, y: 144 }, },
    ],
    initiative: 45,
  },
  {
    level: 'X',
    name: 'white winds',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'hex', position: { x: 111, y: 41.5, size: 14 }, },
      { type: 'hex', position: { x: 97, y: 66, size: 14 }, },
      { type: 'square', position: { x: 61, y: 132 }, },
      { type: 'square', position: { x: 96, y: 132 }, },
    ],
    initiative: 11,
  },
  {
    level: 1,
    name: 'blizzard',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 65, y: 28 }, },
      { type: 'circle', position: { x: 90, y: 141 }, },
    ],
    initiative: 71,
  },
  {
    level: 1,
    name: 'chilling impact',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 141 }, },
    ],
    initiative: 31,
  },
  {
    level: 1,
    name: 'cold therapy',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 65, y: 50 }, },
    ],
    initiative: 20,
  },
  {
    level: 1,
    name: 'cross winds',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 58 }, },
      { type: 'square', position: { x: 89, y: 76 }, },
      { type: 'square', position: { x: 89, y: 166 }, },
    ],
    initiative: 32,
  },
  {
    level: 1,
    name: 'enticing breeze',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 62, y: 44 }, },
      { type: 'square', position: { x: 72, y: 130 }, },
    ],
    initiative: 76,
  },
  {
    level: 1,
    name: 'frigid growth',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 74, y: 147 }, },
    ],
    initiative: 70,
  },
  {
    level: 1,
    name: 'gathering force',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    initiative: 89,
  },
  {
    level: 1,
    name: 'lifting gust',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 53 }, },
      { type: 'circle', position: { x: 75, y: 145 }, },
    ],
    initiative: 27,
  },
  {
    level: 1,
    name: 'natures breath',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 74, y: 39 }, },
      { type: 'summonSquare', position: { x: 116, y: 39 }, },
      { type: 'summonSquare', position: { x: 74, y: 54 }, },
      { type: 'square', position: { x: 75, y: 146 }, },
    ],
    initiative: 90,
  },
  {
    level: 1,
    name: 'snowball',
    actions: { top: 'discard', bottom: 'activeLost' },
    slots: [
      { x: 29, y: 155 },
      { x: 58, y: 155 },
      { x: 88, y: 155 },
      { x: 44, y: 178 },
      { x: 74, y: 178 },
    ],
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 63, y: 52 }, },
    ],
    initiative: 23,
  },
  {
    level: 1,
    name: 'whiteout',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 56, y: 37 }, },
      { type: 'square', position: { x: 87, y: 37 }, },
      { type: 'square', position: { x: 89, y: 167 }, },
    ],
    initiative: 21,
  },
  {
    level: 2,
    name: 'birds in a tempest',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 65, y: 46 }, },
      { type: 'summonSquare', position: { x: 99, y: 46 }, },
      { type: 'summonSquare', position: { x: 65, y: 61 }, },
      { type: 'square', position: { x: 89, y: 138 }, },
    ],
    initiative: 18,
  },
  {
    level: 2,
    name: 'tornado',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 48, y: 34 }, },
      { type: 'square', position: { x: 74, y: 133 }, },
    ],
    initiative: 59,
  },
  {
    level: 3,
    name: 'cold snap',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 53, y: 149 }, },
    ],
    initiative: 86,
  },
  {
    level: 3,
    name: 'polar vortex',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'circle', position: { x: 52, y: 60 }, },
      { type: 'diamond', position: { x: 66, y: 136 }, },
    ],
    initiative: 61,
  },
  {
    level: 4,
    name: 'biting frost',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 45 }, },
      { type: 'diamond', position: { x: 90, y: 61 }, },
      { type: 'circle', position: { x: 90, y: 140 }, },
    ],
    initiative: 16,
  },
  {
    level: 4,
    name: 'zephyr barrier',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'square', position: { x: 58, y: 48 }, },
    ],
    initiative: 40,
  },
  {
    level: 5,
    name: 'shifting snow',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 134 }, },
    ],
    initiative: 17,
  },
  {
    level: 5,
    name: 'whipping gale',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'square', position: { x: 47, y: 53 }, },
      { type: 'square', position: { x: 112, y: 53 }, },
    ],
    initiative: 79,
  },
  {
    level: 6,
    name: 'frozen brand',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 74, y: 146 }, },
    ],
    initiative: 33,
  },
  {
    level: 6,
    name: 'refreshing flurry',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 63, y: 40 }, },
      { type: 'summonSquare', position: { x: 66, y: 143 }, },
      { type: 'summonSquare', position: { x: 99, y: 143 }, },
      { type: 'summonSquare', position: { x: 66, y: 158 }, },
    ],
    initiative: 95,
  },
  {
    level: 7,
    name: 'freezing storm',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 39 }, },
      { type: 'circle', position: { x: 90, y: 128 }, },
    ],
    initiative: 81,
  },
  {
    level: 7,
    name: 'storm wall',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 30,
  },
  {
    level: 8,
    name: 'surging blow',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 70, y: 38 }, },
      { type: 'square', position: { x: 107, y: 38 }, },
      { type: 'square', position: { x: 70, y: 63 }, },
      { type: 'square', position: { x: 107, y: 63 }, },
      { type: 'diamondPlus', position: { x: 40, y: 150 }, },
    ],
    initiative: 73,
  },
  {
    level: 8,
    name: 'the endless white',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 147 }, },
    ],
    initiative: 5,
  },
  {
    level: 9,
    name: 'snowblind',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 44, y: 50 }, },
    ],
    initiative: 83,
  },
  {
    level: 9,
    name: 'winds of change',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 57, y: 34 }, },
      { type: 'square', position: { x: 87, y: 34 }, },
      { type: 'circle', position: { x: 90, y: 127 }, },
    ],
    initiative: 15,
  },
], snowdancerPath);
