import { type Card } from '@/domain/cards.type';
import CardPile from '../_components/cards/CardPile';

export function SelectedCards<X extends Card>({
  cards,
  onRemoveCard,
}: {
  cards: X[];
  onRemoveCard: (card: X) => void;
}) {
  const removeAction = (card: X) => ({
    name: 'Remove Card',
    onClick: () => onRemoveCard(card),
  });

  return <div className='flex flex-col gap-4'>
    Selected Cards: {cards.length}
    <CardPile
      cards={cards}
      actions={[removeAction]}
    />
  </div>;
}
