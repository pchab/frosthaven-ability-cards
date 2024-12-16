import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const deepwraithPath = '/deepwraith/abilities';

export const deepwraithCards: Card[] = createCards([
  {
    level: 'X',
    name: 'haunting brutality',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 45 } },
      { type: 'circle', position: { x: 90, y: 136 } },
    ],
    initiative: 23,
  },
  {
    level: 'X',
    name: 'morbid camouflage',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 49 } },
      { type: 'square', position: { x: 91, y: 144 } },
    ],
    initiative: 31,
  },
  {
    level: 'X',
    name: 'soul hunger',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 69, y: 67 } },
    ],
    initiative: 91,
  },
  {
    level: 1,
    name: 'black scythe',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 50 } },
    ],
    initiative: 45,
  },
  {
    level: 1,
    name: 'hollow aura',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 53 } },
      { type: 'square', position: { x: 91, y: 141 } },
    ],
    initiative: 88,
  },
  {
    level: 1,
    name: 'ink cloud',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 47, y: 53 } },
    ],
    initiative: 28,
  },
  {
    level: 1,
    name: 'lacerating stabs',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 99, y: 26 } },
      { type: 'diamond', position: { x: 99, y: 41 } },
      { type: 'diamond', position: { x: 99, y: 71 } },
      { type: 'square', position: { x: 90, y: 139 } },
    ],
    initiative: 14,
  },
  {
    level: 1,
    name: 'mantle of dread',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'circle', position: { x: 62, y: 48 } },
    ],
    initiative: 96,
  },
  {
    level: 1,
    name: 'skewer the flesh',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 72, y: 43 } },
      { type: 'square', position: { x: 72, y: 75 } },
      { type: 'square', position: { x: 90, y: 138 } },
    ],
    initiative: 86,
  },
  {
    level: 1,
    name: 'skull collection',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 152 } },
    ],
    initiative: 22,
  },
  {
    level: 1,
    name: 'staring into the abyss',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 140 } },
    ],
    initiative: 63,
  },
  {
    level: 1,
    name: 'succumb to fear',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 141 } },
    ],
    initiative: 20,
  },
  {
    level: 1,
    name: 'tumultuous panic',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 36 } },
      { type: 'square', position: { x: 90, y: 59 } },
      { type: 'diamond', position: { x: 90, y: 83 } },
      { type: 'circle', position: { x: 89, y: 125 } },
      { type: 'square', position: { x: 89, y: 162 } },
    ],
    initiative: 66,
  },
  {
    level: 2,
    name: 'lie in wait',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 140 } },
    ],
    initiative: 98,
  },
  {
    level: 2,
    name: 'slipping into death',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 29 } },
      { type: 'square', position: { x: 91, y: 136 } },
    ],
    initiative: 89,
  },
  {
    level: 3,
    name: 'crippling terror',
    actions: { top: 'lose', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 39 } },
      { type: 'square', position: { x: 89, y: 130 } },
    ],
    initiative: 15,
  },
  {
    level: 3,
    name: 'pinning spines',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'circle', position: { x: 73, y: 45 } },
      { type: 'circle', position: { x: 73, y: 72 } },
    ],
    initiative: 25,
  },
  {
    level: 4,
    name: 'crushing darkness',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 47 } },
    ],
    initiative: 40,
  },
  {
    level: 4,
    name: 'grim trophies',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 18,
  },
  {
    level: 5,
    name: 'death spiral',
    actions: { top: 'activeDiscard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 173 } },
    ],
    initiative: 48,
  },
  {
    level: 5,
    name: 'extra decoration',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 91, y: 38 } },
      { type: 'circle', position: { x: 91, y: 135 } },
    ],
    initiative: 92,
  },
  {
    level: 6,
    name: 'claw of doom',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 73, y: 54 } },
      { type: 'circle', position: { x: 90, y: 152 } },
    ],
    initiative: 18,
  },
  {
    level: 6,
    name: 'the remorseless deep',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 138 } },
    ],
    initiative: 30,
  },
  {
    level: 7,
    name: 'dire frenzy',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 58 } },
      { type: 'diamond', position: { x: 91, y: 91 } },
      { type: 'circle', position: { x: 90, y: 134 } },
    ],
    initiative: 26,
  },
  {
    level: 7,
    name: 'hasten the end',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 129 } },
    ],
    initiative: 65,
  },
  {
    level: 8,
    name: 'rip from the bone',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 58, y: 45 } },
      { type: 'square', position: { x: 91, y: 139 } },
    ],
    initiative: 11,
  },
  {
    level: 8,
    name: 'unseen horror',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 91, y: 37 } },
    ],
    initiative: 19,
  },
  {
    level: 9,
    name: 'black night of the deep',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 58, y: 69 } },
      { type: 'circle', position: { x: 90, y: 134 } },
    ],
    initiative: 26,
  },
  {
    level: 9,
    name: 'consume the helpless',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 44, y: 57 } },
    ],
    initiative: 12,
  },
], deepwraithPath);
