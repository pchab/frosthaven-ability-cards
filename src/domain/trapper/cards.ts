import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const trapperPath = '/trapper/abilities';

export const trapperCards: Card[] = createCards([
  {
    level: 'X',
    name: 'dismantle',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 50 } },
    ],
    initiative: 72,
  },
  {
    level: 'X',
    name: 'improvised improvement',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 66, y: 59 } },
      { type: 'circle', position: { x: 91, y: 138 } },
    ],
    initiative: 58,
  },
  {
    level: 'X',
    name: 'spring loaded',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    initiative: 15,
  },
  {
    level: 1,
    name: 'boar catcher',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 79, y: 50 } },
      { type: 'circle', position: { x: 73, y: 153 } },
    ],
    initiative: 20,
  },
  {
    level: 1,
    name: 'caltrops',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 96, y: 61 } },
      { type: 'circle', position: { x: 89, y: 152 } },
    ],
    initiative: 25,
  },
  {
    level: 1,
    name: 'electrified net',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 53,
  },
  {
    level: 1,
    name: 'enticing bait',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 86, y: 54 } },
    ],
    initiative: 30,
  },
  {
    level: 1,
    name: 'exploding decoy',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 45, y: 61 } },
      { type: 'square', position: { x: 78, y: 61 } },
      { type: 'square', position: { x: 115, y: 61 } },
      { type: 'circle', position: { x: 89, y: 148 } },
    ],
    initiative: 62,
  },
  {
    level: 1,
    name: 'flurry of nails',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 61, y: 59 } },
      { type: 'square', position: { x: 99, y: 59 } },
      { type: 'circle', position: { x: 73, y: 141 } },
    ],
    initiative: 68,
  },
  {
    level: 1,
    name: 'furry facade',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 66, y: 137 } },
    ],
    initiative: 85,
  },
  {
    level: 1,
    name: 'honeypot',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 140 } },
    ],
    initiative: 18,
  },
  {
    level: 1,
    name: 'spike pit',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 76, y: 52 } },
    ],
    initiative: 47,
  },
  {
    level: 2,
    name: 'path of pain',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 47 } },
      { type: 'square', position: { x: 99, y: 47 } },
      { type: 'circle', position: { x: 90, y: 154 } },
    ],
    initiative: 38,
  },
  {
    level: 2,
    name: 'unavoidable outcome',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    slots: [
      { x: 71, y: 174 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 50 } },
    ],
    initiative: 45,
  },
  {
    level: 3,
    name: 'extra teeth',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 79, y: 51 } },
      { type: 'circle', position: { x: 90, y: 128 } },
    ],
    initiative: 22,
  },
  {
    level: 3,
    name: 'pyrotechnics',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 78, y: 55 } },
      { type: 'circle', position: { x: 89, y: 135 } },
    ],
    initiative: 80,
  },
  {
    level: 4,
    name: 'dangerous ground',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 96, y: 61 } },
    ],
    initiative: 31,
  },
  {
    level: 4,
    name: 'stalkers spoils',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 96, y: 60 } },
    ],
    initiative: 10,
  },
  {
    level: 5,
    name: 'lure of the snare',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 44, y: 59 } },
      { type: 'square', position: { x: 78, y: 59 } },
      { type: 'square', position: { x: 115, y: 59 } },
      { type: 'square', position: { x: 74, y: 162 } },
    ],
    initiative: 59,
  },
  {
    level: 5,
    name: 'proficient hunter',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 139 } },
    ],
    initiative: 26,
  },
  {
    level: 6,
    name: 'cage of thorns',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 51 } },
      { type: 'square', position: { x: 98, y: 51 } },
      { type: 'circle', position: { x: 89, y: 134 } },
    ],
    initiative: 55,
  },
  {
    level: 6,
    name: 'persistent pitfalls',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 69, y: 60 } },
    ],
    initiative: 13,
  },
  {
    level: 7,
    name: 'foxhole',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'square', position: { x: 80, y: 48 } },
    ],
    initiative: 90,
  },
  {
    level: 7,
    name: 'grasping hazards',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 175 } },
    ],
    initiative: 8,
  },
  {
    level: 8,
    name: 'magnetic shards',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 48, y: 61 } },
      { type: 'square', position: { x: 113, y: 61 } },
      { type: 'square', position: { x: 69, y: 144 } },
    ],
    initiative: 37,
  },
  {
    level: 8,
    name: 'spike strip',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 142 } },
    ],
    initiative: 67,
  },
  {
    level: 9,
    name: 'dangerous cargo',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 146 } },
    ],
    initiative: 23,
  },
  {
    level: 9,
    name: 'mother of all traps',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 50, y: 57 } },
      { type: 'square', position: { x: 90, y: 136 } },
    ],
    initiative: 86,
  },
], trapperPath);
