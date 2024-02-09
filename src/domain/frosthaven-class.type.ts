import { type Card } from './cards.type';
import { geminate } from './geminate/class';

export enum FrosthavenClassNames {
  Geminate = 'Geminate',
}
export type FrosthavenClass<X extends Card> = {
  name: FrosthavenClassNames;
  handSize: number;
  path: string;
  cards: X[];
}

export const frosthavenClasses: FrosthavenClass<Card>[] = [geminate];
