type EnhancementType = 'circle' | 'square' | 'diamond' | 'diamondPlus' | 'hex' | 'summonSquare';
export type Enhancement = 'jump'
  | 'plus-one'
  | 'air'
  | 'dark'
  | 'earth'
  | 'fire'
  | 'ice'
  | 'light'
  | 'wild'
  | 'curse'
  | 'immobilize'
  | 'muddle'
  | 'poison'
  | 'wound'
  | 'bless'
  | 'regenerate'
  | 'strengthen'
  | 'ward'
  | 'hex-attack';

export interface EnhancementSlot {
  type: EnhancementType;
  position: { x: number; y: number; size?: number; };
}
