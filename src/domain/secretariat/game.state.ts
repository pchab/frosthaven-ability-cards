export type CharacterState = {
  name: string;
  initiative: number;
  [key: string]: any;
};

export type GameState = {
  [key: string]: any;
  characters: CharacterState[];
};
