export interface Figure {
  name: string;
  title?: string;
  active: boolean;
  off: boolean;
  [key: string]: unknown;
}

export interface CharacterState extends Figure {
  initiative: number;
  title: string;
  identity: number;
}

export interface GameState {
  [key: string]: unknown;
  characters: CharacterState[];
  monsters: Figure[];
  figures: string[];
  playSeconds: number;
  revision: number;
  state: 'draw' | 'next';
}
