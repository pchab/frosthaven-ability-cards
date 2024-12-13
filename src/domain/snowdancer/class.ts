import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { snowdancerCards } from './cards';

export const snowdancer: FrosthavenClass<Card> = {
  name: 'Snowdancer',
  handSize: 11,
  path: '/snowdancer/icons/fh-snowdancer-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: snowdancerCards,
};
