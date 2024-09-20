import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const deepwraithPath = '/deepwraith/abilities';

export const deepwraithCards: Card[] = createCards([
  { level: 'X', name: 'haunting brutality', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 'X', name: 'morbid camouflage', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'soul hunger', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'black scythe', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'hollow aura', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'ink cloud', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 1, name: 'lacerating stabs', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'mantle of dread', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'skewer the flesh', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'skull collection', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'staring into the abyss', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'succumb to fear', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'tumultuous panic', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 2, name: 'lie in wait', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'slipping into death', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'crippling terror', actions: { top: CardActions.lose, bottom: CardActions.activeDiscard } },
  { level: 3, name: 'pinning spines', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 4, name: 'crushing darkness', actions: { top: CardActions.discard, bottom: CardActions.discard} },
  { level: 4, name: 'grim trophies', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'death spiral', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard } },
  { level: 5, name: 'extra decoration', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 6, name: 'claw of doom', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 6, name: 'the remorseless deep', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 7, name: 'dire frenzy', actions: { top: CardActions.discard, bottom: CardActions.discard} },
  { level: 7, name: 'hasten the end', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 8, name: 'rip from the bone', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'unseen horror', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 9, name: 'black night of the deep', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'consume the helpless', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
], deepwraithPath);
