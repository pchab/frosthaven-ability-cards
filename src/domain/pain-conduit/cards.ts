import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const painConduitPath = '/pain-conduit/abilities';

export const painConduitCards: Card[] = createCards([
  {
    level: 'X',
    name: 'delayed malady',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 153 },
      { x: 67, y: 153 },
      { x: 97, y: 153 },
      { x: 53, y: 177 },
      { x: 83, y: 177 },
    ],
  },
  {
    level: 'X',
    name: 'pleasure in pain',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 41, y: 58 }, },
      { type: 'circle', position: { x: 90, y: 129 }, },
      { type: 'diamond', position: { x: 49, y: 155 }, },
    ],
  },
  {
    level: 'X',
    name: 'unstable effigy',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 62, y: 48 }, },
      { type: 'summonSquare', position: { x: 87, y: 48 }, },
      { type: 'summonSquare', position: { x: 62, y: 67 }, },
    ],
  },
  {
    level: 1,
    name: 'blood ritual',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 72, y: 46 }, },
    ],
  },
  {
    level: 1,
    name: 'cleansing fire',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 66, y: 40 }, },
      { type: 'circle', position: { x: 91, y: 152 }, },
    ],
  },
  {
    level: 1,
    name: 'explosive wounds',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 138 }, },
    ],
  },
  {
    level: 1,
    name: 'line of transference',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 62, y: 35 }, },
      { type: 'circle', position: { x: 91, y: 151 }, },
    ],
  },
  {
    level: 1,
    name: 'scarred effigy',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 61, y: 41 }, },
      { type: 'summonSquare', position: { x: 86, y: 41 }, },
      { type: 'summonSquare', position: { x: 61, y: 60 }, },
      { type: 'circle', position: { x: 90, y: 140 }, },
      { type: 'square', position: { x: 90, y: 168 }, },
    ],
  },
  {
    level: 1,
    name: 'shared affliction',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 130 }, },
    ],
  },
  {
    level: 1,
    name: 'swift vengeance',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 95, y: 47 }, },
      { type: 'circle', position: { x: 89, y: 132 }, },
    ],
  },
  {
    level: 1,
    name: 'the agony of others',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 160 },
      { x: 67, y: 160 },
      { x: 97, y: 160 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 46 }, },
    ],
  },
  {
    level: 1,
    name: 'transferred injury',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 87, y: 27 }, },
      { type: 'square', position: { x: 89, y: 74 }, },
      { type: 'circle', position: { x: 70, y: 140 }, },
    ],
  },
  {
    level: 1,
    name: 'unending torment',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 71, y: 42 }, },
      { type: 'square', position: { x: 71, y: 138 }, },
    ],
  },
  {
    level: 2,
    name: 'infection purge',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
  },
  {
    level: 2,
    name: 'reversal of fate',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    slots: [
      { x: 69, y: 165 },
    ],
    availableEnhancements: [
      { type: 'diamond', position: { x: 64, y: 44 }, },
      { type: 'diamond', position: { x: 66, y: 71 }, },
    ],
  },
  {
    level: 3,
    name: 'burned at both ends',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 131 }, },
    ],
  },
  {
    level: 3,
    name: 'reprisal',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 61 }, },
      { type: 'circle', position: { x: 91, y: 165 }, },
    ],
  },
  {
    level: 4,
    name: 'down to the dirt',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 42 }, },
      { type: 'circle', position: { x: 90, y: 134 }, },
    ],
  },
  {
    level: 4,
    name: 'mirrored misery',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 130 }, },
    ],
  },
  {
    level: 5,
    name: 'chained by despair',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 131 }, },
    ],
  },
  {
    level: 5,
    name: 'chained by spite',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 135 }, },
      { type: 'square', position: { x: 71, y: 157 }, },
    ],
  },
  {
    level: 6,
    name: 'hopelessness',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 137 }, },
    ],
  },
  {
    level: 6,
    name: 'phantom limb',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 34 }, },
      { type: 'circle', position: { x: 61, y: 132 }, },
    ],
  },
  {
    level: 7,
    name: 'penance',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 131 }, },
      { type: 'square', position: { x: 70, y: 153 }, },
    ],
  },
  {
    level: 7,
    name: 'reject the gift',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 89, y: 134 }, },
    ],
  },
  {
    level: 8,
    name: 'wave of anguish',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 32 }, },
      { type: 'square', position: { x: 97, y: 32 }, },
      { type: 'diamond', position: { x: 72, y: 158 }, },
    ],
  },
  {
    level: 8,
    name: 'wracked with pain',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 71, y: 142 }, },
    ],
  },
  {
    level: 9,
    name: 'redemption',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
  },
  {
    level: 9,
    name: 'the end of everything',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
  },
], painConduitPath);
