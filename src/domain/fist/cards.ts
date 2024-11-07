import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const fistPath = '/fist/abilities';

export const fistCards: Card[] = createCards([
  {
    level: 'X',
    name: 'freezing shell',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 134 } },
    ],
    initiative: 17,
  },
  {
    level: 'X',
    name: 'primal bellow',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    initiative: 84,
  },
  {
    level: 'X',
    name: 'shard launch',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 95, y: 50 } },
    ],
    initiative: 52,
  },
  {
    level: 1,
    name: 'cold boulder',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 143 } },
    ],
    initiative: 70,
  },
  {
    level: 1,
    name: 'encased punch',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 19,
  },
  {
    level: 1,
    name: 'frost eruption',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    initiative: 61,
  },
  {
    level: 1,
    name: 'fury of the mountain',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 132 } },
    ],
    initiative: 23,
  },
  {
    level: 1,
    name: 'ice blast',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 56, y: 52 } },
      { type: 'square', position: { x: 91, y: 139 } },
    ],
    initiative: 32,
  },
  {
    level: 1,
    name: 'one with the mountain',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 63, y: 143 } },
    ],
    initiative: 83,
  },
  {
    level: 1,
    name: 'piercing pummel',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'circle', position: { x: 73, y: 123 } },
      { type: 'diamond', position: { x: 64, y: 138 } },
      { type: 'diamondPlus', position: { x: 71, y: 154 } },
    ],
    initiative: 30,
  },
  {
    level: 1,
    name: 'voice from below',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 22,
  },
  {
    level: 2,
    name: 'crushing crystals',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 162 } },
    ],
    initiative: 67,
  },
  {
    level: 2,
    name: 'draw of the bedrock',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 29 } },
      { type: 'square', position: { x: 65, y: 129 } },
      { type: 'square', position: { x: 98, y: 129 } },
    ],
    initiative: 10,
  },
  {
    level: 3,
    name: 'frozen over',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 71, y: 84 } },
    ],
    initiative: 20,
  },
  {
    level: 3,
    name: 'lacerating eruption',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 146 } },
    ],
    initiative: 51,
  },
  {
    level: 4,
    name: 'packed solid',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 133 } },
      { type: 'square', position: { x: 89, y: 158 } },
    ],
    initiative: 55,
  },
  {
    level: 4,
    name: 'the mountains fist',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 26 } },
      { type: 'square', position: { x: 91, y: 142 } },
    ],
    initiative: 16,
  },
  {
    level: 5,
    name: 'ice uppercut',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 37 } },
      { type: 'square', position: { x: 91, y: 141 } },
    ],
    initiative: 15,
  },
  {
    level: 5,
    name: 'preserved fury',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 50 } },
    ],
    initiative: 49,
  },
  {
    level: 6,
    name: 'glacier slam',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 88, y: 135 } },
    ],
    initiative: 84,
  },
  {
    level: 6,
    name: 'thick frost',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 70, y: 35 } },
      { type: 'square', position: { x: 88, y: 127 } },
    ],
    initiative: 21,
  },
  {
    level: 7,
    name: 'gift of the mountain',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 134 } },
    ],
    initiative: 73,
  },
  {
    level: 7,
    name: 'seeing stars',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 64, y: 52 } },
      { type: 'circle', position: { x: 73, y: 141 } },
      { type: 'square', position: { x: 73, y: 167 } },
    ],
    initiative: 29,
  },
  {
    level: 8,
    name: 'draw strength',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 40 } },
    ],
    initiative: 28,
  },
  {
    level: 8,
    name: 'shattering blow',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 62 } },
      { type: 'circle', position: { x: 88, y: 125 } },
      { type: 'square', position: { x: 70, y: 165 } },
    ],
    initiative: 18,
  },
  {
    level: 9,
    name: 'bring down the mountain',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'square', position: { x: 38, y: 48 } },
      { type: 'square', position: { x: 89, y: 127 } },
      { type: 'square', position: { x: 89, y: 145 } },
    ],
    initiative: 9,
  },
  {
    level: 9,
    name: 'frozen spike',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 40, y: 29 } },
      { type: 'circle', position: { x: 90, y: 132 } },
    ],
    initiative: 33,
  },
], fistPath);
