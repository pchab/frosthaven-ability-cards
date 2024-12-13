import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { bannerSpearCards } from './cards';

export const bannerSpear: FrosthavenClass<Card> = {
  name: 'Banner Spear',
  handSize: 10,
  path: '/banner-spear/icons/fh-banner-spear-color-icon.svg',
  iconSize: { width: 183, height: 600 },
  cards: bannerSpearCards,
};
