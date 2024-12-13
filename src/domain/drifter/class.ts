import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { drifterCards } from './cards';

export function isDrifter(frosthavenClass: FrosthavenClass<Card>): boolean {
  return frosthavenClass.name === 'Drifter';
}

export const drifter: FrosthavenClass<Card> = {
  name: 'Drifter',
  handSize: 12,
  path: '/drifter/icons/fh-drifter-color-icon.svg',
  iconSize: { width: 448, height: 600 },
  cards: drifterCards,
};
