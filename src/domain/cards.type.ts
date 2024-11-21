import type { Enhancement, EnhancementSlot } from './enhancement/enhancement.type';

export type SlotArea = {
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
  initiative: number;
  slots?: SlotArea[];
  tokenPosition?: number;
  availableEnhancements?: EnhancementSlot[];
  enhancements?: (Enhancement | undefined)[];
}
