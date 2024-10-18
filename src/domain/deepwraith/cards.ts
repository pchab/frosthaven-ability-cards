import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const deepwraithPath = '/deepwraith/abilities';

export const deepwraithCards: Card[] = createCards([
  {
    level: 'X',
    name: 'haunting brutality',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 45 } },
      { type: 'circle', position: { x: 90, y: 136 } },
    ],
  },
  {
    level: 'X',
    name: 'morbid camouflage',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 49 } },
      { type: 'square', position: { x: 91, y: 144 } },
    ],
  },
  {
    level: 'X',
    name: 'soul hunger',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 69, y: 67 } },
    ],
  },
  {
    level: 1,
    name: 'black scythe',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 50 } },
    ],
  },
  {
    level: 1,
    name: 'hollow aura',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 53 } },
      { type: 'square', position: { x: 91, y: 141 } },
    ],
  },
  {
    level: 1,
    name: 'ink cloud',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 47, y: 53 } },
    ],
  },
  {
    level: 1,
    name: 'lacerating stabs',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 99, y: 26 } },
      { type: 'diamond', position: { x: 99, y: 41 } },
      { type: 'diamond', position: { x: 99, y: 71 } },
      { type: 'square', position: { x: 90, y: 139 } },
    ],
  },
  {
    level: 1,
    name: 'mantle of dread',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'circle', position: { x: 62, y: 48 } },
    ],
  },
  {
    level: 1,
    name: 'skewer the flesh',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 72, y: 43 } },
      { type: 'square', position: { x: 72, y: 75 } },
      { type: 'square', position: { x: 90, y: 138 } },
    ],
  },
  {
    level: 1,
    name: 'skull collection',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 152 } },
    ],
  },
  {
    level: 1,
    name: 'staring into the abyss',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 140 } },
    ],
  },
  {
    level: 1,
    name: 'succumb to fear',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 141 } },
    ],
  },
  {
    level: 1,
    name: 'tumultuous panic',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 36 } },
      { type: 'square', position: { x: 90, y: 59 } },
      { type: 'diamond', position: { x: 90, y: 83 } },
      { type: 'circle', position: { x: 89, y: 125 } },
      { type: 'square', position: { x: 89, y: 162 } },
    ],
  },
  {
    level: 2,
    name: 'lie in wait',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 140 } },
    ],
  },
  {
    level: 2,
    name: 'slipping into death',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 29 } },
      { type: 'square', position: { x: 91, y: 136 } },
    ],
  },
  {
    level: 3,
    name: 'crippling terror',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 39 } },
      { type: 'square', position: { x: 89, y: 130 } },
    ],
  },
  {
    level: 3,
    name: 'pinning spines',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'circle', position: { x: 73, y: 45 } },
      { type: 'circle', position: { x: 73, y: 72 } },
    ],
  },
  {
    level: 4,
    name: 'crushing darkness',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 47 } },
    ],
  },
  {
    level: 4,
    name: 'grim trophies',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
  },
  {
    level: 5,
    name: 'death spiral',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 173 } },
    ],
  },
  {
    level: 5,
    name: 'extra decoration',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 91, y: 38 } },
      { type: 'circle', position: { x: 91, y: 135 } },
    ],
  },
  {
    level: 6,
    name: 'claw of doom',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 73, y: 54 } },
      { type: 'circle', position: { x: 90, y: 152 } },
    ],
  },
  {
    level: 6,
    name: 'the remorseless deep',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 138 } },
    ],
  },
  {
    level: 7,
    name: 'dire frenzy',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 58 } },
      { type: 'diamond', position: { x: 91, y: 91 } },
      { type: 'circle', position: { x: 90, y: 134 } },
    ],
  },
  {
    level: 7,
    name: 'hasten the end',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 129 } },
    ],
  },
  {
    level: 8,
    name: 'rip from the bone',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 58, y: 45 } },
      { type: 'square', position: { x: 91, y: 139 } },
    ],
  },
  {
    level: 8,
    name: 'unseen horror',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 91, y: 37 } },
    ],
  },
  {
    level: 9,
    name: 'black night of the deep',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 58, y: 69 } },
      { type: 'circle', position: { x: 90, y: 134 } },
    ],
  },
  {
    level: 9,
    name: 'consume the helpless',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 44, y: 57 } },
    ],
  },
], deepwraithPath);
