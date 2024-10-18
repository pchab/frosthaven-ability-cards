import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { trapperCards } from './cards';

export const trapper: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Trapper,
  handSize: 11,
  path: '/trapper/icons/fh-trapper-color-icon.png',
  iconSize: { width: 60, height: 60 },
  cards: trapperCards,
};
