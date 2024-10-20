import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const snowdancerPath = '/snowdancer/abilities';

export const snowdancerCards: Card[] = createCards([
  {
    level: 'X',
    name: 'blinding vortex',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 36 }, },
      { type: 'hex', position: { x: 110, y: 75, size: 15 }, },
      { type: 'circle', position: { x: 74, y: 152 }, },
    ],
  },
  {
    level: 'X',
    name: 'the spirits call',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'diamond', position: { x: 72, y: 48 }, },
      { type: 'square', position: { x: 52, y: 144 }, },
    ],
  },
  {
    level: 'X',
    name: 'white winds',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'hex', position: { x: 111, y: 41.5, size: 14 }, },
      { type: 'hex', position: { x: 97, y: 66, size: 14 }, },
      { type: 'square', position: { x: 61, y: 132 }, },
      { type: 'square', position: { x: 96, y: 132 }, },
    ],
  },
  {
    level: 1,
    name: 'blizzard',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 65, y: 28 }, },
      { type: 'circle', position: { x: 90, y: 141 }, },
    ],
  },
  {
    level: 1,
    name: 'chilling impact',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 141 }, },
    ],
  },
  {
    level: 1,
    name: 'cold therapy',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 65, y: 50 }, },
    ],
  },
  {
    level: 1,
    name: 'cross winds',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 58 }, },
      { type: 'square', position: { x: 89, y: 76 }, },
      { type: 'square', position: { x: 89, y: 166 }, },
    ],
  },
  {
    level: 1,
    name: 'enticing breeze',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 62, y: 44 }, },
      { type: 'square', position: { x: 72, y: 130 }, },
    ],
  },
  {
    level: 1,
    name: 'frigid growth',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 74, y: 147 }, },
    ],
  },
  {
    level: 1,
    name: 'gathering force',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
  },
  {
    level: 1,
    name: 'lifting gust',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 53 }, },
      { type: 'circle', position: { x: 75, y: 145 }, },
    ],
  },
  {
    level: 1,
    name: 'natures breath',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 74, y: 39 }, },
      { type: 'summonSquare', position: { x: 116, y: 39 }, },
      { type: 'summonSquare', position: { x: 74, y: 54 }, },
      { type: 'square', position: { x: 75, y: 146 }, },
    ],
  },
  {
    level: 1,
    name: 'snowball',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
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
  },
  {
    level: 1,
    name: 'whiteout',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 56, y: 37 }, },
      { type: 'square', position: { x: 87, y: 37 }, },
      { type: 'square', position: { x: 89, y: 167 }, },
    ],
  },
  {
    level: 2,
    name: 'birds in a tempest',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 65, y: 46 }, },
      { type: 'summonSquare', position: { x: 99, y: 46 }, },
      { type: 'summonSquare', position: { x: 65, y: 61 }, },
      { type: 'square', position: { x: 89, y: 138 }, },
    ],
  },
  {
    level: 2,
    name: 'tornado',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 48, y: 34 }, },
      { type: 'square', position: { x: 74, y: 133 }, },
    ],
  },
  {
    level: 3,
    name: 'cold snap',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 53, y: 149 }, },
    ],
  },
  {
    level: 3,
    name: 'polar vortex',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'circle', position: { x: 52, y: 60 }, },
      { type: 'diamond', position: { x: 66, y: 136 }, },
    ],
  },
  {
    level: 4,
    name: 'biting frost',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 45 }, },
      { type: 'diamond', position: { x: 90, y: 61 }, },
      { type: 'circle', position: { x: 90, y: 140 }, },
    ],
  },
  {
    level: 4,
    name: 'zephyr barrier',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'square', position: { x: 58, y: 48 }, },
    ],
  },
  {
    level: 5,
    name: 'shifting snow',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 134 }, },
    ],
  },
  {
    level: 5,
    name: 'whipping gale',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'square', position: { x: 47, y: 53 }, },
      { type: 'square', position: { x: 112, y: 53 }, },
    ],
  },
  {
    level: 6,
    name: 'frozen brand',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 74, y: 146 }, },
    ],
  },
  {
    level: 6,
    name: 'refreshing flurry',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 63, y: 40 }, },
      { type: 'summonSquare', position: { x: 66, y: 143 }, },
      { type: 'summonSquare', position: { x: 99, y: 143 }, },
      { type: 'summonSquare', position: { x: 66, y: 158 }, },
    ],
  },
  {
    level: 7,
    name: 'freezing storm',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 39 }, },
      { type: 'circle', position: { x: 90, y: 128 }, },
    ],
  },
  {
    level: 7,
    name: 'storm wall',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
  },
  {
    level: 8,
    name: 'surging blow',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 70, y: 38 }, },
      { type: 'square', position: { x: 107, y: 38 }, },
      { type: 'square', position: { x: 70, y: 63 }, },
      { type: 'square', position: { x: 107, y: 63 }, },
      { type: 'diamondPlus', position: { x: 40, y: 150 }, },
    ],
  },
  {
    level: 8,
    name: 'the endless white',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 147 }, },
    ],
  },
  {
    level: 9,
    name: 'snowblind',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 44, y: 50 }, },
    ],
  },
  {
    level: 9,
    name: 'winds of change',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 57, y: 34 }, },
      { type: 'square', position: { x: 87, y: 34 }, },
      { type: 'circle', position: { x: 90, y: 127 }, },
    ],
  },
], snowdancerPath);
