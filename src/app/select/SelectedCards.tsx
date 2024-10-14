import { type Card } from '@/domain/cards.type';
import CardPile from '../_components/cards/CardPile';
import BoardArea from '../_components/layout/BoardArea';

export function SelectedCards<X extends Card>({
  cards,
  maxHandSize,
  onRemoveCard,
}: {
  cards: X[];
  maxHandSize: number;
  onRemoveCard: (card: X) => void;
}) {
  const removeAction = (card: X) => ({
    name: 'Remove Card',
    onClick: () => onRemoveCard(card),
  });

  return <BoardArea title={`Selected Cards: ${cards.length}/${maxHandSize}`}>
    <CardPile
      cards={cards}
      actions={[removeAction]}
      maxCardLength={maxHandSize}
    />
  </BoardArea>;
}
