import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { CardComponent } from '../Card';

export function GeminateSelectedCards({
  cards,
  onRemoveCard,
}: {
  cards: GeminateCard[];
  onRemoveCard: (card: GeminateCard) => void;
}) {
  const meleeCards = cards
    .filter((card) => card.form === GeminateForm.melee);
  const rangedCards = cards
    .filter((card) => card.form === GeminateForm.ranged)

  return <div className='p-4 flex flex-row gap-4'>
    <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
      Melee form: {meleeCards.length}
      {meleeCards
        .map((card, index) => <CardComponent key={`selected-melee-card-${index}`} card={card}
          onClickLeft={onRemoveCard} onClickRight={onRemoveCard}
          leftInfo={'remove Card'} rightInfo={'remove Card'}
        />)}
    </div>
    <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
      Ranged form: {rangedCards.length}
      {rangedCards
        .map((card, index) => <CardComponent key={`selected-ranged-card-${index}`} card={card}
          onClickLeft={onRemoveCard} onClickRight={onRemoveCard}
          leftInfo={'remove Card'} rightInfo={'remove Card'}
        />)}
    </div>
  </div>;
}
