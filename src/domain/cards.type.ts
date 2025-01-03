import type { Enhancement, EnhancementSlot } from './enhancement/enhancement.type';

export interface SlotArea {
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

export interface Card {
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
