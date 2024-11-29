'use client';

import { CardStatus } from '@/domain/cards.type';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import LongRestButton from './LongRestButton';
import ShortRestButton from './ShortRestButton';

export default function RestsPage() {
  const { currentCards } = useCards();

  const discardPile = currentCards
    .filter(({ status }) => status === CardStatus.discarded);

  if (discardPile.length < 2) {
    return <></>;
  }

  return <div className='flex justify-between gap-4'>
    <ShortRestButton cards={discardPile} />
    <LongRestButton cards={discardPile} />
  </div>;
}