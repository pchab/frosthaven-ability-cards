import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { CardComponent, HoverArea } from '../Card';

export function SelectedGeminateCards({
  cards,
  onRemoveCard,
}: {
  cards: GeminateCard[];
  onRemoveCard: (card: GeminateCard) => void;
}) {
  const meleeCards = cards
    .filter((card) => card.form === GeminateForm.melee);
  const rangedCards = cards
    .filter((card) => card.form === GeminateForm.ranged);

  const clickProps = {
    zone: HoverArea.all,
    onClick: onRemoveCard,
    info: 'Remove Card',
  };

  return <div className='p-4 flex flex-row gap-4'>
    <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
      Melee form: {meleeCards.length}
      {meleeCards
        .map((card, index) => <CardComponent key={`selected-melee-card-${index}`} card={card}
          clickableAreasProps={[clickProps]}
        />)}
    </div>
    <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
      Ranged form: {rangedCards.length}
      {rangedCards
        .map((card, index) => <CardComponent key={`selected-ranged-card-${index}`} card={card}
          clickableAreasProps={[clickProps]}
        />)}
    </div>
  </div>;
}
