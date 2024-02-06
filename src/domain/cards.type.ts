export enum CardStatus {
  'lost',
  'discarded',
  'normal',
}

export type Card = {
  level: number | 'X';
  path: string;
  status: CardStatus;
}
