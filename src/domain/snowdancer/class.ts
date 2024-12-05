import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { snowdancerCards } from './cards';

export const snowdancer: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Snowdancer,
  handSize: 11,
  path: '/snowdancer/icons/fh-snowdancer-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: snowdancerCards,
};
