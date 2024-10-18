import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { bannerSpearCards } from './cards';

export const bannerSpear: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.BannerSpear,
  handSize: 10,
  path: '/banner-spear/icons/fh-banner-spear-color-icon.png',
  iconSize: { width: 18, height: 60 },
  cards: bannerSpearCards,
};
