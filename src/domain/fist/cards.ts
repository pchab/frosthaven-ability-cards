import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const fistPath = '/fist/abilities';

export const fistCards: Card[] = createCards([
  { level: 'X', name: 'freezing shell', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 'X', name: 'primal bellow', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'shard launch', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'cold boulder', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 1, name: 'encased punch', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 1, name: 'frost eruption', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'fury of the mountain', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard} },
  { level: 1, name: 'ice blast', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'one with the mountain', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'piercing pummel', actions: { top: CardActions.activeDiscard, bottom: CardActions.lose } },
  { level: 1, name: 'voice from below', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 2, name: 'crushing crystals', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'draw of the bedrock', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard } },
  { level: 3, name: 'frozen over', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 3, name: 'lacerating eruption', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'packed solid', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 4, name: 'the mountains fist', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'ice uppercut', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'preserved fury', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 6, name: 'glacier slam', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 6, name: 'thick frost', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 7, name: 'gift of the mountain', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost } },
  { level: 7, name: 'seeing stars', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'draw strength', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'shattering blow', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 9, name: 'bring down the mountain', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 9, name: 'frozen spike', actions: { top: CardActions.discard, bottom: CardActions.discard } },
], fistPath);
