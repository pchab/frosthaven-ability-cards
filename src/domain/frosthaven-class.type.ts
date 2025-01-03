import { type Card } from './cards.type';

export type FrosthavenClassNames =
  | 'Banner Spear'
  | 'Bladeswarm'
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
  | 'Shattersong'
  | 'Snowdancer'
  | 'Trapper';

export interface FrosthavenClass<X extends Card> {
  name: FrosthavenClassNames;
  handSize: number;
  path: string;
  iconSize: { width: number; height: number };
  cards: X[];
}
