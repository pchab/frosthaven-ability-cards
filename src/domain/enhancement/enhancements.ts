import type { Enhancement } from './enhancement.type'

const circleEnhancements: Enhancement[] = [
  'air',
  'dark',
  'earth',
  'fire',
  'ice',
  'light',
  'wild',
].map((name) => ({ type: 'circle', name }));
const diamondEnhancements: Enhancement[] = [
  'bless',
  'curse',
  'immobilize',
  'muddle',
  'poison',
  'regenerate',
  'strengthen',
  'ward',
  'wound',
].map((name) => ({ type: 'diamond', name }));
const squareEnhancements: Enhancement[] = [
  'jump',
  'plus-one',
].map((name) => ({ type: 'square', name }));

export const enhancements: Enhancement[] = [
  ...circleEnhancements,
  ...diamondEnhancements,
  ...squareEnhancements,
  { type: 'hex', name: 'hex' },
];
