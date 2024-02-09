export enum CardStatus {
  'lost',
  'discarded',
  'inHand',
  'selected',
}

export type Card = {
  level: number | 'X';
  path: string;
  status: CardStatus;
}
