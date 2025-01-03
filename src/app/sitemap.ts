import type { Card } from '@/domain/cards.type';
import { classNameToURI, frosthavenClasses } from '@/domain/frosthaven-class';
import type { MetadataRoute } from 'next';

const prodUrl = 'https://frosthaven-cards.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const fhClassIcons = frosthavenClasses.map(({ path }) => `${prodUrl}${path}`);
  const selectClassUrl = {
    url: prodUrl,
    images: fhClassIcons,
  };

  const fhClassCardsUrls = (cards: Card[]) => cards
    .map(({ path }) => `${prodUrl}${path}`);
  const selectCardsUrls = frosthavenClasses.map(({ name, cards }) => ({
    url: `${prodUrl}/${classNameToURI(name)}/select`,
    images: fhClassCardsUrls(cards),
  }));
  const playCardsUrls = frosthavenClasses.map(({ name, cards }) => ({
    url: `${prodUrl}/${classNameToURI(name)}/play`,
    images: fhClassCardsUrls(cards),
  }));
  return [
    selectClassUrl,
    ...selectCardsUrls,
    ...playCardsUrls,
  ];
}
