import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import CardPile from '../../cards/CardPile';

export function SelectedGeminateCards({
  cards,
  maxHandSize,
  onRemoveCard,
}: {
  cards: GeminateCard[];
  maxHandSize: number;
  onRemoveCard: (card: GeminateCard) => void;
}) {
  const meleeCards = cards
    .filter((card) => card.form === GeminateForm.melee);
  const rangedCards = cards
    .filter((card) => card.form === GeminateForm.ranged);

  const clickProps = (card: GeminateCard) => ({
    name: 'Remove Card',
    onClick: () => onRemoveCard(card),
  });

  return <div className='flex flex-row justify-between border-solid border-2 rounded-lg p-4 gap-4 bg-gradient-to-r from-slate-700 to-blue-300'>
    <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Melee form: {meleeCards.length}/{maxHandSize}</p>
      <CardPile
        cards={meleeCards}
        actions={[clickProps]}
        maxCardLength={maxHandSize}
      />
    </div>
    <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Ranged form: {rangedCards.length}/{maxHandSize}</p>
      <CardPile
        cards={rangedCards}
        actions={[clickProps]}
        maxCardLength={maxHandSize}
      />
    </div>
  </div>;
}
