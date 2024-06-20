import { type Card } from './cards.type';

export enum FrosthavenClassNames {
  BannerSpear = 'Banner Spear',
  Blinkblade = 'Blinkblade',
  Boneshaper = 'Boneshaper',
  Deathwalker = 'Deathwalker',
  Geminate = 'Geminate',
  Snowdancer = 'Snowdancer',
  Trapper = 'Trapper',
}

export type FrosthavenClass<X extends Card> = {
  name: FrosthavenClassNames;
  handSize: number;
  path: string;
  iconSize: { width: number; height: number };
  cards: X[];
}
