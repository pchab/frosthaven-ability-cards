import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const snowdancerPath = '/snowdancer/abilities';

export const snowdancerCards: Card[] = createCards([
  { level: 'X', name: 'blinding vortex', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 'X', name: 'the spirits call', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 'X', name: 'white winds', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'blizzard', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'chilling impact', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'cold therapy', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'cross winds', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'enticing breeze', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'frigid growth', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'gathering force', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'lifting gust', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 1, name: 'natures breath', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  {
    level: 1, name: 'snowball', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 29, y: 155 },
      { x: 58, y: 155 },
      { x: 88, y: 155 },
      { x: 44, y: 178 },
      { x: 74, y: 178 },
    ],
  },
  { level: 1, name: 'whiteout', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 2, name: 'birds in a tempest', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 2, name: 'tornado', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 3, name: 'cold snap', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'polar vortex', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 4, name: 'biting frost', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 4, name: 'zephyr barrier', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 5, name: 'shifting snow', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'whipping gale', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 6, name: 'frozen brand', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 6, name: 'refreshing flurry', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 7, name: 'freezing storm', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 7, name: 'storm wall', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 8, name: 'surging blow', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'the endless white', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  { level: 9, name: 'snowblind', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 9, name: 'winds of change', actions: { top: CardActions.lose, bottom: CardActions.discard } },
], snowdancerPath);
