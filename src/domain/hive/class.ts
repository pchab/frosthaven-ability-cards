import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { hiveCards } from './cards';

export function isHive(frosthavenClass: FrosthavenClass<Card>): boolean {
  return frosthavenClass.name === 'Hive';
}

export const hive: FrosthavenClass<Card> = {
  name: 'Hive',
  handSize: 11,
  path: '/hive/icons/fh-hive-color-icon.svg',
  iconSize: { width: 370, height: 600 },
  cards: hiveCards,
};
