import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const hivePath = '/hive/abilities';

export const hiveCards: Card[] = createCards([
  { level: 'X', name: 'reassemble', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 'X', name: 'remote control', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'shocking pulse', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'aimed assault', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'coiled limbs', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'faceless entity', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'high impact projectiles', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'prepare for deployment', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'reaper function', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'reconstructive aid', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'launch pod', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'hunter killer', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'interference', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'plated defense', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 2, name: 'force field', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 2, name: 'long range missile', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 3, name: 'hijack', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'rapid fire', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 4, name: 'divergent destruction', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'plague protocol', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 5, name: 'code geminate', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'net dispersal', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 6, name: 'spinning blades', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 6, name: 'triage program', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 7, name: 'mortar shells', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 7, name: 'recall', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 8, name: 'burning slash', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'swarming bulwark', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 9, name: 'disassemble', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'heavy metal', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
], hivePath);
