import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { hiveCards } from './cards';

export const hive: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Hive,
  handSize: 11,
  path: '/hive/icons/fh-hive-color-icon.png',
  iconSize: { width: 37, height: 60 },
  cards: hiveCards,
};
