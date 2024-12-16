import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const infuserPath = '/infuser/abilities';

export const infuserCards: Card[] = createCards([
  {
    level: 'X',
    name: 'battle prowess',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 87, y: 54 }, },
    ],
    initiative: 78,
  },
  {
    level: 'X',
    name: 'crystalline aegis',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 17,
  },
  {
    level: 'X',
    name: 'imbue with life',
    actions: { top: 'activeDiscard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 66, y: 43 }, },
      { type: 'summonSquare', position: { x: 98, y: 43 }, },
      { type: 'diamondPlus', position: { x: 70, y: 128 }, },
    ],
    initiative: 42,
  },
  {
    level: 1,
    name: 'boon of the tempest',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 144 }, },
    ],
    initiative: 28,
  },
  {
    level: 1,
    name: 'bounty of the earth',
    actions: { top: 'activeDiscard', bottom: 'activeLost' },
    initiative: 23,
  },
  {
    level: 1,
    name: 'caress of the night',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 87,
  },
  {
    level: 1,
    name: 'emerald edge',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 70,
  },
  {
    level: 1,
    name: 'formless bladestorm',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 129 }, },
    ],
    initiative: 33,
  },
  {
    level: 1,
    name: 'onyx shards',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 60, y: 50 }, },
      { type: 'square', position: { x: 95, y: 50 }, },
    ],
    initiative: 20,
  },
  {
    level: 1,
    name: 'rising momentum',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 88, y: 37 }, },
      { type: 'square', position: { x: 88, y: 129 }, },
    ],
    initiative: 25,
  },
  {
    level: 1,
    name: 'slashing cyclone',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 47, y: 48 }, },
      { type: 'circle', position: { x: 88, y: 135 }, },
    ],
    initiative: 14,
  },
  {
    level: 1,
    name: 'stoic vigilance',
    actions: { top: 'activeDiscard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 44 }, },
      { type: 'square', position: { x: 89, y: 71 }, },
      { type: 'circle', position: { x: 88, y: 127 }, },
    ],
    initiative: 12,
  },
  {
    level: 1,
    name: 'torrential cleave',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 70, y: 61 }, },
      { type: 'hex', position: { x: 119.5, y: 51.5, size: 15 }, },
      { type: 'hex', position: { x: 94, y: 167.5, size: 15 }, },
    ],
    initiative: 83,
  },
  {
    level: 1,
    name: 'unstoppable impulse',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 49 }, },
      { type: 'square', position: { x: 90, y: 184 }, },
    ],
    initiative: 56,
  },
  {
    level: 2,
    name: 'remote impact',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 60, y: 49 }, },
      { type: 'hex', position: { x: 125, y: 46, size: 15 }, },
      { type: 'hex', position: { x: 81, y: 71, size: 15 }, },
    ],
    initiative: 72,
  },
  {
    level: 2,
    name: 'veil of protection',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'square', position: { x: 88, y: 48 }, },
    ],
    initiative: 47,
  },
  {
    level: 3,
    name: 'guide the flow',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 88, y: 33 }, },
      { type: 'square', position: { x: 88, y: 129 }, },
    ],
    initiative: 35,
  },
  {
    level: 3,
    name: 'reinforced riposte',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 176 }, },
    ],
    initiative: 18,
  },
  {
    level: 4,
    name: 'coalescing darkness',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 51, y: 137 }, },
      { type: 'square', position: { x: 98, y: 137 }, },
    ],
    initiative: 85,
  },
  {
    level: 4,
    name: 'desperate throw',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 43, y: 36 }, },
      { type: 'diamondPlus', position: { x: 70, y: 82 }, },
      { type: 'square', position: { x: 88, y: 131 }, },
    ],
    initiative: 16,
  },
  {
    level: 5,
    name: 'gemstone resonance',
    actions: { top: 'activeDiscard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 59, y: 69 }, },
      { type: 'circle', position: { x: 89, y: 132 }, },
    ],
    initiative: 30,
  },
  {
    level: 5,
    name: 'obsidian spear',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 88, y: 36 }, },
      { type: 'hex', position: { x: 107, y: 77.5, size: 15 }, },
      { type: 'square', position: { x: 55, y: 153 }, },
      { type: 'square', position: { x: 90, y: 153 }, },
    ],
    initiative: 84,
  },
  {
    level: 6,
    name: 'gale barrage',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 95, y: 54 }, },
      { type: 'square', position: { x: 87, y: 127 }, },
    ],
    initiative: 44,
  },
  {
    level: 6,
    name: 'propulsive tailwind',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 166 }, },
    ],
    initiative: 91,
  },
  {
    level: 7,
    name: 'diamondization',
    actions: { top: 'activeDiscard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 86, y: 31 }, },
    ],
    initiative: 10,
  },
  {
    level: 7,
    name: 'malachite shockwave',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 44, y: 48 }, },
      { type: 'square', position: { x: 88, y: 132 }, },
    ],
    initiative: 68,
  },
  {
    level: 8,
    name: 'swift pivot',
    actions: { top: 'activeDiscard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'square', position: { x: 55, y: 125 }, },
      { type: 'diamond', position: { x: 55, y: 147 }, },
      { type: 'hex', position: { x: 113.5, y: 165.5, size: 15 }, },
    ],
    initiative: 8,
  },
  {
    level: 8,
    name: 'untether the shackles',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 66, y: 35 }, },
      { type: 'summonSquare', position: { x: 99, y: 35 }, },
      { type: 'square', position: { x: 73, y: 146 }, },
    ],
    initiative: 61,
  },
  {
    level: 9,
    name: 'ancient rites of power',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 63, y: 131 }, },
    ],
    initiative: 94,
  },
  {
    level: 9,
    name: 'sky splitting strike',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 33 }, },
    ],
    initiative: 50,
  },
], infuserPath);
