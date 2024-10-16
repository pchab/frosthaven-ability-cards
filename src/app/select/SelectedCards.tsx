import { type Card } from '@/domain/cards.type';
import CardPile from '../_components/cards/CardPile';
import BoardArea from '../_components/layout/BoardArea';
import { useState } from 'react';
import EnchantCardModal from './(enchant)/EnchantCard';

export function SelectedCards<X extends Card>({
  cards,
  maxHandSize,
  onRemoveCard,
  onEnchantCard,
}: {
  cards: X[];
  maxHandSize: number;
  onRemoveCard: (card: X) => void;
  onEnchantCard: (card: X) => void;
}) {
  const [enchantingCard, setEnchantingCard] = useState<X | null>(null);

  const removeAction = (card: X) => ({
    name: 'Remove Card',
    onClick: () => onRemoveCard(card),
  });

  const enchantAction = (card: X) => ({
    name: 'Enchant Card',
    onClick: () => setEnchantingCard(card),
  });

  return <>
    {enchantingCard && <EnchantCardModal card={enchantingCard} onEnchantCard={(card: X) => {
      setEnchantingCard(null);
      onEnchantCard(card);
    }} />}
    <BoardArea title={`Selected Cards: ${cards.length}/${maxHandSize}`}>
      <CardPile
        cards={cards}
        actions={[removeAction, enchantAction]}
        maxCardLength={maxHandSize}
      />
    </BoardArea>
  </>;
}
