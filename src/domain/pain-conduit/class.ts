import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { painConduitCards } from './cards';

export const painConduit: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.PainConduit,
  handSize: 10,
  path: '/pain-conduit/icons/fh-pain-conduit-color-icon.svg',
  iconSize: { width: 63, height: 60 },
  cards: painConduitCards,
};
