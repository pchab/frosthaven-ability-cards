import { type Card } from './cards.type';

export enum FrosthavenClassNames {
  BannerSpear = 'Banner Spear',
  Boneshaper = 'Boneshaper',
  Deathwalker = 'Deathwalker',
  Geminate = 'Geminate',
}

export type FrosthavenClass<X extends Card> = {
  name: FrosthavenClassNames;
  handSize: number;
  path: string;
  iconSize: { width: number; height: number };
  cards: X[];
}
