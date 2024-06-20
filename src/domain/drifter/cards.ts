import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const drifterPath = '/drifter/abilities';

export const drifterCards: Card[] = createCards([
  { level: 6, name: 'accurate strikes', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 8, name: 'against all odds', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'bloodletting', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'break through', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'chunk of flesh', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 6, name: 'consume stamina', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'continuous health', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'crushing weight', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'deadly shot', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'destructive fury', actions: { top: CardActions.lose, bottom: CardActions.lose } },
  { level: 1, name: 'draining arrows', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'dual bow', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 2, name: 'ever forward', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'everlasting', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 3, name: 'fierce barrage', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 'X', name: 'fortitude', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 4, name: 'gift of the prey', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'inevitable conclusion', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 7, name: 'like the wind', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 'X', name: 'no remorse', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 1, name: 'precision aim', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'prudent preparation', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 1, name: 'relentless', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 2, name: 'shockwave', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 5, name: 'survivalist', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'sustained momentum', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'unbreakable', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 7, name: 'unending fight', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 9, name: 'use every part', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'vile assault', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'violent inheritance', actions: { top: CardActions.discard, bottom: CardActions.lose } },
], drifterPath);
