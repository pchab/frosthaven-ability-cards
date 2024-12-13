import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { infuserCards } from './cards';

export const infuser: FrosthavenClass<Card> = {
  name: 'Infuser',
  handSize: 11,
  path: '/infuser/icons/fh-infuser-color-icon.svg',
  iconSize: { width: 522, height: 600 },
  cards: infuserCards,
};
