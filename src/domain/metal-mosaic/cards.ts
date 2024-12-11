import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const metalMosaicPath = '/metal-mosaic/abilities';

export const metalMosaicCards: Card[] = createCards([
  {
    level: 1,
    name: 'ancient-drill',
    initiative: 90,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 38 }, },
      { type: 'circle', position: { x: 90, y: 136 }, },
    ],
  },
  {
    level: 1,
    name: 'beam-axe',
    initiative: 29,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 38 }, },
      { type: 'circle', position: { x: 90, y: 133 }, },
    ],
  },
  {
    level: 2,
    name: 'bronze-plating',
    initiative: 18,
    actions: { bottom: 'activeDiscard', top: 'activeDiscard' },
  },
  {
    level: 7,
    name: 'cryogenic-hibernation',
    initiative: 19,
    actions: { bottom: 'activeDiscard', top: 'discard' },
  },
  {
    level: 'X',
    name: 'curious-gear',
    initiative: 12,
    actions: { bottom: 'discard', top: 'discard' },
  },
  {
    level: 8,
    name: 'curious-machinery',
    initiative: 11,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 124 }, },
    ],
  },
  {
    level: 3,
    name: 'electrical-discharge',
    initiative: 26,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 31 }, },
      { type: 'circle', position: { x: 89, y: 125 }, },
    ],
  },
  {
    level: 4,
    name: 'energy-conversion',
    initiative: 23,
    actions: { bottom: 'lose', top: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 31 }, },
      { type: 'circle', position: { x: 89, y: 127 }, },
    ],
  },
  {
    level: 5,
    name: 'heat-conduction',
    initiative: 11,
    actions: { bottom: 'activeDiscard', top: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 52 }, },
    ],
  },
  {
    level: 7,
    name: 'heated-drill',
    initiative: 80,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 31 }, },
      { type: 'circle', position: { x: 70, y: 157 }, },
    ],
  },
  {
    level: 4,
    name: 'magnetic-field',
    initiative: 21,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 28 }, },
    ],
  },
  {
    level: 1,
    name: 'memory-drive',
    initiative: 64,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 144 }, },
    ],
  },
  {
    level: 8,
    name: 'piston-barrage',
    initiative: 33,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 127 }, },
      { type: 'circle', position: { x: 90, y: 28 }, },
    ],
  },
  {
    level: 9,
    name: 'polarity-shift',
    initiative: 79,
    actions: { bottom: 'discard', top: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 65, y: 91 }, },
    ],
  },
  {
    level: 1,
    name: 'power-core',
    initiative: 83,
    actions: { bottom: 'lose', top: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 70, y: 126 }, },
    ],
  },
  {
    level: 1,
    name: 'pressure-build-up',
    initiative: 20,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 38 }, },
      { type: 'circle', position: { x: 90, y: 156 }, },
    ],
  },
  {
    level: 'X',
    name: 'processing',
    initiative: 95,
    actions: { bottom: 'activeDiscard', top: 'discard' },
  },
  {
    level: 5,
    name: 'radiation',
    initiative: 37,
    actions: { bottom: 'discard', top: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 39 }, },
      { type: 'circle', position: { x: 89, y: 127 }, },
    ],
  },
  {
    level: 'X',
    name: 'recursion',
    initiative: 50,
    actions: { bottom: 'activeDiscard', top: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 34 }, },
      { type: 'square', position: { x: 89, y: 129 }, },
    ],
  },
  {
    level: 2,
    name: 'release-valve',
    initiative: 30,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 139 }, },
    ],
  },
  {
    level: 1,
    name: 'rocket-boots',
    initiative: 22,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 70, y: 52 }, },
      { type: 'square', position: { x: 73, y: 131 }, },
    ],
  },
  {
    level: 6,
    name: 'scalding-blast',
    initiative: 45,
    actions: { bottom: 'discard', top: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 70, y: 146 }, },
    ],
  },
  {
    level: 1,
    name: 'steam-armor',
    initiative: 17,
    actions: { bottom: 'activeDiscard', top: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 128 }, },
    ],
  },
  {
    level: 6,
    name: 'steam-core',
    initiative: 71,
    actions: { bottom: 'discard', top: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 70, y: 30 }, },
      { type: 'square', position: { x: 90, y: 133 }, },
    ],
  },
  {
    level: 1,
    name: 'steel-piston',
    initiative: 40,
    actions: { bottom: 'activeDiscard', top: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 40 }, },
      { type: 'circle', position: { x: 90, y: 131 }, },
    ],
  },
  {
    level: 3,
    name: 'stress-vents',
    initiative: 15,
    actions: { bottom: 'activeDiscard', top: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 127 }, },
    ],
  },
  {
    level: 1,
    name: 'super-heat-transfer',
    initiative: 25,
    actions: { bottom: 'discard', top: 'discard' },
  },
  {
    level: 9,
    name: 'unstable-core',
    initiative: 10,
    actions: { bottom: 'lose', top: 'activeDiscard' },
  },
], metalMosaicPath);
