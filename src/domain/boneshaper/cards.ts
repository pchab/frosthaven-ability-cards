import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const boneshaperPath = '/boneshaper/abilities';

export const boneshaperCards: Card[] = createCards([
  { level: 'X', name: 'approach oblivion', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'exploding corpse', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'wrath of the turned earth', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'angry spirits', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'command the wretched', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'damned horde', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'dark tidings', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'decaying will', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'eternal torment', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'fell remedy', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'flow of the black river', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'life in death', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'malicious conversion', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'returned servant', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'transfer of essence', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'unearthed horror', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'bone dagger', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'grave digging', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'putrid cloud', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'critical failure', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'flesh shield', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'solid bones', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'unforgivable methods', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 6, name: 'rotting multitude', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 6, name: 'twisted decree', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 7, name: 'recycled limbs', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 7, name: 'soul claim', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'endless numbers', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'wailing from beyond', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'behold the shrouded sun', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'unholy prowess', actions: { top: CardActions.discard, bottom: CardActions.discard } },
], boneshaperPath);
