import { type Card } from './cards.type';
import { GeminateCard, geminateCards } from './geminate/cards';

type FrosthavenClassNames = 'Geminate';
export type FrosthavenClass<X extends Card> = {
  name: FrosthavenClassNames;
  handSize: number;
  path: string;
  cards: X[];
}

export function isGeminate(frosthavenClass: FrosthavenClass<Card>): frosthavenClass is FrosthavenClass<GeminateCard> {
  return frosthavenClass.name === 'Geminate';
}

export const frosthavenClasses: FrosthavenClass<Card>[] = [{
  name: 'Geminate',
  handSize: 7,
  path: '/geminate/icons/fh-geminate-color-icon.png',
  cards: geminateCards,
}];
