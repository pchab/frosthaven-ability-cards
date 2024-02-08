import { type FrosthavenClass } from '@/domain/frosthaven-class.type';
import { type Card } from '@/domain/cards.type';
import { useState } from 'react';
import { CardComponent } from '../_components/Card';
import { SelectedCards } from '../_components/SelectedCards';

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
  const [currentLevel, setCurrentLevel] = useState(2);
  const [selectedCards, setSelectedCards] = useState<X[]>([]);

  const selectCard = (card: X) => {
    const newSelectedCards = [...selectedCards, card];
    if (!selectedCards.includes(card) && checkHandSize(newSelectedCards)) {
      setSelectedCards(newSelectedCards);
    }
  };

  const removeCard = (card: X) => setSelectedCards(selectedCards.filter(c => c !== card));

  return (<div className='p-8 flex flex-row'>

    <div className='basis-3/4'>

      <div className='flex flex-col gap-4'>
        <label htmlFor='level'>Level {currentLevel}</label>
        <input type='range' id='level' name='level' min='1' max='9'
          value={currentLevel} onChange={e => setCurrentLevel(Number(e.target.value))}
        />
      </div>

      <div className='flex flex-col gap-4'>
        {Array.from({ length: currentLevel + 1 })
          .map((_, level) => level === 0 ? 'X' : level)
          .map((level) => (<>
            <p>{`Cards level ${level}`}</p>
            <div key={`cards-level-${level}`} className='flex gap-4'>
              {frosthavenClass.cards
                .filter((card) => card.level === level)
                .map((card, index) => <CardComponent key={`card-${level}-${index}`} card={card}
                  onClickLeft={selectCard} onClickRight={selectCard}
                  leftInfo={'select Card'} rightInfo={'select Card'}
                />)}
            </div>
          </>))}
      </div>

    </div>

    <div className='basis-1/4'>
      {selectedCardComponent({ cards: selectedCards, onRemoveCard: removeCard })}
    </div>
  </div>);
}
