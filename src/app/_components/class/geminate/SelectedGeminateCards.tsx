import { GeminateForm, type GeminateCard } from '@/domain/geminate/cards';
import CardPile from '../../cards/CardPile';
import { useState } from 'react';
import EnchantCardModal from '@/app/select/(enchant)/EnchantCard';

export function SelectedGeminateCards({
  cards,
  maxHandSize,
  onRemoveCard,
  onEnchantCard,
}: {
  cards: GeminateCard[];
  maxHandSize: number;
  onRemoveCard: (card: GeminateCard) => void;
  onEnchantCard: (card: GeminateCard) => void;
}) {
  const [enchantingCard, setEnchantingCard] = useState<GeminateCard | null>(null);
  const meleeCards = cards
    .filter(({ form }) => form === GeminateForm.melee);
  const rangedCards = cards
    .filter(({ form }) => form === GeminateForm.ranged);

  const removeAction = (card: GeminateCard) => ({
    name: 'Remove Card',
    onClick: () => onRemoveCard(card),
  });
  const enchantAction = (card: GeminateCard) => ({
    name: 'Enchant Card',
    onClick: () => setEnchantingCard(card),
  });
  const actions = (card: GeminateCard) => card.availableEnhancements
    ? [removeAction(card), enchantAction(card)]
    : [removeAction(card)];

  return <div className='flex flex-row justify-between border-solid border-2 rounded-lg p-4 gap-4 bg-gradient-to-r from-slate-700 to-blue-300'>
    {enchantingCard && <EnchantCardModal card={enchantingCard} onEnchantCard={(card: GeminateCard) => {
      setEnchantingCard(null);
      onEnchantCard(card);
    }} />}
    <div key={'geminate-melee-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Melee form: {meleeCards.length}/{maxHandSize}</p>
      <CardPile
        cards={meleeCards}
        actions={actions}
        maxCardLength={maxHandSize}
      />
    </div>
    <div key={'geminate-ranged-cards'} className='flex flex-col gap-4'>
      <p className='text-lg'>Ranged form: {rangedCards.length}/{maxHandSize}</p>
      <CardPile
        cards={rangedCards}
        actions={actions}
        maxCardLength={maxHandSize}
      />
    </div>
  </div>;
}
