import CardPile from '@/app/_components/cards/CardPile';
import BoardArea from '@/app/_components/layout/BoardArea';
import type { Card } from '@/domain/cards.type';
import { useSelectCards } from '../useSelectCards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useShallow } from 'zustand/shallow';

export default function AvailableCardsByLevel<X extends Card>({
  level,
}: {
  level: X['level'];
}) {
  const { availableCards, cards } = useFrosthavenStore(useShallow((state) => ({
    availableCards: state.availableCards as X[],
    cards: state.cards as X[],
  })));

  const { selectCard } = useSelectCards<X>();
  const selectAction = (card: X) => [{
    name: 'Select Card',
    onClick: () => selectCard(card),
  }];

  const filterRemainingCards = (card: X) => cards.every(({ path }) => path !== card.path);
  const levelCards = availableCards.filter((card) => level === card.level);

  return <BoardArea title={`Cards level ${level}`}>
    <CardPile
      key={`cards-level-${level}`}
      cards={levelCards.filter(filterRemainingCards)}
      actions={selectAction}
      maxCardLength={levelCards.length}
    />
  </BoardArea>;
};