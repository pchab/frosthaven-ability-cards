import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const bannerSpearPath = '/banner-spear/abilities';

export const bannerSpearCards: Card[] = createCards([
  {
    level: 'X',
    name: 'driving inspiration',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 56, y: 54 } },
      { type: 'summonSquare', position: { x: 65, y: 144 } },
    ],
  },
  {
    level: 'X',
    name: 'incendiary throw',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 36 } },
      { type: 'summonSquare', position: { x: 68, y: 144 } },
      { type: 'summonSquare', position: { x: 68, y: 159 } },
    ],
  },
  {
    level: 'X',
    name: 'resolved courage',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard }
  },
  {
    level: 1,
    name: 'at all costs',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 70, y: 140 } },
      { type: 'summonSquare', position: { x: 115, y: 140 } },
    ],
  },
  {
    level: 1,
    name: 'combined effort',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 51, y: 62 } },
      { type: 'circle', position: { x: 91, y: 137 } },
      { type: 'square', position: { x: 91, y: 171 } },
    ],
  },
  {
    level: 1,
    name: 'deflecting maneuver',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'circle', position: { x: 91, y: 35 } },
      { type: 'circle', position: { x: 91, y: 141 } },
    ],
  },
  {
    level: 1,
    name: 'javelin',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 53 } },
      { type: 'circle', position: { x: 88, y: 141 } },
    ],
  },
  {
    level: 1,
    name: 'pincer movement',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 52, y: 62 } },
      { type: 'circle', position: { x: 89, y: 141 } },
    ],
  },
  {
    level: 1,
    name: 'rallying cry',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'hex', position: { x: 109, y: 44, size: 15 } },
      { type: 'summonSquare', position: { x: 65, y: 143 } },
    ],
  },
  {
    level: 1,
    name: 'regroup',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 64, y: 60 } },
      { type: 'square', position: { x: 90, y: 159 } },
    ],
  },
  {
    level: 1,
    name: 'set for the charge',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.discard }
  },
  {
    level: 1,
    name: 'tip of the spear',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'hex', position: { x: 113, y: 31, size: 15 } },
      { type: 'circle', position: { x: 90, y: 154 } },
    ],
  },
  {
    level: 1,
    name: 'unbreakable wall',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost }
  },
  {
    level: 2,
    name: 'meat grinder',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 53, y: 59 } },
      { type: 'circle', position: { x: 63, y: 167 } },
    ],
  },
  {
    level: 2,
    name: 'pinning charge',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 40 } },
      { type: 'square', position: { x: 90, y: 160 } },
    ],
  },
  {
    level: 3,
    name: 'head of the hammer',
    actions: { top: CardActions.lose, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 52, y: 58 } },
      { type: 'circle', position: { x: 90, y: 135 } },
    ],
  },
  {
    level: 3,
    name: 'let them come',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 64, y: 145 } },
    ],
  },
  {
    level: 4,
    name: 'air support',
    actions: { top: CardActions.discard, bottom: CardActions.activeDiscard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 55 } },
      { type: 'summonSquare', position: { x: 64, y: 144 } },
      { type: 'summonSquare', position: { x: 98, y: 144 } },
      { type: 'summonSquare', position: { x: 64, y: 159 } },
    ],
  },
  {
    level: 4,
    name: 'boldening blow',
    actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'circle', position: { x: 90, y: 137 } },
      { type: 'square', position: { x: 90, y: 170 } },
    ],
  },
  {
    level: 5,
    name: 'explosive epicenter',
    actions: { top: CardActions.discard, bottom: CardActions.activeLost },
  },
  {
    level: 5,
    name: 'hold the line',
    actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamondPlus', position: { x: 88, y: 43 } },
      { type: 'circle', position: { x: 89, y: 129 } },
      { type: 'circle', position: { x: 89, y: 169 } },
    ],
  },
  {
    level: 6, name: 'barricade', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 65, y: 144 } },
    ],
  },
  {
    level: 6, name: 'bolstering shout', actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 80, y: 49 } },
      { type: 'circle', position: { x: 89, y: 142 } },
      { type: 'square', position: { x: 81, y: 163 } },
    ],
  },
  {
    level: 7, name: 'lead from afar', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'diamond', position: { x: 72, y: 50 } },
      { type: 'summonSquare', position: { x: 64, y: 145 } },
      { type: 'summonSquare', position: { x: 97, y: 145 } },
      { type: 'summonSquare', position: { x: 97, y: 155 } },
    ],
  },
  {
    level: 7, name: 'tri thrust', actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 51, y: 61 } },
      { type: 'circle', position: { x: 91, y: 131 } },
      { type: 'square', position: { x: 72, y: 153 } },
    ],
  },
  {
    level: 8, name: 'sweeping aid', actions: { top: CardActions.discard, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'diamond', position: { x: 63, y: 37 } },
      { type: 'circle', position: { x: 89, y: 154 } },
    ],
  },
  {
    level: 8, name: 'taunting howl', actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    availableEnhancements: [
      { type: 'square', position: { x: 59, y: 45 } },
      { type: 'circle', position: { x: 89, y: 135 } },
      { type: 'square', position: { x: 89, y: 170 } },
    ],
  },
  {
    level: 9, name: 'hail of spears', actions: { top: CardActions.discard, bottom: CardActions.lose },
    availableEnhancements: [
      { type: 'diamond', position: { x: 71, y: 37 } },
    ],
  },
  {
    level: 9, name: 'take no prisoners', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    availableEnhancements: [
      { type: 'summonSquare', position: { x: 64, y: 145 } },
    ],
  },
], bannerSpearPath);
