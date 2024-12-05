import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { pyroclastCards } from './cards';

export const pyroclast: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Pyroclast,
  handSize: 10,
  path: '/pyroclast/icons/fh-pyroclast-color-icon.svg',
  iconSize: { width: 450, height: 600 },
  cards: pyroclastCards,
};
