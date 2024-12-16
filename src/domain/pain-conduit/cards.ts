import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const painConduitPath = '/pain-conduit/abilities';

export const painConduitCards: Card[] = createCards([
  {
    level: 'X',
    name: 'delayed malady',
    actions: { top: 'discard', bottom: 'activeLost' },
    slots: [
      { x: 38, y: 153 },
      { x: 67, y: 153 },
      { x: 97, y: 153 },
      { x: 53, y: 177 },
      { x: 83, y: 177 },
    ],
    initiative: 90,
  },
  {
    level: 'X',
    name: 'pleasure in pain',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 41, y: 58 }, },
      { type: 'circle', position: { x: 90, y: 129 }, },
      { type: 'diamond', position: { x: 49, y: 155 }, },
    ],
    initiative: 47,
  },
  {
    level: 'X',
    name: 'unstable effigy',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 62, y: 48 }, },
      { type: 'summonSquare', position: { x: 87, y: 48 }, },
      { type: 'summonSquare', position: { x: 62, y: 67 }, },
    ],
    initiative: 18,
  },
  {
    level: 1,
    name: 'blood ritual',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 72, y: 46 }, },
    ],
    initiative: 56,
  },
  {
    level: 1,
    name: 'cleansing fire',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 66, y: 40 }, },
      { type: 'circle', position: { x: 91, y: 152 }, },
    ],
    initiative: 64,
  },
  {
    level: 1,
    name: 'explosive wounds',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 138 }, },
    ],
    initiative: 43,
  },
  {
    level: 1,
    name: 'line of transference',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 62, y: 35 }, },
      { type: 'circle', position: { x: 91, y: 151 }, },
    ],
    initiative: 25,
  },
  {
    level: 1,
    name: 'scarred effigy',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 61, y: 41 }, },
      { type: 'summonSquare', position: { x: 86, y: 41 }, },
      { type: 'summonSquare', position: { x: 61, y: 60 }, },
      { type: 'circle', position: { x: 90, y: 140 }, },
      { type: 'square', position: { x: 90, y: 168 }, },
    ],
    initiative: 19,
  },
  {
    level: 1,
    name: 'shared affliction',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 130 }, },
    ],
    initiative: 61,
  },
  {
    level: 1,
    name: 'swift vengeance',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 95, y: 47 }, },
      { type: 'circle', position: { x: 89, y: 132 }, },
    ],
    initiative: 21,
  },
  {
    level: 1,
    name: 'the agony of others',
    actions: { top: 'discard', bottom: 'activeLost' },
    slots: [
      { x: 38, y: 160 },
      { x: 67, y: 160 },
      { x: 97, y: 160 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 46 }, },
    ],
    initiative: 78,
  },
  {
    level: 1,
    name: 'transferred injury',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 87, y: 27 }, },
      { type: 'square', position: { x: 89, y: 74 }, },
      { type: 'circle', position: { x: 70, y: 140 }, },
    ],
    initiative: 74,
  },
  {
    level: 1,
    name: 'unending torment',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 71, y: 42 }, },
      { type: 'square', position: { x: 71, y: 138 }, },
    ],
    initiative: 29,
  },
  {
    level: 2,
    name: 'infection purge',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 45,
  },
  {
    level: 2,
    name: 'reversal of fate',
    actions: { top: 'lose', bottom: 'activeDiscard' },
    slots: [
      { x: 69, y: 165 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 64, y: 44 }, },
      { type: 'diamond', position: { x: 66, y: 71 }, },
    ],
    initiative: 23,
  },
  {
    level: 3,
    name: 'burned at both ends',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 131 }, },
    ],
    initiative: 30,
  },
  {
    level: 3,
    name: 'reprisal',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 61 }, },
      { type: 'circle', position: { x: 91, y: 165 }, },
    ],
    initiative: 70,
  },
  {
    level: 4,
    name: 'down to the dirt',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 42 }, },
      { type: 'circle', position: { x: 90, y: 134 }, },
    ],
    initiative: 39,
  },
  {
    level: 4,
    name: 'mirrored misery',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 130 }, },
    ],
    initiative: 72,
  },
  {
    level: 5,
    name: 'chained by despair',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 131 }, },
    ],
    initiative: 15,
  },
  {
    level: 5,
    name: 'chained by spite',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 135 }, },
      { type: 'square', position: { x: 71, y: 157 }, },
    ],
    initiative: 15,
  },
  {
    level: 6,
    name: 'hopelessness',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 137 }, },
    ],
    initiative: 83,
  },
  {
    level: 6,
    name: 'phantom limb',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 34 }, },
      { type: 'circle', position: { x: 61, y: 132 }, },
    ],
    initiative: 75,
  },
  {
    level: 7,
    name: 'penance',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 131 }, },
      { type: 'square', position: { x: 70, y: 153 }, },
    ],
    initiative: 12,
  },
  {
    level: 7,
    name: 'reject the gift',
    actions: { top: 'activeDiscard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 134 }, },
    ],
    initiative: 20,
  },
  {
    level: 8,
    name: 'wave of anguish',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 32 }, },
      { type: 'square', position: { x: 97, y: 32 }, },
      { type: 'diamond', position: { x: 72, y: 158 }, },
    ],
    initiative: 68,
  },
  {
    level: 8,
    name: 'wracked with pain',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 71, y: 142 }, },
    ],
    initiative: 22,
  },
  {
    level: 9,
    name: 'redemption',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 33,
  },
  {
    level: 9,
    name: 'the end of everything',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    initiative: 99,
  },
], painConduitPath);
