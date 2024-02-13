import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const bannerSpearPath = '/banner-spear/abilities';

export const bannerSpearCards: Card[] = createCards([
  { level: 'X', name: 'driving inspiration', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 'X', name: 'incendiary throw', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 'X', name: 'resolved courage', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'at all costs', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'combined effort', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'deflecting maneuver', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'javelin', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'pincer movement', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'rallying cry', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'regroup', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'set for the charge', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 1, name: 'tip of the spear', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'unbreakable wall', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 2, name: 'meat grinder', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'pinning charge', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'head of the hammer', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 3, name: 'let them come', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 4, name: 'air support', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 4, name: 'boldening blow', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'explosive epicenter', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 5, name: 'hold the line', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost } },
  { level: 6, name: 'barricade', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost } },
  { level: 6, name: 'bolstering shout', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 7, name: 'lead from afar', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 7, name: 'tri thrust', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'sweeping aid', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'taunting howl', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 9, name: 'hail of spears', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 9, name: 'take no prisoners', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
], bannerSpearPath);
