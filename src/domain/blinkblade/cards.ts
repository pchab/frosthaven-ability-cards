import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const blinbladePath = '/blinkblade/abilities';

export const blinkbladeCards: Card[] = createCards([
  {
    level: 'X',
    name: 'borrowed time',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    slots: [
      { x: 43, y: 59 },
      { x: 72, y: 59 },
      { x: 101, y: 59 },
      { x: 28, y: 83 },
      { x: 58, y: 83 },
      { x: 88, y: 83 },
    ],
    initiative: 2,
  },
  {
    level: 'X',
    name: 'experimental adjustment',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 12,
  },
  {
    level: 'X',
    name: 'sand in the hourglass',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 61, y: 129 } },
    ],
    initiative: 52,
  },
  {
    level: 1,
    name: 'blurry jab',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 46 } },
      { type: 'circle', position: { x: 89, y: 139 } },
    ],
    initiative: 20,
  },
  {
    level: 1,
    name: 'cascading reaction',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 34 } },
      { type: 'circle', position: { x: 89, y: 59 } },
      { type: 'circle', position: { x: 89, y: 83 } },
    ],
    initiative: 19,
  },
  {
    level: 1,
    name: 'drive recharge',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 69,
  },
  {
    level: 1,
    name: 'hit and run',
    actions: { top: 'discard', bottom: 'activeLost' },
    slots: [
      { x: 39, y: 149 },
      { x: 68, y: 149 },
      { x: 98, y: 149 },
      { x: 54, y: 174 },
      { x: 84, y: 174 },
    ],
    availableEnhancements: [
      { type: 'circle', position: { x: 73, y: 44 } },
    ],
    initiative: 41,
  },
  {
    level: 1,
    name: 'kinetic transfer',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 36 } },
      { type: 'diamond', position: { x: 90, y: 61 } },
      { type: 'circle', position: { x: 90, y: 130 } },
    ],
    initiative: 36,
  },
  {
    level: 1,
    name: 'overdrive',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 60,
  },
  {
    level: 1,
    name: 'power leak',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 131 } },
    ],
    initiative: 17,
  },
  {
    level: 1,
    name: 'sap speed',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 45,
  },
  {
    level: 1,
    name: 'temporal displacement',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 151 } },
    ],
    initiative: 44,
  },
  {
    level: 1,
    name: 'twin strike',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 34 } },
      { type: 'diamond', position: { x: 89, y: 84 } },
      { type: 'circle', position: { x: 89, y: 131 } },
    ],
    initiative: 24,
  },
  {
    level: 2,
    name: 'reckless augmentation',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 45 } },
      { type: 'circle', position: { x: 89, y: 128 } },
    ],
    initiative: 10,
  },
  {
    level: 2,
    name: 'systems reboot',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 71, y: 46 } },
    ],
    initiative: 57,
  },
  {
    level: 3,
    name: 'double time',
    actions: { top: 'discard', bottom: 'activeLost' },
    slots: [
      { x: 54, y: 149 },
      { x: 84, y: 149 },
      { x: 70, y: 174 },
    ],
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 35 } },
      { type: 'diamond', position: { x: 89, y: 58 } },
    ],
    initiative: 22,
  },
  {
    level: 3,
    name: 'make it count',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 64, y: 34 } },
      { type: 'circle', position: { x: 89, y: 165 } },
    ],
    initiative: 51,
  },
  {
    level: 4,
    name: 'potential energy',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 95, y: 51 } },
      { type: 'circle', position: { x: 95, y: 145 } },
    ],
    initiative: 32,
  },
  {
    level: 4,
    name: 'precision timing',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 130 } },
      { type: 'circle', position: { x: 89, y: 180 } },
    ],
    initiative: 15,
  },
  {
    level: 5,
    name: 'breakneck speed',
    actions: { top: 'activeLost', bottom: 'discard' },
    slots: [
      { x: 23, y: 78 },
      { x: 53, y: 78 },
      { x: 83, y: 78 },
      { x: 113, y: 78 },
    ],
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 137 } },
    ],
    initiative: 3,
  },
  {
    level: 5,
    name: 'flashing flurry',
    actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 60, y: 140 } },
    ],
    initiative: 40,
  },
  {
    level: 6,
    name: 'stab them all',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 59 } },
      { type: 'diamond', position: { x: 89, y: 90 } },
    ],
    initiative: 4,
  },
  {
    level: 6,
    name: 'the knifes edge',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 71, y: 137 } },
    ],
    initiative: 65,
  },
  {
    level: 7,
    name: 'phasing blades',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 141 } },
    ],
    initiative: 63,
  },
  {
    level: 7,
    name: 'rushed to the end',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 51 } },
      { type: 'circle', position: { x: 89, y: 144 } },
      { type: 'circle', position: { x: 89, y: 176 } },
    ],
    initiative: 32,
  },
  {
    level: 8,
    name: 'fastest alive',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 151 } },
    ],
    initiative: 1,
  },
  {
    level: 8,
    name: 'quantum uncertainty',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 39 } },
      { type: 'circle', position: { x: 89, y: 141 } },
    ],
    initiative: 35,
  },
  {
    level: 9,
    name: 'fractured timeline',
    actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 134 } },
    ],
    initiative: 55,
  },
  {
    level: 9,
    name: 'reverse the flow',
    actions: { top: 'activeDiscard', bottom: 'lose' },
    initiative: 58,
  },
], blinbladePath);
