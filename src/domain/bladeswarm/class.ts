import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { bladeswarmCards } from './cards';

export const bladeswarm: FrosthavenClass<Card> = {
  name: 'Bladeswarm',
  handSize: 11,
  path: '/bladeswarm/icons/fh-bladeswarm-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: bladeswarmCards,
};
