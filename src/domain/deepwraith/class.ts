import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { deepwraithCards } from './cards';

export const deepwraith: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Deepwraith,
  handSize: 10,
  path: '/deepwraith/icons/fh-deepwraith-color-icon.png',
  iconSize: { width: 48, height: 60 },
  cards: deepwraithCards,
};
