import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const crashingTidePath = '/crashing-tide/abilities';

export const crashingTideCards: Card[] = createCards([
  {
    level: 'X',
    name: 'crush armor',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 42,
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 135 } },
    ],
  },
  {
    level: 'X',
    name: 'rising flood',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 49,
  },
  {
    level: 'X',
    name: 'undertow',
    actions: { top: 'lose', bottom: 'activeDiscard' },
    initiative: 15,
    availableEnhancements: [
      { type: 'circle', position: { x: 70, y: 141 } },
    ],
  },
  {
    level: 1,
    name: 'cleansing swell',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 45,
    availableEnhancements: [
      { type: 'diamond', position: { x: 50, y: 48 } },
    ],
  },
  {
    level: 1,
    name: 'crashing surge',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 34,
    availableEnhancements: [
      { type: 'circle', position: { x: 59, y: 44 } },
      { type: 'circle', position: { x: 89, y: 138 } },
    ],
  },
  {
    level: 1,
    name: 'cresting force',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 87,
  },
  {
    level: 1,
    name: 'down to the depths',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 74,
  },
  {
    level: 1,
    name: 'mighty claws',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 23,
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 125 } },
      { type: 'circle', position: { x: 90, y: 139 } },
      { type: 'circle', position: { x: 90, y: 153 } },
    ],
  },
  {
    level: 1,
    name: 'overwhelming wave',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 86,
    availableEnhancements: [
      { type: 'diamond', position: { x: 62, y: 59 } },
    ],
  },
  {
    level: 1,
    name: 'pool of power',
    actions: { top: 'lose', bottom: 'activeDiscard' },
    initiative: 41,
    availableEnhancements: [
      { type: 'diamond', position: { x: 91, y: 39 } },
    ],
  },
  {
    level: 1,
    name: 'rancid brine',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 62,
  },
  {
    level: 1,
    name: 'sharp chitin',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 25,
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 136 } },
    ],
  },
  {
    level: 1,
    name: 'skitter',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 51,
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 59 } },
    ],
  },
  {
    level: 1,
    name: 'soft flesh',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 75,
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 134 } },
    ],
  },
  {
    level: 1,
    name: 'submerge',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 68,
    availableEnhancements: [
      { type: 'square', position: { x: 70, y: 47 } },
      { type: 'circle', position: { x: 90, y: 132 } },
    ],
  },
  {
    level: 2,
    name: 'blood in the water',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 53,
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 27 } },
      { type: 'diamond', position: { x: 90, y: 66 } },
      { type: 'circle', position: { x: 90, y: 139 } },
    ],
  },
  {
    level: 2,
    name: 'smashing torrent',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 79,
  },
  {
    level: 3,
    name: 'endless cycle',
    actions: { top: 'lose', bottom: 'activeDiscard' },
    initiative: 8,
  },
  {
    level: 3,
    name: 'shuck',
    actions: { top: 'activeDiscard', bottom: 'lose' },
    initiative: 55,
  },
  {
    level: 4,
    name: 'chaotic refraction',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 26,
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 142 } },
    ],
  },
  {
    level: 4,
    name: 'clean sweep',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 65,
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 132 } },
    ],
  },
  {
    level: 5,
    name: 'sodden soil',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 17,
    availableEnhancements: [
      { type: 'square', position: { x: 66, y: 58 } },
      { type: 'diamond', position: { x: 47, y: 169 } },
    ],
  },
  {
    level: 5,
    name: 'tidal blast',
    actions: { top: 'lose', bottom: 'activeDiscard' },
    initiative: 71,
    availableEnhancements: [
      { type: 'diamond', position: { x: 46, y: 56 } },
      { type: 'square', position: { x: 104, y: 48 } },
    ],
  },
  {
    level: 6,
    name: 'powerful pincer',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 70,
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 140 } },
    ],
  },
  {
    level: 6,
    name: 'twilight grasp',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 33,
    availableEnhancements: [
      { type: 'diamond', position: { x: 69, y: 41 } },
    ],
  },
  {
    level: 7,
    name: 'drown beneath the waves',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 9,
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 76 } },
      { type: 'square', position: { x: 67, y: 140 } },
    ],
  },
  {
    level: 7,
    name: 'dug in',
    actions: { top: 'activeDiscard', bottom: 'activeDiscard' },
    initiative: 76,
  },
  {
    level: 8,
    name: 'death on all sides',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 73,
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 152 } },
    ],
  },
  {
    level: 8,
    name: 'ebb and flow',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 24,
    availableEnhancements: [
      { type: 'diamond', position: { x: 43, y: 67 } },
      { type: 'circle', position: { x: 89, y: 132 } },
    ],
  },
  {
    level: 9,
    name: 'high tide',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 90,
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 34 } },
      { type: 'diamond', position: { x: 91, y: 66 } },
    ],
  },
  {
    level: 9,
    name: 'low tide',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    initiative: 10,
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 134 } },
    ],
  },
], crashingTidePath);
