import { createCards } from '../card.factory';
import { Card } from '../cards.type';

export type GeminateForm = 'melee' | 'ranged';
export const forms: GeminateForm[] = ['melee', 'ranged'] as const;
export type GeminateCard = Card & { form: GeminateForm };

const geminatePath = '/geminate/abilities';

export const geminateCards: GeminateCard[] = createCards([
  {
    level: 'X',
    name: 'feeding frenzy',
    actions: { top: 'activeLost', bottom: 'discard' },
    form: 'melee',
    initiative: 62,
  },
  {
    level: 'X',
    name: 'reckless jab',
    actions: { top: 'discard', bottom: 'lose' },
    form: 'melee',
    availableEnhancements: [
      { type: 'square', position: { x: 91, y: 40 }, },
      { type: 'diamond', position: { x: 90, y: 138 }, },
    ],
    initiative: 38,
  },
  {
    level: 'X',
    name: 'reshape the guise',
    actions: { top: 'discard', bottom: 'activeLost' },
    form: 'ranged',
    initiative: 38,
  },
  {
    level: 'X',
    name: 'smoldering hatred',
    actions: { top: 'discard', bottom: 'lose' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'diamond', position: { x: 61, y: 37 }, },
      { type: 'square', position: { x: 73, y: 164 }, },
    ],
    initiative: 32,
  },
  {
    level: 1,
    name: 'changelings boon',
    actions: { top: 'discard', bottom: 'activeLost' },
    form: 'melee',
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 47 }, },
      { type: 'diamond', position: { x: 89, y: 70 }, },
      { type: 'diamondPlus', position: { x: 70, y: 128 }, },
    ],
    initiative: 40,
  },
  {
    level: 1,
    name: 'drag down',
    actions: { top: 'discard', bottom: 'lose' },
    form: 'melee',
    availableEnhancements: [
      { type: 'square', position: { x: 49, y: 47 }, },
      { type: 'hex', position: { x: 89, y: 58, size: 14 }, },
      { type: 'square', position: { x: 74, y: 136 }, },
    ],
    initiative: 34,
  },
  {
    level: 1,
    name: 'draining pincers',
    actions: { top: 'lose', bottom: 'discard' },
    form: 'melee',
    availableEnhancements: [
      { type: 'diamond', position: { x: 90, y: 37 }, },
      { type: 'square', position: { x: 74, y: 143 }, },
    ],
    initiative: 72,
  },
  {
    level: 1,
    name: 'flailing tendrils',
    actions: { top: 'discard', bottom: 'lose' },
    form: 'melee',
    availableEnhancements: [
      { type: 'hex', position: { x: 98, y: 42.5, size: 15 }, },
      { type: 'hex', position: { x: 120, y: 55, size: 15 }, },
      { type: 'hex', position: { x: 98, y: 67.5, size: 15 }, },
    ],
    initiative: 12,
  },
  {
    level: 1,
    name: 'hornbeetle carapace',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    form: 'melee',
    slots: [
      { x: 24, y: 67 },
      { x: 54, y: 67 },
      { x: 84, y: 67 },
      { x: 113, y: 67 },
    ],
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 132 }, },
    ],
    initiative: 20,
  },
  {
    level: 1,
    name: 'hornet stingers',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    form: 'melee',
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 139 }, },
    ],
    initiative: 23,
  },
  {
    level: 1,
    name: 'icebound quills',
    actions: { top: 'lose', bottom: 'activeDiscard' },
    form: 'melee',
    availableEnhancements: [
      { type: 'diamond', position: { x: 69, y: 46 }, },
      { type: 'square', position: { x: 89, y: 165 }, },
    ],
    initiative: 14,
  },
  {
    level: 1,
    name: 'firefly swarm',
    actions: { top: 'lose', bottom: 'discard' },
    form: 'ranged',
    initiative: 76,
  },
  {
    level: 1,
    name: 'hail of thorns',
    actions: { top: 'lose', bottom: 'discard' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 140 }, },
    ],
    initiative: 88,
  },
  {
    level: 1,
    name: 'harvest the essence',
    actions: { top: 'activeLost', bottom: 'discard' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 69, y: 36 }, },
      { type: 'square', position: { x: 71, y: 164 }, },
    ],
    initiative: 60,
  },
  {
    level: 1,
    name: 'into my embrace',
    actions: { top: 'discard', bottom: 'lose' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'diamond', position: { x: 52, y: 46 }, },
      { type: 'diamondPlus', position: { x: 64, y: 139 }, },
    ],
    initiative: 36,
  },
  {
    level: 1,
    name: 'mind spike',
    actions: { top: 'lose', bottom: 'discard' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'square', position: { x: 61, y: 141 }, },
    ],
    initiative: 18,
  },
  {
    level: 1,
    name: 'scarab flight',
    actions: { top: 'discard', bottom: 'activeLost' },
    form: 'ranged',
    slots: [
      { x: 21, y: 161 },
      { x: 51, y: 161 },
      { x: 81, y: 161 },
      { x: 110, y: 161 },
    ],
    availableEnhancements: [
      { type: 'square', position: { x: 108, y: 48 }, },
      { type: 'hex', position: { x: 42, y: 68, size: 15 }, },
    ],
    initiative: 30,
  },
  {
    level: 1,
    name: 'selfless offering',
    actions: { top: 'discard', bottom: 'discard' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 58, y: 48 }, },
      { type: 'square', position: { x: 90, y: 142 }, },
    ],
    initiative: 27,
  },
  {
    level: 2,
    name: 'venomous barbs',
    actions: { top: 'activeLost', bottom: 'discard' },
    form: 'melee',
    availableEnhancements: [
      { type: 'diamond', position: { x: 73, y: 152 }, },
    ],
    initiative: 17,
  },
  {
    level: 2,
    name: 'locust host',
    actions: { top: 'activeLost', bottom: 'discard' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'diamond', position: { x: 38, y: 38 }, },
      { type: 'square', position: { x: 89, y: 140 }, },
      { type: 'square', position: { x: 107, y: 140 }, },
    ],
    initiative: 23,
  },
  {
    level: 3,
    name: 'mandible storm',
    actions: { top: 'discard', bottom: 'activeLost' },
    form: 'melee',
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 127 }, },
    ],
    initiative: 30,
  },
  {
    level: 3,
    name: 'dragonfly surge',
    actions: { top: 'lose', bottom: 'activeDiscard' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'diamond', position: { x: 62, y: 47 }, },
    ],
    initiative: 50,
  },
  {
    level: 4,
    name: 'thresh and flail',
    actions: { top: 'lose', bottom: 'discard' },
    form: 'melee',
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 51 }, },
      { type: 'diamond', position: { x: 90, y: 69 }, },
      { type: 'square', position: { x: 64, y: 143 }, },
      { type: 'square', position: { x: 100, y: 143 }, },
    ],
    initiative: 43,
  },
  {
    level: 4,
    name: 'luminous descent',
    actions: { top: 'discard', bottom: 'lose' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 49, y: 48 }, },
      { type: 'square', position: { x: 108, y: 48 }, },
      { type: 'circle', position: { x: 73, y: 134 }, },
    ],
    initiative: 67,
  },
  {
    level: 5,
    name: 'formless grace',
    actions: { top: 'activeLost', bottom: 'discard' },
    form: 'melee',
    availableEnhancements: [
      { type: 'square', position: { x: 74, y: 141 }, },
    ],
    initiative: 75,
  },
  {
    level: 5,
    name: 'chitinous horde',
    actions: { top: 'activeDiscard', bottom: 'activeLost' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'square', position: { x: 89, y: 56 }, },
    ],
    initiative: 15,
  },
  {
    level: 6,
    name: 'corrosive acids',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    form: 'melee',
    availableEnhancements: [
      { type: 'square', position: { x: 65, y: 38 }, },
      { type: 'hex', position: { x: 91, y: 42, size: 15 }, },
      { type: 'square', position: { x: 89, y: 133 }, },
    ],
    initiative: 28,
  },
  {
    level: 6,
    name: 'hirudotherapy',
    actions: { top: 'discard', bottom: 'discard' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'square', position: { x: 62, y: 147 }, },
    ],
    initiative: 92,
  },
  {
    level: 7,
    name: 'two pronged entrapment',
    actions: { top: 'activeDiscard', bottom: 'lose' },
    form: 'melee',
    availableEnhancements: [
      { type: 'diamond', position: { x: 89, y: 35 }, },
    ],
    initiative: 21,
  },
  {
    level: 7,
    name: 'alluring pheromones',
    actions: { top: 'discard', bottom: 'lose' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'hex', position: { x: 104, y: 59, size: 15 }, },
    ],
    initiative: 49,
  },
  {
    level: 8,
    name: 'accelerated metabolism',
    actions: { top: 'discard', bottom: 'activeLost' },
    form: 'melee',
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 128 }, },
      { type: 'circle', position: { x: 108, y: 128 }, },
    ],
    initiative: 85,
  },
  {
    level: 8,
    name: 'oscillating entity',
    actions: { top: 'activeLost', bottom: 'discard' },
    form: 'ranged',
    availableEnhancements: [
      { type: 'diamond', position: { x: 53, y: 32 }, },
      { type: 'diamond', position: { x: 71, y: 32 }, },
      { type: 'square', position: { x: 90, y: 134 }, },
    ],
    initiative: 55,
  },
  {
    level: 9,
    name: 'harbinger of ruin',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    form: 'melee',
    slots: [
      { x: 24, y: 73 },
      { x: 54, y: 73 },
      { x: 84, y: 73 },
      { x: 113, y: 73 },
    ],
    availableEnhancements: [
      { type: 'square', position: { x: 90, y: 168 }, },
    ],
    initiative: 11,
  },
  {
    level: 9,
    name: 'voice of salvation',
    actions: { top: 'activeDiscard', bottom: 'activeLost' },
    form: 'ranged',
    slots: [
      { x: 21, y: 160 },
      { x: 51, y: 160 },
      { x: 81, y: 160 },
      { x: 110, y: 160 },
    ],
    initiative: 39,
  },
], geminatePath);
