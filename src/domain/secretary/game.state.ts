import type { GeminateForm } from '../geminate/cards';

export enum BlinkbladeSpeed {
  SLOW,
  FAST,
}

export type Figure = {
  name: string;
  active: boolean;
  off: boolean;
  [key: string]: any;
}

export type CharacterState = Figure & {
  initiative: number;
  identity: BlinkbladeSpeed | GeminateForm;
};

export type GameState = {
  [key: string]: any;
  characters: CharacterState[];
  monsters: Figure[];
  figures: string[];
  revision: number;
};
