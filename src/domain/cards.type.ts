export enum CardStatus {
  'lost',
  'discarded',
  'inHand',
  'selected',
  'active',
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
}
