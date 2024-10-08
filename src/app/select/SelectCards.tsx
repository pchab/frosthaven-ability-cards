'use client';

import { type Card } from '@/domain/cards.type';
import { type FrosthavenClass } from '@/domain/frosthaven-class.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SelectedCards } from './SelectedCards';
import CardPile from '../_components/cards/CardPile';
import Image from 'next/image';

export function SelectCards<X extends Card>({
  frosthavenClass,
  checkHandSize = (cards: X[]) => cards.length <= frosthavenClass.handSize,
  selectedCardComponent = SelectedCards,
}: {
  frosthavenClass: FrosthavenClass<X>;
  checkHandSize?: (cards: X[]) => boolean;
  selectedCardComponent?: (props: {
    cards: X[];
    onRemoveCard: (card: X) => void;
  }) => JSX.Element;
}) {
  const { level, setLevel, cards, selectCards } = useFrosthavenStore((state) => ({
    level: state.level,
    setLevel: state.setLevel,
    cards: state.cards,
    selectCards: state.selectCards,
  }));
  const [selectedCards, setSelectedCards] = useState<X[]>(cards as X[]);
  const router = useRouter();

  const selectCard = (card: X) => {
    const newSelectedCards = [...selectedCards, card];
    if (!selectedCards.includes(card) && checkHandSize(newSelectedCards)) {
      setSelectedCards(newSelectedCards);
    }
  };

  const removeCard = (card: X) => setSelectedCards(selectedCards.filter(c => c !== card));

  const selectAction = (card: X) => ({
    name: 'Select Card',
    onClick: () => selectCard(card),
  });

  const validateSelection = () => {
    selectCards(selectedCards);
    router.push('/play');
  }

  const remainingCards = frosthavenClass.cards
    .filter((card) => selectedCards.every((selectedCard) => selectedCard.path !== card.path))

  const AvailableCardsByLevel = (level: Card['level']) => (<div key={level} className='flex flex-col'>
    <p>{`Cards level ${level}`}</p>
    <CardPile
      key={`cards-level-${level}`}
      cards={remainingCards
        .filter((card) => card.level === level)}
      actions={[selectAction]}
    />
  </div>);
  const { name, path, iconSize } = frosthavenClass;

  return (<div className='p-4 flex flex-col gap-4 items-center'>
    <div className='flex justify-between items-center gap-4'>
      <p>{frosthavenClass.name}</p>
      <Image src={path} alt={name} {...iconSize} />
      <div className='flex items-center gap-4 p-3'>
        <label htmlFor='level'>Level {level}</label>
        <input type='range' id='level' name='level' min='1' max='9'
          value={level} onChange={e => setLevel(Number(e.target.value))}
        />
      </div>
      <button onClick={validateSelection}>Validate Selection</button>
    </div>

    <div className='flex items-center'>
      {selectedCardComponent({ cards: selectedCards, onRemoveCard: removeCard })}
    </div>

    <div className='flex gap-4'>
      {AvailableCardsByLevel('X')}

      {AvailableCardsByLevel(1)}
    </div>

    {level > 1 && <div className='flex flex-wrap'>
      {Array.from({ length: level - 1 })
        .map((_, level) => level + 2)
        .map((level) => (AvailableCardsByLevel(level)))}
    </div>}

  </div>);
}
