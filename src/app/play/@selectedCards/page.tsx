'use client';

import { CardStatus } from '@/domain/cards.type';
import BoardArea from '@/app/_components/BoardArea';
import PlayedCard from '@/app/_components/cards/PlayedCard';
import { useCards } from '../useCards';

export default function SelectedCardsPage() {
  const {
    currentCards,
    playCards,
  } = useCards();

  const selectedCards = currentCards
    .filter(card => card.status === CardStatus.selected);

  return <BoardArea title='Selected cards'>
    <PlayedCard cards={selectedCards} playCards={playCards} />
  </BoardArea>;
}