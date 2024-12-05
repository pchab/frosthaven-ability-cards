import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { fistCards } from './cards';

export const frozenFist: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.FrozenFist,
  handSize: 8,
  path: '/frozen-fist/icons/fh-frozen-fist-color-icon.svg',
  iconSize: { width: 600, height: 533 },
  cards: fistCards,
};
