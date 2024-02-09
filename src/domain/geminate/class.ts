import { Card } from '../cards.type';
import { FrosthavenClass, FrosthavenClassNames } from '../frosthaven-class.type';
import { GeminateCard, geminateCards } from './cards';

export function isGeminate(frosthavenClass: FrosthavenClass<Card>): frosthavenClass is FrosthavenClass<GeminateCard> {
  return frosthavenClass.name === FrosthavenClassNames.Geminate;
}

export const geminate = {
  name: FrosthavenClassNames.Geminate,
  handSize: 7,
  path: '/geminate/icons/fh-geminate-color-icon.png',
  iconSize: { width: 58, height: 60 },
  cards: geminateCards,
};
