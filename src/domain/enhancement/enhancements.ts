import type {Enhancement} from './enhancement.type'

const squareList: string[] = [
    'jump',
    'plus-one',
]

const squareEnhancements: Enhancement[] = squareList.map((name) => ({type: 'square', name}));

const circleList: string[] = [
    'air',
    'dark',
    'earth',
    'fire',
    'ice',
    'light',
    'wild',
];
const circleEnhancements: Enhancement[] = [...circleList, ...squareList]
    .map((name) => ({type: 'circle', name}));

const diamondList: string[] = [
    'curse',
    'immobilize',
    'muddle',
    'poison',
    'wound',
];
const diamondEnhancements: Enhancement[] = [...circleList, ...squareList, ...diamondList]
    .map((name) => ({type: 'diamond', name}));

const diamondPlusList: string[] = [
    'bless',
    'regenerate',
    'strengthen',
    'ward',
]
const diamondPlusEnhancements: Enhancement[] = [...circleList, ...squareList, ...diamondList, ...diamondPlusList]
    .map((name) => ({type: 'diamondPlus', name}));

export const enhancements: Enhancement[] = [
    ...circleEnhancements,
    ...diamondEnhancements,
    ...squareEnhancements,
    {type: 'hex', name: 'hex'},
    {type: 'summonSquare', name: 'plus-one'},
];
