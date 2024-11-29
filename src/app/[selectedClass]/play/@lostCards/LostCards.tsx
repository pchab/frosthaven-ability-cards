'use client';

import { CardStatus, type Card } from '@/domain/cards.type';
import CardPile from '@/app/_components/cards/CardPile';
import { useCards } from '@/hooks/useCards';

export default function LostCards() {
  const {
    currentCards,
    recoverCard,
  } = useCards();

  const lostPile = currentCards
    .filter(({ status }) => status === CardStatus.lost);

  const recoverAction = (card: Card) => [{
    name: 'Recover Card',
    onClick: () => recoverCard(card),
  }];

  return <CardPile
    cards={lostPile}
    actions={recoverAction}
    folded={true}
    maxCardLength={2}
  />;
}