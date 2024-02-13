import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const deathwalkerPath = '/deathwalker/abilities';

export const deathwalkerCards: Card[] = createCards([
  { level: 'X', name: 'forceful spirits', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'rest in the shade', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 'X', name: 'wave of anguish', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'anger of the dead', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'black barrage', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'call of doom', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'call to the abyss', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'dark fog', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'eclipse', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'fluid night', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'lingering rot', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'shadow step', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 1, name: 'strength of the abyss', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'sunless apparition', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 2, name: 'deepening despair', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 2, name: 'restless spirits', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'dead bolt', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'ritual sacrifice', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 4, name: 'fleeting dusk', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 4, name: 'pulled across', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 5, name: 'dominate', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'medium', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 6, name: 'the night takes shape', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 6, name: 'vengeful storm', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 7, name: 'hungry grasps', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 7, name: 'proliferation of the abyss', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 8, name: 'frozen in fear', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 8, name: 'lashing tendrils', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 9, name: 'black lance', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'when your time comes', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost } },
], deathwalkerPath);
