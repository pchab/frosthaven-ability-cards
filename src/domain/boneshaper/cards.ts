import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const boneshaperPath = '/boneshaper/abilities';

export const boneshaperCards: Card[] = createCards([
  { level: 'X', name: 'approach oblivion', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 'X', name: 'exploding corpse', actions: { top: CardActions.lose, bottom: CardActions.activeDiscard } },
  { level: 'X', name: 'wrath of the turned earth', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'angry spirits', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'command the wretched', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 1, name: 'damned horde', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 1, name: 'dark tidings', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'decaying will', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 1, name: 'eternal torment', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'fell remedy', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'flow of the black river', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'life in death', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost } },
  { level: 1, name: 'malicious conversion', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'returned servant', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 1, name: 'transfer of essence', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'bone dagger', actions: { top: CardActions.lose, bottom: CardActions.activeDiscard } },
  { level: 2, name: 'unearthed horror', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 3, name: 'grave digging', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 3, name: 'putrid cloud', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 4, name: 'critical failure', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 4, name: 'flesh shield', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard } },
  { level: 5, name: 'solid bones', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 5, name: 'unforgivable methods', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 6, name: 'rotting multitude', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 6, name: 'twisted decree', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 7, name: 'recycled limbs', actions: { top: CardActions.lose, bottom: CardActions.activeDiscard } },
  { level: 7, name: 'soul claim', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard } },
  { level: 8, name: 'endless numbers', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 8, name: 'wailing from beyond', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'behold the shrouded sun', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 9, name: 'unholy prowess', actions: { top: CardActions.activeLost, bottom: CardActions.activeLost } },
], boneshaperPath);
