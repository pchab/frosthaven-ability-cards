import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { boneshaperCards } from './cards';

export const boneshaper: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Boneshaper,
  handSize: 12,
  path: '/boneshaper/icons/fh-boneshaper-color-icon.svg',
  iconSize: { width: 482, height: 600 },
  cards: boneshaperCards,
};
