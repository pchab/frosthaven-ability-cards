import type { Enhancement, EnhancementSlot } from './enhancement.type'

const squareList: Enhancement[] = [
    'jump',
    'plus-one',
];
const circleList: Enhancement[] = [
    'air',
    'dark',
    'earth',
    'fire',
    'ice',
    'light',
    'wild',
];
const diamondList: Enhancement[] = [
    'curse',
    'immobilize',
    'muddle',
    'poison',
    'wound',
];
const diamondPlusList: Enhancement[] = [
    'bless',
    'regenerate',
    'strengthen',
    'ward',
];

export function getEnhancementByType(type: EnhancementSlot['type']): Enhancement[] {
    switch (type) {
        case 'square':
            return squareList;
        case 'circle':
            return [...circleList, ...squareList];
        case 'diamond':
            return [...circleList, ...squareList, ...diamondList];
        case 'diamondPlus':
            return [...circleList, ...squareList, ...diamondList, ...diamondPlusList];
        case 'hex':
            return ['hex-attack'];
        case 'summonSquare':
            return ['plus-one'];
    }
}
