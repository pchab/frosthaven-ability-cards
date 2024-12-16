import { createCards } from '../card.factory';
import { Card } from '../cards.type';

const bannerSpearPath = '/banner-spear/abilities';

export const bannerSpearCards: Card[] = createCards([
  {
    level: 'X',
    name: 'driving inspiration',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 56, y: 54 } },
      { type: 'summonSquare', position: { x: 65, y: 144 } },
    ],
    initiative: 18,
  },
  {
    level: 'X',
    name: 'incendiary throw',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 36 } },
      { type: 'summonSquare', position: { x: 68, y: 144 } },
      { type: 'summonSquare', position: { x: 68, y: 159 } },
    ],
    initiative: 22,
  },
  {
    level: 'X',
    name: 'resolved courage',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 10,
  },
  {
    level: 1,
    name: 'at all costs',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 70, y: 140 } },
      { type: 'summonSquare', position: { x: 115, y: 140 } },
    ],
    initiative: 60,
  },
  {
    level: 1,
    name: 'combined effort',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 51, y: 62 } },
      { type: 'circle', position: { x: 91, y: 137 } },
      { type: 'square', position: { x: 91, y: 171 } },
    ],
    initiative: 32,
  },
  {
    level: 1,
    name: 'deflecting maneuver',
    actions: { top: 'activeDiscard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 35 } },
      { type: 'circle', position: { x: 91, y: 141 } },
    ],
    initiative: 15,
  },
  {
    level: 1,
    name: 'javelin',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 53 } },
      { type: 'circle', position: { x: 88, y: 141 } },
    ],
    initiative: 21,
  },
  {
    level: 1,
    name: 'pincer movement',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 52, y: 62 } },
      { type: 'circle', position: { x: 89, y: 141 } },
    ],
    initiative: 69,
  },
  {
    level: 1,
    name: 'rallying cry',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'hex', position: { x: 109, y: 44, size: 15 } },
      { type: 'summonSquare', position: { x: 65, y: 143 } },
    ],
    initiative: 71,
  },
  {
    level: 1,
    name: 'regroup',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 64, y: 60 } },
      { type: 'square', position: { x: 90, y: 159 } },
    ],
    initiative: 25,
  },
  {
    level: 1,
    name: 'set for the charge',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 6,
  },
  {
    level: 1,
    name: 'tip of the spear',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'hex', position: { x: 113, y: 31, size: 15 } },
      { type: 'circle', position: { x: 90, y: 154 } },
    ],
    initiative: 67,
  },
  {
    level: 1,
    name: 'unbreakable wall',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 83,
  },
  {
    level: 2,
    name: 'meat grinder',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 53, y: 59 } },
      { type: 'circle', position: { x: 63, y: 167 } },
    ],
    initiative: 62,
  },
  {
    level: 2,
    name: 'pinning charge',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 40 } },
      { type: 'square', position: { x: 90, y: 160 } },
    ],
    initiative: 17,
  },
  {
    level: 3,
    name: 'head of the hammer',
    actions: { top: 'lose', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 52, y: 58 } },
      { type: 'circle', position: { x: 90, y: 135 } },
    ],
    initiative: 87,
  },
  {
    level: 3,
    name: 'let them come',
    actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 64, y: 145 } },
    ],
    initiative: 24,
  },
  {
    level: 4,
    name: 'air support',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 55 } },
      { type: 'summonSquare', position: { x: 64, y: 144 } },
      { type: 'summonSquare', position: { x: 98, y: 144 } },
      { type: 'summonSquare', position: { x: 64, y: 159 } },
    ],
    initiative: 20,
  },
  {
    level: 4,
    name: 'boldening blow',
    actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 137 } },
      { type: 'square', position: { x: 90, y: 170 } },
    ],
    initiative: 72,
  },
  {
    level: 5,
    name: 'explosive epicenter',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 78,
  },
  {
    level: 5,
    name: 'hold the line',
    actions: { top: 'activeDiscard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 88, y: 43 } },
      { type: 'circle', position: { x: 89, y: 129 } },
      { type: 'circle', position: { x: 89, y: 169 } },
    ],
    initiative: 5,
  },
  {
    level: 6, name: 'barricade', actions: { top: 'activeDiscard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 65, y: 144 } },
    ],
    initiative: 16,
  },
  {
    level: 6, name: 'bolstering shout', actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 80, y: 49 } },
      { type: 'circle', position: { x: 89, y: 142 } },
      { type: 'square', position: { x: 81, y: 163 } },
    ],
    initiative: 75,
  },
  {
    level: 7, name: 'lead from afar', actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 72, y: 50 } },
      { type: 'summonSquare', position: { x: 64, y: 145 } },
      { type: 'summonSquare', position: { x: 97, y: 145 } },
      { type: 'summonSquare', position: { x: 97, y: 155 } },
    ],
    initiative: 80,
  },
  {
    level: 7, name: 'tri thrust', actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 51, y: 61 } },
      { type: 'circle', position: { x: 91, y: 131 } },
      { type: 'square', position: { x: 72, y: 153 } },
    ],
    initiative: 27,
  },
  {
    level: 8, name: 'sweeping aid', actions: { top: 'discard', bottom: 'discard' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 37 } },
      { type: 'circle', position: { x: 89, y: 154 } },
    ],
    initiative: 73,
  },
  {
    level: 8, name: 'taunting howl', actions: { top: 'activeLost', bottom: 'discard' },
    availableEnhancements: [
      { type: 'square', position: { x: 59, y: 45 } },
      { type: 'circle', position: { x: 89, y: 135 } },
      { type: 'square', position: { x: 89, y: 170 } },
    ],
    initiative: 11,
  },
  {
    level: 9, name: 'hail of spears', actions: { top: 'discard', bottom: 'lose' },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 37 } },
    ],
    initiative: 44,
  },
  {
    level: 9, name: 'take no prisoners', actions: { top: 'discard', bottom: 'activeLost' },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 64, y: 145 } },
    ],
    initiative: 85,
  },
], bannerSpearPath);
