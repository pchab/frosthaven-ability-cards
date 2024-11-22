'use client';

import CardPile, { type PileActions } from '@/app/_components/cards/CardPile';
import { ClassContext } from '@/context/ClassContext';
import { type Card } from '@/domain/cards.type';
import { useSelectCards } from '@/hooks/useSelectCards';
import { use } from 'react';

export function SelectedCards<X extends Card>({
  actions = () => [],
}: {
  actions?: PileActions<X>;
}) {
  const { handSize } = use(ClassContext);
  const { cards, removeCard } = useSelectCards<X>();

  const removeAction = (card: X) => ({
    name: 'Remove Card',
    onClick: () => removeCard(card),
  });
  const pileActions = (card: X) => [removeAction(card), ...actions(card)];

  return <CardPile
    cards={cards}
    actions={pileActions}
    maxCardLength={handSize}
  />;
}
