'use client';

import CardPile, { type PileActions } from '@/app/_components/cards/CardPile';
import BoardArea from '@/app/_components/layout/BoardArea';
import { ClassContext } from '@/context/ClassContext';
import { type Card } from '@/domain/cards.type';
import { use } from 'react';
import { useSelectCards } from '@/hooks/useSelectCards';

export function SelectedCards<X extends Card>({
  actions = () => [],
}: {
  actions?: PileActions<X>;
}) {
  const { handSize = 10 } = use(ClassContext);
  const { cards, removeCard } = useSelectCards<X>();

  const removeAction = (card: X) => ({
    name: 'Remove Card',
    onClick: () => removeCard(card),
  });
  const pileActions = (card: X) => [removeAction(card), ...actions(card)];

  return <BoardArea title={`Selected Cards: ${cards.length}/${handSize}`}>
    <CardPile
      cards={cards}
      actions={pileActions}
      maxCardLength={handSize}
    />
  </BoardArea>;
}
