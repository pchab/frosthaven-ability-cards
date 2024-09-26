import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const blinbladePath = '/blinkblade/abilities';

export const blinkbladeCards: Card[] = createCards([
  {
    level: 'X', name: 'borrowed time', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    slots: [
      { x: 43, y: 59 },
      { x: 72, y: 59 },
      { x: 101, y: 59 },
      { x: 28, y: 83 },
      { x: 58, y: 83 },
      { x: 88, y: 83 },
    ],
  },
  { level: 'X', name: 'experimental adjustment', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'sand in the hourglass', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'blurry jab', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'cascading reaction', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'drive recharge', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  {
    level: 1, name: 'hit and run', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 39, y: 149 },
      { x: 68, y: 149 },
      { x: 98, y: 149 },
      { x: 54, y: 174 },
      { x: 84, y: 174 },
    ],
  },
  { level: 1, name: 'kinetic transfer', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'overdrive', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'power leak', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 1, name: 'sap speed', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'temporal displacement', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'twin strike', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'reckless augmentation', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'systems reboot', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  {
    level: 3, name: 'double time', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 54, y: 149 },
      { x: 84, y: 149 },
      { x: 70, y: 174 },
    ],
  },
  { level: 3, name: 'make it count', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'potential energy', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'precision timing', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  {
    level: 5, name: 'breakneck speed', actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 23, y: 78 },
      { x: 53, y: 78 },
      { x: 83, y: 78 },
      { x: 113, y: 78 },
    ],
  },
  { level: 5, name: 'flashing flurry', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 6, name: 'stab them all', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 6, name: 'the knifes edge', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 7, name: 'phasing blades', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 7, name: 'rushed to the end', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'fastest alive', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'quantum uncertainty', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'fractured timeline', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 9, name: 'reverse the flow', actions: { top: CardActions.activeDiscard, bottom: CardActions.lose } },
], blinbladePath);
