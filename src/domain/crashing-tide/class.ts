import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { crashingTideCards } from './cards';

export const boneshaper: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.CrashingTide,
  handSize: 12,
  path: '/crashing-tide/icons/fh-crashing-tide-color-icon.webp',
  iconSize: { width: 60, height: 60 },
  cards: crashingTideCards,
};
