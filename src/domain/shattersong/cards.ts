import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const shattersongPath = '/shattersong/abilities';

export const shattersongCards: Card[] = createCards([
  {
    level: 9,
    name: 'barbaric yawp',
    initiative: 66,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 126 } },
    ],
  },
  {
    level: 2,
    name: 'befuddling bellow',
    initiative: 18,
    actions: { top: 'activeDiscard', bottom: 'discard' },
  },
  {
    level: 'X',
    name: 'calamitous yawp',
    initiative: 65,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 131 } },
    ],
  },
  {
    level: 7,
    name: 'cloaking refraction',
    initiative: 11,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 44 } },
      { type: 'circle', position: { x: 90, y: 129 } },
    ],
  },
  {
    level: 4,
    name: 'concentrated blast',
    initiative: 38,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 72, y: 44 } },
      { type: 'square', position: { x: 89, y: 131 } },
    ],
  },
  {
    level: 1,
    name: 'devastating shout',
    initiative: 68,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 94, y: 57 } },
      { type: 'square', position: { x: 90, y: 154 } },
    ],
  },
  {
    level: 'X',
    name: 'din of battle',
    initiative: 14,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 67, y: 45 } },
    ],
  },
  {
    level: 4,
    name: 'elemental pulse',
    initiative: 25,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 35 } },
    ],
  },
  {
    level: 5,
    name: 'empowering note',
    initiative: 45,
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 131 } },
    ],
  },
  {
    level: 1,
    name: 'empowering pulse',
    initiative: 22,
    actions: { top: 'lose', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 42 } },
    ],
  },
  {
    level: 8,
    name: 'feedback',
    initiative: 24,
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 127 } },
    ],
  },
  {
    level: 1,
    name: 'forceful vibrations',
    initiative: 27,
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 72, y: 50 } },
      { type: 'circle', position: { x: 74, y: 133 } },
    ],
  },
  {
    level: 1,
    name: 'foreboding tremors',
    initiative: 21,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 50, y: 50 } },
      { type: 'circle', position: { x: 89, y: 135 } },
    ],
  },
  {
    level: 6,
    name: 'future sense',
    initiative: 28,
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'square', position: { x: 57, y: 42 } },
      { type: 'square', position: { x: 104, y: 42 } },
      { type: 'circle', position: { x: 73, y: 135 } },
    ],
  },
  {
    level: 1,
    name: 'heartening harmony',
    initiative: 30,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 72, y: 58 } },
    ],
  },
  {
    level: 'X',
    name: 'illuminative tone',
    initiative: 72,
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 68, y: 48 } },
      { type: 'circle', position: { x: 88, y: 140 } },
      { type: 'square', position: { x: 47, y: 160 } },
    ],
  },
  {
    level: 1,
    name: 'lifting voice',
    initiative: 29,
    actions: { top: 'discard', bottom: 'discard' },
  },
  {
    level: 1,
    name: 'precious gems',
    initiative: 10,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 47 } },
      { type: 'square', position: { x: 89, y: 131 } },
    ],
  },
  {
    level: 1,
    name: 'resonant frequency',
    initiative: 88,
    actions: { top: 'discard', bottom: 'discard' },
  },
  {
    level: 3,
    name: 'shape the path',
    initiative: 40,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 140 } },
    ],
  },
  {
    level: 5,
    name: 'shrieking chakram',
    initiative: 8,
    actions: { top: 'lose', bottom: 'discard' },
  },
  {
    level: 8,
    name: 'soft spots',
    initiative: 47,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 94, y: 49 } },
      { type: 'circle', position: { x: 90, y: 133 } },
    ],
  },
  {
    level: 1,
    name: 'sonic shock',
    initiative: 58,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 63, y: 50 } },
      { type: 'square', position: { x: 98, y: 50 } },
      { type: 'circle', position: { x: 90, y: 136 } },
    ],
  },
  {
    level: 7,
    name: 'sound therapy',
    initiative: 73,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 70, y: 144 } },
    ],
  },
  {
    level: 3,
    name: 'stealth vibrations',
    initiative: 35,
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 72, y: 48 } },
      { type: 'square', position: { x: 90, y: 141 } },
    ],
  },
  {
    level: 2,
    name: 'transparency',
    initiative: 13,
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 72, y: 38 } },
    ],
  },
  {
    level: 1,
    name: 'unrelenting wail',
    initiative: 26,
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 59, y: 59 } },
      { type: 'circle', position: { x: 90, y: 139 } },
    ],
  },
  {
    level: 6,
    name: 'unsustainable wave',
    initiative: 36,
    actions: { top: 'discard', bottom: 'discard' },
  },
  {
    level: 9,
    name: 'violent vibrations',
    initiative: 5,
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 132 } },
    ],
  },
], shattersongPath);
