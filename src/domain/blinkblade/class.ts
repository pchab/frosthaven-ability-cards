import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { blinkbladeCards } from './cards';

export function isBlinkblade(fhClass: FrosthavenClass<Card>): boolean {
  return fhClass.name === 'Blinkblade';
}

export type BlinkbladeSpeed = 'slow' | 'fast';
export const speeds: BlinkbladeSpeed[] = ['slow', 'fast'] as const;

export const blinkblade: FrosthavenClass<Card> = {
  name: 'Blinkblade',
  handSize: 10,
  path: '/blinkblade/icons/fh-blinkblade-color-icon.svg',
  iconSize: { width: 600, height: 487 },
  cards: blinkbladeCards,
};
