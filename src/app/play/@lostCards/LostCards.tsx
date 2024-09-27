'use client';

import { CardStatus } from '@/domain/cards.type';
import CardPile from '@/app/_components/cards/CardPile';
import { useCards } from '../useCards';
import { PredefinedHoverArea } from '@/app/_components/cards/hover-area';

export default function LostCards() {
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

  return <CardPile
    cards={lostPile}
    clickProps={[recoverClickProps]}
  />;
}