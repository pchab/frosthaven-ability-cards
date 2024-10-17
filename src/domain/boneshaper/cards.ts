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
  },
  {
    level: 'X',
    name: 'exploding corpse',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 41, y: 50 } },
    ],
  },
  {
    level: 'X',
    name: 'wrath of the turned earth',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 37, y: 158 },
      { x: 67, y: 158 },
      { x: 97, y: 158 },
    ]
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
  },
  {
    level: 1,
    name: 'command the wretched',
    actions: { top: CardActions.discard, bottom: CardActions.lose },
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
  },
  {
    level: 1,
    name: 'dark tidings',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 152 } },
    ],
  },
  {
    level: 1,
    name: 'decaying will',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 65, y: 41 } },
    ],
  },
  {
    level: 1,
    name: 'eternal torment',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
  },
  {
    level: 1,
    name: 'fell remedy',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 57, y: 43 } },
    ],
  },
  {
    level: 1,
    name: 'flow of the black river',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 135 } },
      { type: 'square', position: { x: 91, y: 168 } },
    ],
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
  },
  {
    level: 1,
    name: 'malicious conversion',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 33 } },
    ],
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
  },
  {
    level: 1,
    name: 'transfer of essence',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
  },
  {
    level: 2,
    name: 'bone dagger',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 46 } },
      { type: 'square', position: { x: 88, y: 126 } },
    ],
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
  },
  {
    level: 3,
    name: 'putrid cloud',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
  },
  {
    level: 4,
    name: 'critical failure',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
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
    ]
  },
  {
    level: 5,
    name: 'solid bones',
    actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 92, y: 149 } },
    ]
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
  },
  {
    level: 6,
    name: 'twisted decree',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 58, y: 151 } },
    ],
  },
  {
    level: 7, name: 'recycled limbs',
    actions: { top: CardActions.lose, bottom: CardActions.activeDiscard },
    slots: [
      { x: 37, y: 161 },
      { x: 67, y: 161 },
      { x: 97, y: 161 },
    ],
  },
  {
    level: 7, name: 'soul claim',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    slots: [
      { x: 37, y: 65 },
      { x: 67, y: 65 },
      { x: 97, y: 65 },
    ],
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
  },
  {
    level: 9,
    name: 'behold the shrouded sun',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard }
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
  },
], boneshaperPath);
