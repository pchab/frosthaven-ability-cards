import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const blinbladePath = '/blinkblade/abilities';

export const blinkbladeCards: Card[] = createCards([
  {
    level: 'X',
    name: 'borrowed time',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    slots: [
      { x: 43, y: 59 },
      { x: 72, y: 59 },
      { x: 101, y: 59 },
      { x: 28, y: 83 },
      { x: 58, y: 83 },
      { x: 88, y: 83 },
    ],
  },
  {
    level: 'X',
    name: 'experimental adjustment',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
  },
  {
    level: 'X',
    name: 'sand in the hourglass',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 61, y: 129 } },
    ],
  },
  {
    level: 1,
    name: 'blurry jab',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 46 } },
      { type: 'circle', position: { x: 89, y: 139 } },
    ],
  },
  {
    level: 1,
    name: 'cascading reaction',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 34 } },
      { type: 'circle', position: { x: 89, y: 59 } },
      { type: 'circle', position: { x: 89, y: 83 } },
    ],
  },
  {
    level: 1,
    name: 'drive recharge',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
  },
  {
    level: 1,
    name: 'hit and run',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
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
  },
  {
    level: 1,
    name: 'kinetic transfer',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 36 } },
      { type: 'diamond', position: { x: 90, y: 61 } },
      { type: 'circle', position: { x: 90, y: 130 } },
    ],
  },
  {
    level: 1,
    name: 'overdrive',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
  },
  {
    level: 1,
    name: 'power leak',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 131 } },
    ],
  },
  {
    level: 1,
    name: 'sap speed',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
  },
  {
    level: 1,
    name: 'temporal displacement',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 151 } },
    ],
  },
  {
    level: 1,
    name: 'twin strike',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 34 } },
      { type: 'diamond', position: { x: 89, y: 84 } },
      { type: 'circle', position: { x: 89, y: 131 } },
    ],
  },
  {
    level: 2,
    name: 'reckless augmentation',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 45 } },
      { type: 'circle', position: { x: 89, y: 128 } },
    ],
  },
  {
    level: 2,
    name: 'systems reboot',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 46 } },
    ],
  },
  {
    level: 3,
    name: 'double time',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 54, y: 149 },
      { x: 84, y: 149 },
      { x: 70, y: 174 },
    ],
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 35 } },
      { type: 'diamond', position: { x: 89, y: 58 } },
    ],
  },
  {
    level: 3,
    name: 'make it count',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 64, y: 34 } },
      { type: 'circle', position: { x: 89, y: 165 } },
    ],
  },
  {
    level: 4,
    name: 'potential energy',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 95, y: 51 } },
      { type: 'circle', position: { x: 95, y: 145 } },
    ],
  },
  {
    level: 4,
    name: 'precision timing',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 130 } },
      { type: 'circle', position: { x: 89, y: 180 } },
    ],
  },
  {
    level: 5,
    name: 'breakneck speed',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 23, y: 78 },
      { x: 53, y: 78 },
      { x: 83, y: 78 },
      { x: 113, y: 78 },
    ],
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 137 } },
    ],
  },
  {
    level: 5,
    name: 'flashing flurry',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'diamond', position: { x: 60, y: 140 } },
    ],
  },
  {
    level: 6,
    name: 'stab them all',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 59 } },
      { type: 'diamond', position: { x: 89, y: 90 } },
    ],
  },
  {
    level: 6,
    name: 'the knifes edge',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 71, y: 137 } },
    ],
  },
  {
    level: 7,
    name: 'phasing blades',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 141 } },
    ],
  },
  {
    level: 7,
    name: 'rushed to the end',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 51 } },
      { type: 'circle', position: { x: 89, y: 144 } },
      { type: 'circle', position: { x: 89, y: 176 } },
    ],
  },
  {
    level: 8,
    name: 'fastest alive',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 151 } },
    ],
  },
  {
    level: 8,
    name: 'quantum uncertainty',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 39 } },
      { type: 'circle', position: { x: 89, y: 141 } },
    ],
  },
  {
    level: 9,
    name: 'fractured timeline',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 134 } },
    ],
  },
  {
    level: 9,
    name: 'reverse the flow',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.lose },
  },
], blinbladePath);
