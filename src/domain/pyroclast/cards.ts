import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const pyroclastPath = '/pyroclast/abilities';

export const pyroclastCards: Card[] = createCards([
  {
    level: 'X',
    name: 'force of the earth',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 54, y: 58 } },
    ],
    slots: [
      { x: 53, y: 169 },
      { x: 83, y: 169 },
    ],
  },
  {
    level: 'X',
    name: 'metamorphic rock',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 167 } },
    ],
  },
  {
    level: 'X',
    name: 'wildfire',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 130 } },
    ],
    slots: [
      { x: 39, y: 74 },
      { x: 69, y: 74 },
      { x: 99, y: 74 },
    ],
  },
  {
    level: 1,
    name: 'cloud of ash',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 133 } },
    ],
  },
  {
    level: 1,
    name: 'cooling',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 69, y: 125 } },
    ],
    slots: [
      { x: 39, y: 169 },
      { x: 69, y: 169 },
      { x: 99, y: 169 },
    ],
  },
  {
    level: 1,
    name: 'eruption',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 146 } },
    ],
  },
  {
    level: 1,
    name: 'flowing fire',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 68, y: 35 } },
      { type: 'circle', position: { x: 90, y: 128 } },
    ],
    slots: [
      { x: 55, y: 173 },
      { x: 84, y: 173 },
    ],
  },
  {
    level: 1,
    name: 'igneous path',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
  },
  {
    level: 1,
    name: 'lava bomb',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 62, y: 39 } },
      { type: 'square', position: { x: 99, y: 39 } },
      { type: 'circle', position: { x: 90, y: 150 } },
    ],
  },
  {
    level: 1,
    name: 'liquid stone',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 60 } },
      { type: 'square', position: { x: 99, y: 60 } },
      { type: 'circle', position: { x: 90, y: 131 } },
    ],
  },
  {
    level: 1,
    name: 'melted armor',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 37 } },
    ],
    slots: [
      { x: 38, y: 166 },
      { x: 68, y: 166 },
      { x: 97, y: 166 },
    ],
  },
  {
    level: 1,
    name: 'quenched rage',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 31 } },
    ],
    slots: [
      { x: 22.5, y: 154.5 },
      { x: 52.5, y: 154.5 },
      { x: 82, y: 154.5 },
      { x: 112, y: 154.5 },
    ],
  },
  {
    level: 1,
    name: 'under pressure',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 91, y: 44 } },
    ],
  },
  {
    level: 2,
    name: 'deep fury',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 91, y: 31 } },
      { type: 'diamondPlus', position: { x: 71, y: 127 } },
    ],
    slots: [
      { x: 68, y: 177 },
    ],
  },
  {
    level: 2,
    name: 'searing smoke',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 74, y: 145 } },
    ],
  },
  {
    level: 3,
    name: 'hardened spike',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 128 } },
    ],
    slots: [
      { x: 68, y: 83 },
      { x: 98, y: 83 },
    ],
  },
  {
    level: 3,
    name: 'living magma',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 134 } },
    ],
    slots: [
      { x: 53, y: 82 },
      { x: 83, y: 82 },
    ],
  },
  {
    level: 4,
    name: 'hand of flame',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 74, y: 41 } },
      { type: 'square', position: { x: 74, y: 152 } },
    ],
  },
  {
    level: 4,
    name: 'heat wave',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 135 } },
    ],
    slots: [
      { x: 95, y: 83 },
    ],
  },
  {
    level: 5,
    name: 'magma orbs',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 56, y: 51 } },
      { type: 'square', position: { x: 104, y: 51 } },
    ],
  },
  {
    level: 5,
    name: 'rain of fire',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 75, y: 152 } },
    ],
  },
  {
    level: 6, name: 'obsidian shield',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 126 } },
    ],
    slots: [
      { x: 23, y: 50.5 },
      { x: 53, y: 50.5 },
      { x: 82.5, y: 50.5 },
      { x: 112, y: 50.5 },
    ],
  },
  {
    level: 6, name: 'return to the source',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 62, y: 27 } },
      { type: 'circle', position: { x: 89, y: 125 } },
    ],
    slots: [
      { x: 107, y: 59 },
    ],
  },
  {
    level: 7, name: 'erupting rage',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 62, y: 35 } },
      { type: 'square', position: { x: 99, y: 35 } },
      { type: 'square', position: { x: 90, y: 152 } },
    ],
  },
  {
    level: 7, name: 'swelter',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
  },
  {
    level: 8, name: 'cinder lance',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 39 } },
      { type: 'square', position: { x: 67, y: 163 } },
    ],
  },
  {
    level: 8, name: 'feed the beast',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 92, y: 129 } },
    ],
  },
  {
    level: 9, name: 'calamity',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
  },
  {
    level: 9, name: 'stone armor',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 75, y: 129 } },
    ],
  },
], pyroclastPath);
