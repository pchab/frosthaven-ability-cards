import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { blinkbladeCards } from './cards';

export function isBlinkblade(fhClass: FrosthavenClass<Card>): boolean {
  return fhClass.name === FrosthavenClassNames.Blinkblade;
}

export enum BlinkbladeSpeed {
  SLOW,
  FAST,
}

export const blinkblade: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.Blinkblade,
  handSize: 10,
  path: '/blinkblade/icons/fh-blinkblade-color-icon.svg',
  iconSize: { width: 600, height: 487 },
  cards: blinkbladeCards,
};
