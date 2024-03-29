import { type Card } from '@/domain/cards.type';
import { HoverArea } from './cards/Card';
import CardPile from './cards/CardPile';

export function SelectedCards<X extends Card>({
  cards,
  onRemoveCard,
}: {
  cards: X[];
  onRemoveCard: (card: X) => void;
}) {
  const clickProps = {
    getZone: () => HoverArea.all,
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
