type EnhancementType = 'circle' | 'square' | 'diamond' | 'hex';

export type Enhancement = {
  type: EnhancementType;
  name: string;
}

export type EnhancementSlot = {
  type: EnhancementType;
  position: { x: number; y: number; };
}
