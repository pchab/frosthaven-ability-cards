'use client';

import { useSelectCards } from '@/app/select/useSelectCards';
import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { geminate } from '@/domain/geminate/class';
import CardPile, { type PileActions } from '../../cards/CardPile';

export function SelectedGeminateCards({
  actions = () => [],
}: {
  actions?: PileActions<GeminateCard>;
}) {
  const { cards, removeCard } = useSelectCards<GeminateCard>();

  const meleeCards = cards
    .filter(({ form }) => form === GeminateForm.melee);
  const rangedCards = cards
    .filter(({ form }) => form === GeminateForm.ranged);

  const removeAction = (card: GeminateCard) => ({
    name: 'Remove Card',
    onClick: () => removeCard(card),
  });
  const pileActions = (card: GeminateCard) => [removeAction(card), ...actions(card)];

  return <div className='flex flex-row justify-between border-solid border-2 rounded-lg p-4 gap-4 bg-gradient-to-r from-slate-700 to-blue-300'>
    <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Melee form: {meleeCards.length}/{geminate.handSize / 2}</p>
      <CardPile
        cards={meleeCards}
        actions={pileActions}
        maxCardLength={geminate.handSize / 2}
      />
    </div>
    <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Ranged form: {rangedCards.length}/{geminate.handSize / 2}</p>
      <CardPile
        cards={rangedCards}
        actions={pileActions}
        maxCardLength={geminate.handSize / 2}
      />
    </div>
  </div>;
}
