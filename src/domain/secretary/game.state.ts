export type Figure = {
  name: string;
  title?: string;
  active: boolean;
  off: boolean;
  [key: string]: any;
}

export type CharacterState = Figure & {
  initiative: number;
  title: string;
  identity: number;
};

export type GameState = {
  [key: string]: any;
  characters: CharacterState[];
  monsters: Figure[];
  figures: string[];
  revision: number;
  state: 'draw' | 'next';
};
