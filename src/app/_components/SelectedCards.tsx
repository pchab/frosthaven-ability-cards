import { type Card } from '@/domain/cards.type';
import { CardComponent, HoverArea } from './Card';

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

  return <div key={'selected-cards'} className='flex flex-col gap-4'>
    Selected Cards: {cards.length}
    {cards
      .map((card, index) => <CardComponent key={`selected-card-${index}`} card={card}
        clickableAreasProps={[clickProps]}
      />)}
  </div>;
}
