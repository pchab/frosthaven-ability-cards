import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

const drifterPath = '/drifter/abilities';

export const drifterCards: Card[] = createCards([
  {
    level: 6, name: 'accurate strikes', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    slots: [
      { x: 42, y: 58 },
      { x: 72, y: 58 },
      { x: 101, y: 58 },
      { x: 34, y: 82 },
      { x: 64, y: 82 },
      { x: 93, y: 82 },
    ],
  },
  {
    level: 8, name: 'against all odds', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 150 },
      { x: 67, y: 150 },
      { x: 96, y: 150 },
      { x: 30, y: 174 },
      { x: 60, y: 174 },
      { x: 89, y: 174 },
    ],
  },
  { level: 1, name: 'bloodletting', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 5, name: 'break through', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  {
    level: 4, name: 'chunk of flesh', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 148 },
      { x: 67, y: 148 },
      { x: 96, y: 148 },
      { x: 30, y: 172 },
      { x: 60, y: 172 },
      { x: 89, y: 172 },
    ],
  },
  { level: 6, name: 'consume stamina', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard } },
  {
    level: 1, name: 'continuous health', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 42, y: 145 },
      { x: 71, y: 145 },
      { x: 100, y: 145 },
      { x: 34, y: 169 },
      { x: 64, y: 169 },
      { x: 93, y: 169 },
    ],
  },
  {
    level: 1, name: 'crushing weight', actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 42, y: 54 },
      { x: 72, y: 54 },
      { x: 101, y: 54 },
      { x: 34, y: 78 },
      { x: 64, y: 78 },
      { x: 93, y: 78 },
    ],
  },
  { level: 1, name: 'deadly shot', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 'X', name: 'destructive fury', actions: { top: CardActions.lose, bottom: CardActions.lose } },
  { level: 1, name: 'draining arrows', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 3, name: 'dual bow', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 2, name: 'ever forward', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  {
    level: 9, name: 'everlasting', actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 25, y: 67 },
      { x: 54, y: 67 },
      { x: 84, y: 67 },
      { x: 114, y: 67 },
    ],
  },
  {
    level: 3, name: 'fierce barrage', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 148 },
      { x: 67, y: 148 },
      { x: 96, y: 148 },
      { x: 30, y: 172 },
      { x: 60, y: 172 },
      { x: 89, y: 172 },
    ],
  },
  { level: 'X', name: 'fortitude', actions: { top: CardActions.discard, bottom: CardActions.activeLost } },
  { level: 4, name: 'gift of the prey', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 8, name: 'inevitable conclusion', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  {
    level: 7, name: 'like the wind', actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 41, y: 58 },
      { x: 71, y: 58 },
      { x: 100, y: 58 },
      { x: 34, y: 82 },
      { x: 64, y: 82 },
      { x: 93, y: 82 },
    ],
  },
  { level: 'X', name: 'no remorse', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  {
    level: 1, name: 'precision aim', actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 42, y: 54 },
      { x: 72, y: 54 },
      { x: 101, y: 54 },
      { x: 34, y: 79 },
      { x: 64, y: 79 },
      { x: 93, y: 79 },
    ],
  },
  { level: 1, name: 'prudent preparation', actions: { top: CardActions.activeDiscard, bottom: CardActions.discard } },
  {
    level: 1, name: 'relentless', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 38, y: 154 },
      { x: 67, y: 154 },
      { x: 96, y: 154 },
      { x: 30, y: 178 },
      { x: 60, y: 178 },
      { x: 89, y: 178 },
    ],
  },
  {
    level: 2, name: 'shockwave', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard },
    slots: [
      { x: 39, y: 58 },
      { x: 69, y: 58 },
      { x: 98, y: 58 },
      { x: 31, y: 83 },
      { x: 61, y: 83 },
      { x: 90, y: 83 },
    ],
  },
  {
    level: 5, name: 'survivalist', actions: { top: CardActions.activeLost, bottom: CardActions.discard },
    slots: [
      { x: 42, y: 54 },
      { x: 72, y: 54 },
      { x: 101, y: 54 },
      { x: 34, y: 79 },
      { x: 64, y: 79 },
      { x: 93, y: 79 },
    ],
  },
  {
    level: 1, name: 'sustained momentum', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 42, y: 148 },
      { x: 71, y: 148 },
      { x: 100, y: 148 },
      { x: 34, y: 172 },
      { x: 64, y: 172 },
      { x: 93, y: 172 },
    ],
  },
  {
    level: 1, name: 'unbreakable', actions: { top: CardActions.discard, bottom: CardActions.activeLost },
    slots: [
      { x: 42, y: 148 },
      { x: 71, y: 148 },
      { x: 100, y: 148 },
      { x: 34, y: 172 },
      { x: 64, y: 172 },
      { x: 93, y: 172 },
    ],
  },
  { level: 7, name: 'unending fight', actions: { top: CardActions.discard, bottom: CardActions.lose } },
  { level: 9, name: 'use every part', actions: { top: CardActions.discard, bottom: CardActions.discard } },
  { level: 1, name: 'vile assault', actions: { top: CardActions.lose, bottom: CardActions.discard } },
  { level: 1, name: 'violent inheritance', actions: { top: CardActions.discard, bottom: CardActions.lose } },
], drifterPath);
