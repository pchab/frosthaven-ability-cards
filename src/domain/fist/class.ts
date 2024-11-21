import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { fistCards } from './cards';

export const fist: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Fist,
  handSize: 8,
  path: '/fist/icons/fh-fist-color-icon.webp',
  iconSize: { width: 60, height: 60 },
  cards: fistCards,
};
