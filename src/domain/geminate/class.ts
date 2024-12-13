import type { Card } from '../cards.type';
import { type FrosthavenClass } from '../frosthaven-class.type';
import { GeminateCard, geminateCards } from './cards';

export function isGeminate(frosthavenClass: FrosthavenClass<Card>): frosthavenClass is FrosthavenClass<GeminateCard> {
  return frosthavenClass.name === 'Geminate';
}

export function isGeminateCards(fhClass: FrosthavenClass<Card>, cards: Card[]): cards is GeminateCard[] {
  return isGeminate(fhClass);
}

export const geminate: FrosthavenClass<GeminateCard> = {
  name: 'Geminate',
  handSize: 14,
  path: '/geminate/icons/fh-geminate-color-icon.svg',
  iconSize: { width: 582, height: 600 },
  cards: geminateCards,
};
