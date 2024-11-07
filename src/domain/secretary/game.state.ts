export enum BlinkbladeSpeed {
  SLOW,
  FAST,
}

export type CharacterState = {
  name: string;
  initiative: number;
  identity: BlinkbladeSpeed;
  [key: string]: any;
};

export type GameState = {
  [key: string]: any;
  characters: CharacterState[];
};
