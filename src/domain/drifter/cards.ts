import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const drifterPath = '/drifter/abilities';

export const drifterCards: Card[] = createCards([
  {
    level: 'X',
    name: 'destructive fury',
    actions: { top: CardActions.lose, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'diamond', position: { x: 55, y: 58 } },
      { type: 'diamond', position: { x: 49, y: 151 } },
    ],
    initiative: 19,
  },
  {
    level: 'X',
    name: 'fortitude',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 70, y: 34 } },
    ],
    initiative: 31,
  },
  {
    level: 'X',
    name: 'no remorse',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'diamond', position: { x: 69, y: 59 } },
      { type: 'square', position: { x: 90, y: 134 } },
      { type: 'diamond', position: { x: 90, y: 155 } },
      { type: 'square', position: { x: 90, y: 176 } },
    ],
    initiative: 20,
  },
  {
    level: 1,
    name: 'bloodletting',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 40 } },
      { type: 'square', position: { x: 72, y: 151 } },
    ],
    initiative: 65,
  },
  {
    level: 1,
    name: 'continuous health',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 42, y: 145 },
      { x: 71, y: 145 },
      { x: 100, y: 145 },
      { x: 34, y: 169 },
      { x: 64, y: 169 },
      { x: 93, y: 169 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 42 } },
    ],
    initiative: 61,
  },
  {
    level: 1,
    name: 'crushing weight',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 42, y: 54 },
      { x: 72, y: 54 },
      { x: 101, y: 54 },
      { x: 34, y: 78 },
      { x: 64, y: 78 },
      { x: 93, y: 78 },
    ],
    availableEnhancements: [
      { type: 'square', position: { x: 70, y: 137 } },
    ],
    initiative: 71,
  },
  {
    level: 1,
    name: 'deadly shot',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 64, y: 62 } },
    ],
    initiative: 32,
  },
  {
    level: 1,
    name: 'draining arrows',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 57, y: 62 } },
    ],
    initiative: 23,
  },
  {
    level: 1,
    name: 'precision aim',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 42, y: 54 },
      { x: 72, y: 54 },
      { x: 101, y: 54 },
      { x: 34, y: 79 },
      { x: 64, y: 79 },
      { x: 93, y: 79 },
    ],
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 138 } },
    ],
    initiative: 66,
  },
  {
    level: 1,
    name: 'prudent preparation',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 45 } },
      { type: 'diamond', position: { x: 89, y: 69 } },
      { type: 'circle', position: { x: 69, y: 151 } },
    ],
    initiative: 14,
  },
  {
    level: 1,
    name: 'relentless',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 154 },
      { x: 67, y: 154 },
      { x: 96, y: 154 },
      { x: 30, y: 178 },
      { x: 60, y: 178 },
      { x: 89, y: 178 },
    ],
    initiative: 89,
  },
  {
    level: 1,
    name: 'sustained momentum',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 42, y: 148 },
      { x: 71, y: 148 },
      { x: 100, y: 148 },
      { x: 34, y: 172 },
      { x: 64, y: 172 },
      { x: 93, y: 172 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 43 } },
    ],
    initiative: 76,
  },
  {
    level: 1,
    name: 'unbreakable',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 42, y: 148 },
      { x: 71, y: 148 },
      { x: 100, y: 148 },
      { x: 34, y: 172 },
      { x: 64, y: 172 },
      { x: 93, y: 172 },
    ],
    initiative: 90,
  },
  {
    level: 1,
    name: 'vile assault',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 45 } },
      { type: 'diamond', position: { x: 73, y: 69 } },
      { type: 'circle', position: { x: 89, y: 141 } },
    ],
    initiative: 27,
  },
  {
    level: 1,
    name: 'violent inheritance',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 45 } },
      { type: 'circle', position: { x: 89, y: 140 } },
    ],
    initiative: 70,
  },
  {
    level: 2,
    name: 'ever forward',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 68, y: 72 } },
      { type: 'circle', position: { x: 63, y: 152 } },
    ],
    initiative: 67,
  },
  {
    level: 2,
    name: 'shockwave',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    slots: [
      { x: 39, y: 58 },
      { x: 69, y: 58 },
      { x: 98, y: 58 },
      { x: 31, y: 83 },
      { x: 61, y: 83 },
      { x: 90, y: 83 },
    ],
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 167 } },
    ],
    initiative: 17,
  },
  {
    level: 3,
    name: 'dual bow',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 66, y: 60 } },
    ],
    initiative: 26,
  },
  {
    level: 3,
    name: 'fierce barrage',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 148 },
      { x: 67, y: 148 },
      { x: 96, y: 148 },
      { x: 30, y: 172 },
      { x: 60, y: 172 },
      { x: 89, y: 172 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 65, y: 58 } },
    ],
    initiative: 32,
  },
  {
    level: 4,
    name: 'chunk of flesh',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 148 },
      { x: 67, y: 148 },
      { x: 96, y: 148 },
      { x: 30, y: 172 },
      { x: 60, y: 172 },
      { x: 89, y: 172 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 35 } },
      { type: 'diamondPlus', position: { x: 69, y: 59 } },
    ],
    initiative: 62,
  },
  {
    level: 4,
    name: 'gift of the prey',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 40 } },
      { type: 'circle', position: { x: 91, y: 138 } },
    ],
    initiative: 40,
  },
  {
    level: 5,
    name: 'break through',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 135 } },
    ],
    initiative: 34,
  },
  {
    level: 5,
    name: 'survivalist',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 42, y: 54 },
      { x: 72, y: 54 },
      { x: 101, y: 54 },
      { x: 34, y: 79 },
      { x: 64, y: 79 },
      { x: 93, y: 79 },
    ],
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 128 } },
    ],
    initiative: 91,
  },
  {
    level: 6,
    name: 'accurate strikes',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    slots: [
      { x: 42, y: 58 },
      { x: 72, y: 58 },
      { x: 101, y: 58 },
      { x: 34, y: 82 },
      { x: 64, y: 82 },
      { x: 93, y: 82 },
    ],
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 138 } },
    ],
    initiative: 56,
  },
  {
    level: 6,
    name: 'consume stamina',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'square', position: { x: 72, y: 38 } },
      { type: 'circle', position: { x: 89, y: 143 } },
    ],
    initiative: 21,
  },
  {
    level: 7,
    name: 'like the wind',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 41, y: 58 },
      { x: 71, y: 58 },
      { x: 100, y: 58 },
      { x: 34, y: 82 },
      { x: 64, y: 82 },
      { x: 93, y: 82 },
    ],
    initiative: 77,
  },
  {
    level: 7,
    name: 'unending fight',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 39 } },
      { type: 'diamond', position: { x: 90, y: 81 } },
    ],
    initiative: 25,
  },
  {
    level: 8,
    name: 'against all odds',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 150 },
      { x: 67, y: 150 },
      { x: 96, y: 150 },
      { x: 30, y: 174 },
      { x: 60, y: 174 },
      { x: 89, y: 174 },
    ],
    initiative: 37,
  },
  {
    level: 8,
    name: 'inevitable conclusion',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 49, y: 31 } },
      { type: 'diamond', position: { x: 73, y: 152 } },
    ],
    initiative: 29,
  },
  {
    level: 9,
    name: 'everlasting',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 25, y: 67 },
      { x: 54, y: 67 },
      { x: 84, y: 67 },
      { x: 114, y: 67 },
    ],
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 56, y: 131 } },
    ],
    initiative: 96,
  },
  {
    level: 9,
    name: 'use every part',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 41 } },
    ],
    initiative: 18,
  },
], drifterPath);
