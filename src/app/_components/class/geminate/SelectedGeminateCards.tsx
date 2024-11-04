import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import CardPile from '../../cards/CardPile';
import { useState } from 'react';
import EnhanceCardModal from '@/app/select/(enhance)/EnhanceCard';
import { useSelectCards } from '@/app/select/useSelectCards';
import { geminate } from '@/domain/geminate/class';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useShallow } from 'zustand/shallow';

export function SelectedGeminateCards() {
  const cards = useFrosthavenStore(useShallow((state) => state.cards as GeminateCard[]));
  const { removeCard, enhanceCard } = useSelectCards<GeminateCard>();
  const [enhanceingCard, setEnhanceingCard] = useState<GeminateCard | null>(null);

  const meleeCards = cards
    .filter(({ form }) => form === GeminateForm.melee);
  const rangedCards = cards
    .filter(({ form }) => form === GeminateForm.ranged);

  const removeAction = (card: GeminateCard) => ({
    name: 'Remove Card',
    onClick: () => removeCard(card),
  });
  const enhanceAction = (card: GeminateCard) => ({
    name: 'Enhance Card',
    onClick: () => setEnhanceingCard(card),
  });
  const actions = (card: GeminateCard) => card.availableEnhancements
    ? [removeAction(card), enhanceAction(card)]
    : [removeAction(card)];

  return <div className='flex flex-row justify-between border-solid border-2 rounded-lg p-4 gap-4 bg-gradient-to-r from-slate-700 to-blue-300'>
    {enhanceingCard && <EnhanceCardModal card={enhanceingCard} onEnhanceCard={(card: GeminateCard) => {
      setEnhanceingCard(null);
      enhanceCard(card);
    }} />}
    <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Melee form: {meleeCards.length}/{geminate.handSize / 2}</p>
      <CardPile
        cards={meleeCards}
        actions={actions}
        maxCardLength={geminate.handSize / 2}
      />
    </div>
    <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Ranged form: {rangedCards.length}/{geminate.handSize / 2}</p>
      <CardPile
        cards={rangedCards}
        actions={actions}
        maxCardLength={geminate.handSize / 2}
      />
    </div>
  </div>;
}
