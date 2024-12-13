import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { crashingTideCards } from './cards';

export const crashingTide: FrosthavenClass<Card> = {
  name: 'Crashing Tide',
  handSize: 12,
  path: '/crashing-tide/icons/fh-crashing-tide-color-icon.svg',
  iconSize: { width: 595, height: 600 },
  cards: crashingTideCards,
};
