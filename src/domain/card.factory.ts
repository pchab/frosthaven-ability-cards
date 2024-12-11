import type { Card } from './cards.type';

function nameToImagePath(name: string): string {
  return name.toLowerCase().replace(/ /g, '-');
}

export function createCards<X extends Card>(cards: Omit<X, 'status' | 'path'>[], basePath: string): X[] {
  return cards.map((card) => ({
    status: 'inHand',
    path: `${basePath}/fh-${nameToImagePath(card.name)}.webp`,
    ...card,
  } as X));
}