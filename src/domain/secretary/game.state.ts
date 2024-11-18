import type { GeminateForm } from '../geminate/cards';

export enum BlinkbladeSpeed {
  SLOW,
  FAST,
}

export type CharacterState = {
  name: string;
  initiative: number;
  identity: BlinkbladeSpeed | GeminateForm;
  [key: string]: any;
};

export type GameState = {
  [key: string]: any;
  characters: CharacterState[];
};
