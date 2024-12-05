import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { trapperCards } from './cards';

export const trapper: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Trapper,
  handSize: 9,
  path: '/trapper/icons/fh-trapper-color-icon.svg',
  iconSize: { width: 600, height: 577 },
  cards: trapperCards,
};
