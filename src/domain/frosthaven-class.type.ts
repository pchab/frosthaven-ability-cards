import { type Card } from './cards.type';

export enum FrosthavenClassNames {
  BannerSpear = 'Banner Spear',
  Blinkblade = 'Blinkblade',
  Boneshaper = 'Boneshaper',
  Deathwalker = 'Deathwalker',
  Deepwraith = 'Deepwraith',
  Drifter = 'Drifter',
  Fist = 'Fist',
  Geminate = 'Geminate',
  Hive = 'Hive',
  PainConduit = 'Pain Conduit',
  Pyroclast = 'Pyroclast',
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
