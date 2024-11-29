'use client';

import CardPile, { type PileActions } from '@/app/_components/cards/CardPile';
import GeminateFormIcon from '@/app/_components/class/geminate/GeminateFormIcon';
import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { geminate } from '@/domain/geminate/class';
import { useSelectCards } from '@/app/[selectedClass]/select/useSelectCards';

export function SelectedGeminateCards({
  actions = () => [],
}: {
  actions?: PileActions<GeminateCard>;
}) {
  const handSizeByForm = geminate.handSize / 2;
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

  return <div className='flex flex-row justify-between items-center'>
    <div className='flex flex-col p-4'>
      <GeminateFormIcon form={GeminateForm.melee} />
      <p className='text-lg'>{meleeCards.length}/{handSizeByForm}</p>
    </div>
    <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
      <CardPile
        cards={meleeCards}
        actions={pileActions}
        maxCardLength={handSizeByForm}
      />
    </div>

    <div className='flex flex-col p-4'>
      <GeminateFormIcon form={GeminateForm.ranged} />
      <p className='text-lg'>{rangedCards.length}/{handSizeByForm}</p>
    </div>
    <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
      <CardPile
        cards={rangedCards}
        actions={pileActions}
        maxCardLength={handSizeByForm}
      />
    </div>
  </div>;
}
