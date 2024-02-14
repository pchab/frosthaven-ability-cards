import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { HoverArea } from '../cards/Card';
import CardPile from '../cards/CardPile';

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
    getZone: () => HoverArea.all,
    onClick: onRemoveCard,
    info: 'Remove Card',
  };

  return <div className='p-4 flex flex-row gap-4'>
    <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
      Melee form: {meleeCards.length}
      <CardPile
        cards={meleeCards}
        clickProps={[clickProps]}
        vertical
      />
    </div>
    <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
      Ranged form: {rangedCards.length}
      <CardPile
        cards={rangedCards}
        clickProps={[clickProps]}
        vertical
      />
    </div>
  </div>;
}
