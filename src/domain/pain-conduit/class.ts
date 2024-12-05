import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { painConduitCards } from './cards';

export const painConduit: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.PainConduit,
  handSize: 10,
  path: '/pain-conduit/icons/fh-pain-conduit-color-icon.svg',
  iconSize: { width: 630, height: 600 },
  cards: painConduitCards,
};
