import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { shattersongCards } from './cards';

export const shattersong: FrosthavenClass<Card> = {
  name: 'Shattersong',
  handSize: 10,
  path: '/shattersong/icons/fh-shattersong-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: shattersongCards,
};
