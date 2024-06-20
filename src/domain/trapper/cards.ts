import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const trapperPath = '/trapper/abilities';

export const trapperCards: Card[] = createCards([
  { level: 'X', name: 'dismantle', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'improvised improvement', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'spring loaded', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'boar catcher', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'caltrops', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'electrified net', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'enticing bait', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 1, name: 'exploding decoy', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'flurry of nails', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'furry facade', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'honeypot', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'spike pit', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'path of pain', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'unavoidable outcome', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 3, name: 'extra teeth', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'pyrotechnics', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 4, name: 'dangerous ground', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 4, name: 'stalkers spoils', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'lure of the snare', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'proficient hunter', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 6, name: 'cage of thorns', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 6, name: 'persistent pitfalls', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 7, name: 'foxhole', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 7, name: 'grasping hazards', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 8, name: 'magnetic shards', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'spike strip', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'dangerous cargo', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 9, name: 'mother of all traps', actions: { top: CardActions.discard, bottom: CardActions.discard } },
], trapperPath);