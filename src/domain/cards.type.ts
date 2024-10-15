import type { Enhancement, EnhancementSlot } from './enhancement/enhancement.type';

type SlotArea = {
  x: number;
  y: number;
  radius?: number
}

export enum CardStatus {
  'lost',
  'discarded',
  'inHand',
  'selected',
  'activeTop',
  'activeBottom',
}

export enum CardActions {
  'activeDiscard',
  'activeLost',
  'discard',
  'lose',
}

export type Card = {
  name: string;
  level: number | 'X';
  path: string;
  status: CardStatus;
  actions: {
    top: CardActions;
    bottom: CardActions;
  };
  slots?: SlotArea[];
  tokenPosition?: number;
  availableEnhancements?: EnhancementSlot[];
  enhancements?: Enhancement[];
}
