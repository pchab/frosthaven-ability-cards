import type { HoverCircleArea } from '@/app/_components/cards/hover-area';

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
  slots?: HoverCircleArea[];
  tokenPosition?: number;
}
