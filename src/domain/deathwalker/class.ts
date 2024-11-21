import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { deathwalkerCards } from './cards';

export const deathwalker: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Deathwalker,
  handSize: 11,
  path: '/deathwalker/icons/fh-deathwalker-color-icon.webp',
  iconSize: { width: 36, height: 60 },
  cards: deathwalkerCards,
};
