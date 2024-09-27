import { type Card } from '@/domain/cards.type';
import CardPile from '../_components/cards/CardPile';
import { PredefinedHoverArea } from '../_components/cards/hover-area';

export function SelectedCards<X extends Card>({
  cards,
  onRemoveCard,
}: {
  cards: X[];
  onRemoveCard: (card: X) => void;
}) {
  const clickProps = {
    getZone: () => PredefinedHoverArea.all,
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
