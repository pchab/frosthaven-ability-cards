import { type Card } from '@/domain/cards.type';
import { HoverArea } from './Card';
import CardPile from './CardPile';

export function SelectedCards<X extends Card>({
  cards,
  onRemoveCard,
}: {
  cards: X[];
  onRemoveCard: (card: X) => void;
}) {
  const clickProps = {
    zone: HoverArea.all,
    onClick: onRemoveCard,
    info: 'Remove Card',
  };

  return <div className='flex flex-col gap-4'>
    Selected Cards: {cards.length}
    <CardPile
      cards={cards}
      clickProps={[clickProps]}
      vertical
    />
  </div>;
}
