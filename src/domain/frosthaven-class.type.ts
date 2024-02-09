import { bannerSpear } from './banner-spear/class';
import { type Card } from './cards.type';
import { geminate } from './geminate/class';

export enum FrosthavenClassNames {
  Geminate = 'Geminate',
  BannerSpear = 'Banner Spear',
}

export type FrosthavenClass<X extends Card> = {
  name: FrosthavenClassNames;
  handSize: number;
  path: string;
  iconSize: { width: number; height: number };
  cards: X[];
}
