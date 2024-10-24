import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import CardPile from '../../cards/CardPile';
import { useState } from 'react';
import EnhanceCardModal from '@/app/select/(enhance)/EnhanceCard';

export function SelectedGeminateCards({
  cards,
  maxHandSize,
  onRemoveCard,
  onEnhanceCard,
}: {
  cards: GeminateCard[];
  maxHandSize: number;
  onRemoveCard: (card: GeminateCard) => void;
  onEnhanceCard: (card: GeminateCard) => void;
}) {
  const [enhanceingCard, setEnhanceingCard] = useState<GeminateCard | null>(null);
  const meleeCards = cards
    .filter(({ form }) => form === GeminateForm.melee);
  const rangedCards = cards
    .filter(({ form }) => form === GeminateForm.ranged);

  const removeAction = (card: GeminateCard) => ({
    name: 'Remove Card',
    onClick: () => onRemoveCard(card),
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
      onEnhanceCard(card);
    }} />}
    <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Melee form: {meleeCards.length}/{maxHandSize / 2}</p>
      <CardPile
        cards={meleeCards}
        actions={actions}
        maxCardLength={maxHandSize / 2}
      />
    </div>
    <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Ranged form: {rangedCards.length}/{maxHandSize / 2}</p>
      <CardPile
        cards={rangedCards}
        actions={actions}
        maxCardLength={maxHandSize / 2}
      />
    </div>
  </div>;
}
