import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const trapperPath = '/trapper/abilities';

export const trapperCards: Card[] = createCards([
  {
    level: 'X',
    name: 'dismantle',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 50 } },
    ],
  },
  {
    level: 'X',
    name: 'improvised improvement',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 66, y: 59 } },
      { type: 'circle', position: { x: 91, y: 138 } },
    ],
  },
  {
    level: 'X',
    name: 'spring loaded',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
  },
  {
    level: 1,
    name: 'boar catcher',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 79, y: 50 } },
      { type: 'circle', position: { x: 73, y: 153 } },
    ],
  },
  {
    level: 1,
    name: 'caltrops',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 96, y: 61 } },
      { type: 'circle', position: { x: 89, y: 152 } },
    ],
  },
  {
    level: 1,
    name: 'electrified net',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
  },
  {
    level: 1,
    name: 'enticing bait',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 86, y: 54 } },
    ],
  },
  {
    level: 1,
    name: 'exploding decoy',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 45, y: 61 } },
      { type: 'square', position: { x: 78, y: 61 } },
      { type: 'square', position: { x: 115, y: 61 } },
      { type: 'circle', position: { x: 89, y: 148 } },
    ],
  },
  {
    level: 1,
    name: 'flurry of nails',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 61, y: 59 } },
      { type: 'square', position: { x: 99, y: 59 } },
      { type: 'circle', position: { x: 73, y: 141 } },
    ],
  },
  {
    level: 1,
    name: 'furry facade',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 66, y: 137 } },
    ],
  },
  {
    level: 1,
    name: 'honeypot',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 140 } },
    ],
  },
  {
    level: 1,
    name: 'spike pit',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 76, y: 52 } },
    ],
  },
  {
    level: 2,
    name: 'path of pain',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 47 } },
      { type: 'square', position: { x: 99, y: 47 } },
      { type: 'circle', position: { x: 90, y: 154 } },
    ],
  },
  {
    level: 2,
    name: 'unavoidable outcome',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    slots: [
      { x: 71, y: 174 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 50 } },
    ],
  },
  {
    level: 3,
    name: 'extra teeth',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 79, y: 51 } },
      { type: 'circle', position: { x: 90, y: 128 } },
    ],
  },
  {
    level: 3,
    name: 'pyrotechnics',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'square', position: { x: 78, y: 55 } },
      { type: 'circle', position: { x: 89, y: 135 } },
    ],
  },
  {
    level: 4,
    name: 'dangerous ground',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 96, y: 61 } },
    ],
  },
  {
    level: 4,
    name: 'stalkers spoils',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 96, y: 60 } },
    ],
  },
  {
    level: 5,
    name: 'lure of the snare',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 44, y: 59 } },
      { type: 'square', position: { x: 78, y: 59 } },
      { type: 'square', position: { x: 115, y: 59 } },
      { type: 'square', position: { x: 74, y: 162 } },
    ],
  },
  {
    level: 5,
    name: 'proficient hunter',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 139 } },
    ],
  },
  {
    level: 6,
    name: 'cage of thorns',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 51 } },
      { type: 'square', position: { x: 98, y: 51 } },
      { type: 'circle', position: { x: 89, y: 134 } },
    ],
  },
  {
    level: 6,
    name: 'persistent pitfalls',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'square', position: { x: 69, y: 60 } },
    ],
  },
  {
    level: 7,
    name: 'foxhole',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'square', position: { x: 80, y: 48 } },
    ],
  },
  {
    level: 7,
    name: 'grasping hazards',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 175 } },
    ],
  },
  {
    level: 8,
    name: 'magnetic shards',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 48, y: 61 } },
      { type: 'square', position: { x: 113, y: 61 } },
      { type: 'square', position: { x: 69, y: 144 } },
    ],
  },
  {
    level: 8,
    name: 'spike strip',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 142 } },
    ],
  },
  {
    level: 9,
    name: 'dangerous cargo',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 146 } },
    ],
  },
  {
    level: 9,
    name: 'mother of all traps',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 50, y: 57 } },
      { type: 'square', position: { x: 90, y: 136 } },
    ],
  },
], trapperPath);
