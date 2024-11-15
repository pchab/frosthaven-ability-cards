import { Card, CardStatus } from './cards.type';

function nameToImagePath(name: string): string {
  return name.toLowerCase().replace(/ /g, '-');
}

export function createCards<X extends Card>(
  cards: Omit<X, 'status' | 'path'>[],
  basePath: string,
  extension = 'png',
): X[] {
  return cards.map((card) => ({
    status: CardStatus.inHand,
    path: `${basePath}/fh-${nameToImagePath(card.name)}.${extension}`,
    ...card,
  } as X));
}