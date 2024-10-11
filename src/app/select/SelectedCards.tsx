import { type Card } from '@/domain/cards.type';
import CardPile from '../_components/cards/CardPile';

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

  return <div className='flex flex-col border-solid border-2 rounded p-4'>
    <p className='text-lg'>Selected Cards: {cards.length}/{maxHandSize}</p>
    <CardPile
      cards={cards}
      actions={[removeAction]}
      maxCardLength={maxHandSize}
    />
  </div>;
}
