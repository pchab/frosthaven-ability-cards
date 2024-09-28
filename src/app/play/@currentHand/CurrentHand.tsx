'use client';

import CardPile from '@/app/_components/cards/CardPile';
import { CardStatus, type Card } from '@/domain/cards.type';
import { useCards } from '../useCards';

export default function CurrentHand<X extends Card>({
  classFilter = () => true,
}: {
  classFilter?: (card: X) => boolean;
}) {
  const {
    currentCards,
    selectCard,
    discardCard,
    loseCard,
  } = useCards<X>();

  const currentHand = currentCards
    .filter(card => classFilter(card))
    .filter(card => card.status === CardStatus.inHand);

  const selectAction = (card: X) => ({
    name: 'Select Card',
    onClick: () => selectCard(card),
  });
  const discardAction = (card: X) => ({
    name: 'Discard Card',
    onClick: () => discardCard(card),
  });
  const loseAction = (card: X) => ({
    name: 'Lose Card',
    onClick: () => loseCard(card),
  });

  return <CardPile
    cards={currentHand}
    actions={[discardAction, loseAction, selectAction]}
  />;
}