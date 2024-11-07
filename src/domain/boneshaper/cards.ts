import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const boneshaperPath = '/boneshaper/abilities';

export const boneshaperCards: Card[] = createCards([
  {
    level: 'X',
    name: 'approach oblivion',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 46, y: 37 } },
      { type: 'square', position: { x: 91, y: 152 } },
    ],
    initiative: 53,
  },
  {
    level: 'X',
    name: 'exploding corpse',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 41, y: 50 } },
    ],
    initiative: 21,
  },
  {
    level: 'X',
    name: 'wrath of the turned earth',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 37, y: 158 },
      { x: 67, y: 158 },
      { x: 97, y: 158 },
    ],
    initiative: 80,
  },
  {
    level: 1,
    name: 'angry spirits',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    slots: [
      { x: 71, y: 167 },
    ],
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 65, y: 49 } },
      { type: 'summonSquare', position: { x: 99, y: 49 } },
      { type: 'summonSquare', position: { x: 99, y: 64 } },
    ],
    initiative: 76,
  },
  {
    level: 1,
    name: 'command the wretched',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
    initiative: 83,
  },
  {
    level: 1,
    name: 'damned horde',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 71, y: 43 } },
      { type: 'summonSquare', position: { x: 115, y: 43 } },
      { type: 'summonSquare', position: { x: 71, y: 58 } },
      { type: 'square', position: { x: 71, y: 151 } },
      { type: 'square', position: { x: 106, y: 151 } },
    ],
    initiative: 71,
  },
  {
    level: 1,
    name: 'dark tidings',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 152 } },
    ],
    initiative: 43,
  },
  {
    level: 1,
    name: 'decaying will',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 65, y: 41 } },
    ],
    initiative: 46,
  },
  {
    level: 1,
    name: 'eternal torment',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    initiative: 70,
  },
  {
    level: 1,
    name: 'fell remedy',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 57, y: 43 } },
    ],
    initiative: 30,
  },
  {
    level: 1,
    name: 'flow of the black river',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 135 } },
      { type: 'square', position: { x: 91, y: 168 } },
    ],
    initiative: 18,
  },
  {
    level: 1, name: 'life in death',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost },
    slots: [
      { x: 37, y: 159 },
      { x: 67, y: 159 },
      { x: 97, y: 159 },
    ],
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 71, y: 43 } },
      { type: 'summonSquare', position: { x: 115, y: 43 } },
      { type: 'summonSquare', position: { x: 71, y: 58 } },
    ],
    initiative: 91,
  },
  {
    level: 1,
    name: 'malicious conversion',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 33 } },
    ],
    initiative: 26,
  },
  {
    level: 1,
    name: 'returned servant',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 71, y: 43 } },
      { type: 'summonSquare', position: { x: 115, y: 43 } },
      { type: 'summonSquare', position: { x: 71, y: 58 } },
      { type: 'circle', position: { x: 90, y: 151 } },
    ],
    initiative: 81,
  },
  {
    level: 1,
    name: 'transfer of essence',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    initiative: 62,
  },
  {
    level: 2,
    name: 'bone dagger',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 46 } },
      { type: 'square', position: { x: 88, y: 126 } },
    ],
    initiative: 29,
  },
  {
    level: 2,
    name: 'unearthed horror',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 71, y: 48 } },
      { type: 'summonSquare', position: { x: 115, y: 48 } },
      { type: 'summonSquare', position: { x: 71, y: 64 } },
    ],
    initiative: 94,
  },
  {
    level: 3,
    name: 'grave digging',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 71, y: 43 } },
      { type: 'summonSquare', position: { x: 115, y: 43 } },
      { type: 'summonSquare', position: { x: 71, y: 59 } },
    ],
    initiative: 96,
  },
  {
    level: 3,
    name: 'putrid cloud',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    initiative: 28,
  },
  {
    level: 4,
    name: 'critical failure',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    initiative: 95,
  },
  {
    level: 4,
    name: 'flesh shield',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    slots: [
      { x: 72, y: 176 },
    ],
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 89, y: 71 } },
    ],
    initiative: 16,
  },
  {
    level: 5,
    name: 'solid bones',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 92, y: 149 } },
    ],
    initiative: 32,
  },
  {
    level: 5,
    name: 'unforgivable methods',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 65, y: 43 } },
      { type: 'summonSquare', position: { x: 99, y: 43 } },
      { type: 'summonSquare', position: { x: 65, y: 59 } },
    ],
    initiative: 98,
  },
  {
    level: 6,
    name: 'rotting multitude',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 71, y: 43 } },
      { type: 'summonSquare', position: { x: 115, y: 43 } },
      { type: 'summonSquare', position: { x: 71, y: 59 } },
    ],
    initiative: 66,
  },
  {
    level: 6,
    name: 'twisted decree',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 58, y: 151 } },
    ],
    initiative: 85,
  },
  {
    level: 7, name: 'recycled limbs',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    slots: [
      { x: 37, y: 161 },
      { x: 67, y: 161 },
      { x: 97, y: 161 },
    ],
    initiative: 52,
  },
  {
    level: 7, name: 'soul claim',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    slots: [
      { x: 37, y: 65 },
      { x: 67, y: 65 },
      { x: 97, y: 65 },
    ],
    initiative: 23,
  },
  {
    level: 8,
    name: 'endless numbers',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 63, y: 35 } },
      { type: 'summonSquare', position: { x: 93, y: 35 } },
      { type: 'summonSquare', position: { x: 63, y: 51 } },
    ],
    initiative: 86,
  },
  {
    level: 8,
    name: 'wailing from beyond',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 56, y: 38 } },
      { type: 'square', position: { x: 88, y: 38 } },
      { type: 'circle', position: { x: 90, y: 134 } },
      { type: 'diamondPlus', position: { x: 56, y: 156 } },
    ],
    initiative: 73,
  },
  {
    level: 9,
    name: 'behold the shrouded sun',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard },
    initiative: 10,
  },
  {
    level: 9,
    name: 'unholy prowess',
    actions: { top: CardActions.activeLost, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 71, y: 37 } },
      { type: 'summonSquare', position: { x: 115, y: 37 } },
      { type: 'summonSquare', position: { x: 71, y: 52 } },
      { type: 'summonSquare', position: { x: 115, y: 52 } },
    ],
    initiative: 97,
  },
], boneshaperPath);
