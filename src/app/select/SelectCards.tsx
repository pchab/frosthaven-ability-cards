'use client';

import { type Card } from '@/domain/cards.type';
import { type FrosthavenClass } from '@/domain/frosthaven-class.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useRouter } from 'next/navigation';
import { type ReactNode } from 'react';
import { SelectedCards } from './SelectedCards';
import CardPile from '../_components/cards/CardPile';
import Image from 'next/image';
import BoardArea from '../_components/layout/BoardArea';
import Button from '../_components/inputs/Button';
import { useShallow } from 'zustand/shallow';

export function SelectCards<X extends Card>({
  frosthavenClass,
  checkHandSize = (cards: X[]) => cards.length <= frosthavenClass.handSize,
  selectedCardComponent = SelectedCards,
}: {
  frosthavenClass: FrosthavenClass<X>;
  checkHandSize?: (cards: X[]) => boolean;
  selectedCardComponent?: (props: {
    cards: X[];
    maxHandSize: number;
    onRemoveCard: (card: X) => void;
    onEnhanceCard: (card: X) => void;
  }) => ReactNode;
}) {
  const level = useFrosthavenStore(state => state.level);
  const {
    cards,
    availableCards,
    setLevel,
    selectCards,
    validateCardSelection,
    enhanceCard,
  } = useFrosthavenStore(useShallow((state) => ({
    cards: state.cards as X[],
    availableCards: state.availableCards as X[],
    setLevel: state.setLevel,
    selectCards: state.selectCards,
    validateCardSelection: state.validateCardSelection,
    enhanceCard: state.enhanceCard,
  })));
  const router = useRouter();
  const allCards = availableCards.length > 0 ? availableCards : frosthavenClass.cards;

  const selectCard = (card: X) => {
    const newSelectedCards = [...cards, card];
    if (!cards.includes(card) && checkHandSize(newSelectedCards)) {
      selectCards(newSelectedCards);
    }
  };

  const removeCard = (card: X) => selectCards(cards.filter(({ name }) => name !== card.name));

  const selectAction = (card: X) => [{
    name: 'Select Card',
    onClick: () => selectCard(card),
  }];

  const validateSelection = () => {
    if (cards.length === frosthavenClass.handSize) {
      validateCardSelection();
      router.push('/play');
    }
  }

  const filterRemainingCards = (card: X) => cards.every(({ path }) => path !== card.path);

  const AvailableCardsByLevel = (level: Card['level']) => {
    const levelCards = allCards.filter((card) => level === card.level);
    return <BoardArea title={`Cards level ${level}`}>
      <CardPile
        key={`cards-level-${level}`}
        cards={levelCards
          .filter(filterRemainingCards)}
        actions={selectAction}
        maxCardLength={levelCards.length}
      />
    </BoardArea>;
  };
  const { name, path, iconSize } = frosthavenClass;

  return (<div className='p-4 flex flex-col gap-4 items-center'>
    <div className='flex justify-between items-center gap-4 border-solid border-2 rounded-lg p-4 bg-gradient-to-r from-slate-700 to-blue-300'>
      <p>{frosthavenClass.name}</p>
      <Image src={path} alt={name} {...iconSize} />
      <div className='flex items-center gap-4 p-3'>
        <label htmlFor='level'>Level {level}</label>
        <input type='range' id='level' name='level' min='1' max='9'
          value={level} onChange={e => setLevel(Number(e.target.value))}
        />
      </div>
      <Button onClick={validateSelection}>Validate Selection</Button>
    </div>

    <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-full'>
        {selectedCardComponent({
          cards,
          onRemoveCard: removeCard,
          onEnhanceCard: enhanceCard,
          maxHandSize: frosthavenClass.handSize,
        })}
      </div>


      <div className='col-span-full flex flex-row gap-4 w-full justify-between'>
        {AvailableCardsByLevel('X')}

        <div className='grow'>
          {AvailableCardsByLevel(1)}
        </div>
      </div>

      {level > 1 && Array.from({ length: level - 1 })
        .map((_, level) => level + 2)
        .map((level) => (
          <div key={level} className='col-span-1'>
            {AvailableCardsByLevel(level)}
          </div>
        ))}
    </div>
  </div>);
}
