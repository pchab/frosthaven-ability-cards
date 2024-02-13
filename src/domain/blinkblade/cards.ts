import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const blinbladePath = '/blinkblade/abilities';

export const blinkbladeCards: Card[] = createCards([
  { level: 'X', name: 'borrowed time', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 'X', name: 'experimental adjustment', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'sand in the hourglass', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'blurry jab', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'cascading reaction', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'drive recharge', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'hit and run', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'kinetic transfer', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'overdrive', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'power leak', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 1, name: 'sap speed', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'temporal displacement', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'twin strike', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'reckless augmentation', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'systems reboot', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 3, name: 'double time', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 3, name: 'make it count', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'potential energy', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'precision timing', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 5, name: 'breakneck speed', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
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
