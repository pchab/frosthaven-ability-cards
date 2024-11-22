'use client';

import CardPile, { type PileActions } from '@/app/_components/cards/CardPile';
import GeminateFormIcon from '@/app/_components/class/geminate/GeminateFormIcon';
import BoardArea from '@/app/_components/layout/BoardArea';
import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import { geminate } from '@/domain/geminate/class';
import { useSelectCards } from '@/hooks/useSelectCards';

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

  return <BoardArea title={`Selected Cards: ${cards.length}/${geminate.handSize}`}>
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-col p-4'>
        <GeminateFormIcon form={GeminateForm.melee} />
        <p className='text-lg'>{meleeCards.length}/{geminate.handSize / 2}</p>
      </div>
      <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
        <CardPile
          cards={meleeCards}
          actions={pileActions}
          maxCardLength={geminate.handSize / 2}
        />
      </div>

      <div className='flex flex-col p-4'>
        <GeminateFormIcon form={GeminateForm.ranged} />
        <p className='text-lg'>{rangedCards.length}/{geminate.handSize / 2}</p>
      </div>
      <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
        <CardPile
          cards={rangedCards}
          actions={pileActions}
          maxCardLength={geminate.handSize / 2}
        />
      </div>
    </div>
  </BoardArea>;
}
