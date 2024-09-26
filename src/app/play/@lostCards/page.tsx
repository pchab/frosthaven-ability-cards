'use client';

import { CardStatus } from '@/domain/cards.type';
import BoardArea from '@/app/_components/BoardArea';
import CardPile from '@/app/_components/cards/CardPile';
import { useCards } from '../useCards';
import { PredefinedHoverArea } from '@/app/_components/cards/hover-area';

export default function LostCardsPage() {
  const {
    currentCards,
    recoverCard,
  } = useCards();

  const lostPile = currentCards
    .filter(card => card.status === CardStatus.lost);

  const recoverClickProps = {
    getZone: () => PredefinedHoverArea.all,
    onClick: recoverCard,
    info: 'Recover Card',
  };

  return <BoardArea title='Lost cards'>
    <CardPile
      cards={lostPile}
      clickProps={[recoverClickProps]}
    />
  </BoardArea>;
}