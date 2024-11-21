import type { Card } from '../cards.type';
import { type FrosthavenClass, FrosthavenClassNames } from '../frosthaven-class.type';
import { GeminateCard, geminateCards } from './cards';

export function isGeminate(frosthavenClass: FrosthavenClass<Card>): frosthavenClass is FrosthavenClass<GeminateCard> {
  return frosthavenClass.name === FrosthavenClassNames.Geminate;
}

export function isGeminateCards(fhClass: FrosthavenClass<Card>, cards: Card[]): cards is GeminateCard[] {
  return isGeminate(fhClass);
}

export const geminate: FrosthavenClass<GeminateCard> = {
  name: FrosthavenClassNames.Geminate,
  handSize: 14,
  path: '/geminate/icons/fh-geminate-color-icon.webp',
  iconSize: { width: 58, height: 60 },
  cards: geminateCards,
};
