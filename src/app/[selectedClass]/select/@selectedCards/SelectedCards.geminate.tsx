'use client';

import CardPile, { type PileActions } from '@/app/_components/cards/CardPile';
import FormIcon from '@/app/_components/class/geminate/FormIcon';
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

  const removeAction = (card: GeminateCard) => ({
    name: 'Remove Card',
    onClick: () => removeCard(card),
  });
  const pileActions = (card: GeminateCard) => [removeAction(card), ...actions(card)];

  return <div className='flex flex-col gap-4 items-center'>
    {[GeminateForm.melee, GeminateForm.ranged].map((form) => {
      const cardsByForm = cards.filter((card) => card.form === form);
      return <div
        key={`select-cards-form-${form}`}
        className='flex flex-row justify-center items-center'
      >
        <div className='flex flex-col p-4'>
          <FormIcon form={form} />
          <p className='text-lg'>{cardsByForm.length}/{handSizeByForm}</p>
        </div>
        <CardPile
          cards={cardsByForm}
          actions={pileActions}
          maxCardLength={handSizeByForm}
        />
      </div>
    })}
  </div>;
}
