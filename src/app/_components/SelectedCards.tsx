import { Card } from '@/domain/cards.type';
import { CardComponent } from './Card';

export function SelectedCards<X extends Card>({
  cards,
  onRemoveCard,
}: {
  cards: X[];
  onRemoveCard: (card: X) => void;
}) {
  return <div key={'selected-cards'} className='flex flex-col gap-4'>
    Selected Cards: {cards.length}
    {cards
      .map((card, index) => <CardComponent key={`selected-card-${index}`} card={card}
        onClickLeft={onRemoveCard} onClickRight={onRemoveCard}
        leftInfo={'remove Card'} rightInfo={'remove Card'}
      />)}
  </div>;
}
