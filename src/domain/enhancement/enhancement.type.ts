type EnhancementType = 'circle' | 'square' | 'diamond' | 'diamondPlus' | 'hex' | 'summonSquare';

export type Enhancement = {
  type: EnhancementType;
  name: string;
}

export type EnhancementSlot = {
  type: EnhancementType;
  position: { x: number; y: number; size?: number; };
}
