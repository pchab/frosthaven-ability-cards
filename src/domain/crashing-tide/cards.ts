import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const crashingTidePath = '/crashing-tide/abilities';

export const crashingTideCards: Card[] = createCards([
  {
    level: 2,
    name: 'blood in the water',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    initiative: 53,
    availableEnhancements: [
      { type: 'diamond', position: { x: 46, y: 37 } },
      { type: 'square', position: { x: 91, y: 152 } },
    ],
  },
  {
    level: 4,
    name: 'chaotic refraction',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 26,
  },
  {
    level: 4,
    name: 'clean sweep',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    initiative: 65,
  },
  {
    level: 1,
    name: 'cleansing swell',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    initiative: 45,
  },
  {
    level: 1,
    name: 'crashing surge',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    initiative: 34,
  },
  {
    level: 1,
    name: 'cresting force',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    initiative: 87,
  },
  {
    level: 'X',
    name: 'crush armor',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    initiative: 42,
  },
  {
    level: 8,
    name: 'death on all sides',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 73,
  },
  {
    level: 1,
    name: 'down to the depths',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 74,
  },
  {
    level: 7,
    name: 'drown beneath the waves',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    initiative: 9,
  },
  {
    level: 7,
    name: 'dug in',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    initiative: 76,
  },
  {
    level: 8,
    name: 'ebb and flow',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    initiative: 24,
  },
  {
    level: 3,
    name: 'endless cycle',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    initiative: 8,
  },
  {
    level: 9,
    name: 'high tide',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    initiative: 90,
  },
  {
    level: 9,
    name: 'low tide',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    initiative: 10,
  },
  {
    level: 1,
    name: 'mighty claws',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    initiative: 23,
  },
  {
    level: 1,
    name: 'overwhelming wave',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    initiative: 86,
  },
  {
    level: 1,
    name: 'pool of power',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    initiative: 41,
  },
  {
    level: 6,
    name: 'powerful pincer',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 70,
  },
  {
    level: 1,
    name: 'rancid brine',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 62,
  },
  {
    level: 'X',
    name: 'rising flood',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    initiative: 49,
  },
  {
    level: 1,
    name: 'sharp chitin',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 25,
  },
  {
    level: 3,
    name: 'shuck',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.lose },
    initiative: 55,
  },
  {
    level: 1,
    name: 'skitter',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    initiative: 51,
  },
  {
    level: 2,
    name: 'smashing torrent',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    initiative: 79,
  },
  {
    level: 5,
    name: 'sodden soil',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    initiative: 17,
  },
  {
    level: 1,
    name: 'soft flesh',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 75,
  },
  {
    level: 1,
    name: 'submerge',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    initiative: 68,
  },
  {
    level: 5,
    name: 'tidal blast',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    initiative: 71,
  },
  {
    level: 6,
    name: 'twilight grasp',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    initiative: 33,
  },
  {
    level: 'X',
    name: 'undertow',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    initiative: 15,
  },
], crashingTidePath);
