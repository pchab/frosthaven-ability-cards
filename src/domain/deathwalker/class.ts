import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { deathwalkerCards } from './cards';

export const deathwalker: FrosthavenClass<Card> = {
  name: 'Deathwalker',
  handSize: 11,
  path: '/deathwalker/icons/fh-deathwalker-color-icon.svg',
  iconSize: { width: 356, height: 600 },
  cards: deathwalkerCards,
};
