import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const hivePath = '/hive/abilities';

export const hiveCards: Card[] = createCards([
  {
    level: 'X',
    name: 'reassemble',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 172 } },
    ],
  },
  {
    level: 'X',
    name: 'remote control',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
  },
  {
    level: 'X',
    name: 'shocking pulse',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 61, y: 39 } },
      { type: 'summonSquare', position: { x: 94, y: 39 } },
    ],
  },
  {
    level: 1,
    name: 'aimed assault',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 71, y: 38 } },
      { type: 'summonSquare', position: { x: 115, y: 53 } },
      { type: 'square', position: { x: 91, y: 152 } },
    ],
  },
  {
    level: 1,
    name: 'coiled limbs',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 56, y: 39 } },
      { type: 'summonSquare', position: { x: 56, y: 58 } },
      { type: 'circle', position: { x: 74, y: 151 } },
    ],
  },
  {
    level: 1,
    name: 'faceless entity',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
  },
  {
    level: 1,
    name: 'high impact projectiles',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 81, y: 58 } },
      { type: 'square', position: { x: 73, y: 158 } },
    ],
  },
  {
    level: 1,
    name: 'prepare for deployment',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 59 } },
      { type: 'square', position: { x: 92, y: 152 } },
    ],
  },
  {
    level: 1,
    name: 'reaper function',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'hex', position: { x: 83, y: 45, size: 14 } },
    ],
  },
  {
    level: 1,
    name: 'reconstructive aid',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 63, y: 37 } },
      { type: 'summonSquare', position: { x: 95, y: 37 } },
      { type: 'summonSquare', position: { x: 95, y: 53 } },
      { type: 'circle', position: { x: 63, y: 151 } },
    ],
  },
  {
    level: 1,
    name: 'launch pod',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 38 } },
      { type: 'circle', position: { x: 70, y: 165 } },
    ],
  },
  {
    level: 1,
    name: 'hunter killer',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 67, y: 37 } },
      { type: 'summonSquare', position: { x: 100, y: 37 } },
      { type: 'summonSquare', position: { x: 67, y: 52 } },
      { type: 'circle', position: { x: 91, y: 143 } },
      { type: 'square', position: { x: 91, y: 166 } },
    ],
  },
  {
    level: 1,
    name: 'interference',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 71, y: 58 } },
      { type: 'circle', position: { x: 91, y: 130 } },
    ],
  },
  {
    level: 1,
    name: 'plated defense',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 68, y: 39 } },
      { type: 'summonSquare', position: { x: 100, y: 39 } },
      { type: 'summonSquare', position: { x: 68, y: 54 } },
      { type: 'square', position: { x: 89, y: 142 } },
      { type: 'square', position: { x: 89, y: 165 } },
    ],
  },
  {
    level: 2,
    name: 'force field',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 67, y: 41 } },
      { type: 'summonSquare', position: { x: 98, y: 41 } },
      { type: 'summonSquare', position: { x: 98, y: 56 } },
      { type: 'circle', position: { x: 90, y: 152 } },
    ],
  },
  {
    level: 2,
    name: 'long range missile',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
  },
  {
    level: 3,
    name: 'hijack',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
  },
  {
    level: 3,
    name: 'rapid fire',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 67, y: 39 } },
      { type: 'circle', position: { x: 91, y: 137 } },
      { type: 'square', position: { x: 91, y: 172 } },
    ],
  },
  {
    level: 4,
    name: 'divergent destruction',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 153 } },
    ],
  },
  {
    level: 4,
    name: 'plague protocol',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 68, y: 40 } },
      { type: 'summonSquare', position: { x: 99, y: 40 } },
      { type: 'summonSquare', position: { x: 68, y: 55 } },
      { type: 'circle', position: { x: 90, y: 133 } },
    ],
  },
  {
    level: 5,
    name: 'code geminate',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 138 } },
      { type: 'square', position: { x: 91, y: 171 } },
    ],
  },
  {
    level: 5,
    name: 'net dispersal',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 59, y: 39 } },
      { type: 'summonSquare', position: { x: 59, y: 61 } },
    ],
  },
  {
    level: 6,
    name: 'spinning blades',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 63, y: 39 } },
      { type: 'summonSquare', position: { x: 95, y: 39 } },
      { type: 'summonSquare', position: { x: 63, y: 57 } },
      { type: 'circle', position: { x: 91, y: 141 } },
    ],
  },
  {
    level: 6,
    name: 'triage program',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 70, y: 58 } },
      { type: 'circle', position: { x: 70, y: 177 } },
    ],
  },
  {
    level: 7,
    name: 'mortar shells',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 64, y: 37 } },
      { type: 'summonSquare', position: { x: 97, y: 52 } },
      { type: 'square', position: { x: 90, y: 152 } },
    ],
  },
  {
    level: 7,
    name: 'recall',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
  },
  {
    level: 8,
    name: 'burning slash',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'hex', position: { x: 86, y: 43, size: 14 } },
      { type: 'circle', position: { x: 90, y: 154 } },
    ],
  },
  {
    level: 8,
    name: 'swarming bulwark',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 63, y: 39 } },
      { type: 'summonSquare', position: { x: 96, y: 39 } },
      { type: 'summonSquare', position: { x: 63, y: 54 } },
      { type: 'square', position: { x: 91, y: 133 } },
      { type: 'square', position: { x: 91, y: 176 } },
    ],
  },
  {
    level: 9,
    name: 'disassemble',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 60 } },
    ],
  },
  {
    level: 9,
    name: 'heavy metal',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 65, y: 37 } },
      { type: 'summonSquare', position: { x: 98, y: 37 } },
      { type: 'summonSquare', position: { x: 65, y: 52 } },
      { type: 'circle', position: { x: 90, y: 132 } },
    ],
  },
], hivePath);
