import { type Card } from './cards.type';
import { geminateCards } from './geminate/cards';

type FrosthavenClassNames = 'geminate';
export type FrosthavenClass<X extends Card> = {
  name: string;
  handSize: number;
  path: string;
  cards: X[];
}

export const frosthavenClasses: Record<FrosthavenClassNames, FrosthavenClass<Card>> = {
  geminate: {
    name: 'Geminate',
    handSize: 7,
    path: '/geminate/icons/fh-geminate-bw-icon.png',
    cards: geminateCards,
  },
};
