import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { painConduitCards } from './cards';

export const painConduit: FrosthavenClass<Card> = {
  name: 'Pain Conduit',
  handSize: 10,
  path: '/pain-conduit/icons/fh-pain-conduit-color-icon.svg',
  iconSize: { width: 630, height: 600 },
  cards: painConduitCards,
};
