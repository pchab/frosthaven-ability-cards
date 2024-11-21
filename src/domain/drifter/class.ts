import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { drifterCards } from './cards';

export function isDrifter(frosthavenClass: FrosthavenClass<Card>): boolean {
  return frosthavenClass.name === FrosthavenClassNames.Drifter;
}

export const drifter: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Drifter,
  handSize: 12,
  path: '/drifter/icons/fh-drifter-color-icon.webp',
  iconSize: { width: 45, height: 60 },
  cards: drifterCards,
};
