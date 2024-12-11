import { type Card } from './cards.type';

export type Identity = number;

export type FrosthavenClassNames =
  | 'Banner Spear'
  | 'Blinkblade'
  | 'Boneshaper'
  | 'Deathwalker'
  | 'Deepwraith'
  | 'Drifter'
  | 'Frozen Fist'
  | 'Geminate'
  | 'Crashing Tide'
  | 'Hive'
  | 'Infuser'
  | 'Metal Mosaic'
  | 'Pain Conduit'
  | 'Pyroclast'
  | 'Snowdancer'
  | 'Trapper';

export type FrosthavenClass<X extends Card> = {
  name: FrosthavenClassNames;
  handSize: number;
  path: string;
  iconSize: { width: number; height: number };
  cards: X[];
}
