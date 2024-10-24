import { type Card } from '@/domain/cards.type';
import CardPile from '../_components/cards/CardPile';
import BoardArea from '../_components/layout/BoardArea';
import { useState } from 'react';
import EnhanceCardModal from './(enhance)/EnhanceCard';

export function SelectedCards<X extends Card>({
  cards,
  maxHandSize,
  onRemoveCard,
  onEnhanceCard,
}: {
  cards: X[];
  maxHandSize: number;
  onRemoveCard: (card: X) => void;
  onEnhanceCard: (card: X) => void;
}) {
  const [enhanceingCard, setEnhanceingCard] = useState<X | null>(null);

  const removeAction = (card: X) => ({
    name: 'Remove Card',
    onClick: () => onRemoveCard(card),
  });
  const enhanceAction = (card: X) => ({
    name: 'Enhance Card',
    onClick: () => setEnhanceingCard(card),
  });
  const actions = (card: X) => card.availableEnhancements
    ? [removeAction(card), enhanceAction(card)]
    : [removeAction(card)];

  return <>
    {enhanceingCard && <EnhanceCardModal card={enhanceingCard} onEnhanceCard={(card: X) => {
      setEnhanceingCard(null);
      onEnhanceCard(card);
    }} />}
    <BoardArea title={`Selected Cards: ${cards.length}/${maxHandSize}`}>
      <CardPile
        cards={cards}
        actions={actions}
        maxCardLength={maxHandSize}
      />
    </BoardArea>
  </>;
}
