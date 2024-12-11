import type { Enhancement, EnhancementSlot } from './enhancement/enhancement.type';

export type SlotArea = {
  x: number;
  y: number;
  radius?: number
}

export type CardStatus =
  | 'inHand'
  | 'discarded'
  | 'lost'
  | 'selected'
  | 'activeTop'
  | 'activeBottom';

export type CardActions =
  | 'activeDiscard'
  | 'activeLost'
  | 'discard'
  | 'lose';

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
