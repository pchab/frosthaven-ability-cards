import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { hiveCards } from './cards';

export const hive: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Hive,
  handSize: 11,
  path: '/hive/icons/fh-hive-color-icon.svg',
  iconSize: { width: 370, height: 600 },
  cards: hiveCards,
};
