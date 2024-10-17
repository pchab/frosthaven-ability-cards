import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const painConduitPath = '/pain-conduit/abilities';

export const painConduitCards: Card[] = createCards([
  { level: 'X', name: 'delayed malady', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 153 },
      { x: 67, y: 153 },
      { x: 97, y: 153 },
      { x: 53, y: 177 },
      { x: 83, y: 177 },
    ],
  },
  { level: 'X', name: 'pleasure in pain', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'unstable effigy', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'blood ritual', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 1, name: 'cleansing fire', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'explosive wounds', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'line of transference', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'scarred effigy', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 1, name: 'shared affliction', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 1, name: 'swift vengeance', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'the agony of others', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 160 },
      { x: 67, y: 160 },
      { x: 97, y: 160 },
    ],
  },
  { level: 1, name: 'transferred injury', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'unending torment', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 2, name: 'infection purge', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 2, name: 'reversal of fate', actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    slots: [
      { x: 69, y: 165 },
    ],
  },
  { level: 3, name: 'burned at both ends', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'reprisal', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 4, name: 'down to the dirt', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 4, name: 'mirrored misery', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 5, name: 'chained by despair', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 5, name: 'chained by spite', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
  { level: 6, name: 'hopelessness', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 6, name: 'phantom limb', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 7, name: 'penance', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  { level: 7, name: 'reject the gift', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard } },
  { level: 8, name: 'wave of anguish', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'wracked with pain', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 9, name: 'redemption', actions: { top: CardActions.activeLost, bottom: CardActions.discard } },
  { level: 9, name: 'the end of everything', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard } },
], painConduitPath);
