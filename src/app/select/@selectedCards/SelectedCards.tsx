'use client';

import { type Card } from '@/domain/cards.type';
import { useClassHook } from '@/stores/class.store';
import CardPile, { type PileActions } from '../../_components/cards/CardPile';
import BoardArea from '../../_components/layout/BoardArea';
import { useSelectCards } from '../useSelectCards';

export function SelectedCards<X extends Card>({
  actions = () => [],
}: {
  actions?: PileActions<X>;
}) {
  const { handSize = 10 } = useClassHook() ?? {};
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
