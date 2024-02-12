export enum CardStatus {
  'lost',
  'discarded',
  'inHand',
  'selected',
  'active',
}

export type Card = {
  level: number | 'X';
  path: string;
  status: CardStatus;
}
