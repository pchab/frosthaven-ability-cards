import { type FrosthavenClass } from '@/domain/frosthaven-class.type';
import { type Card } from '@/domain/cards.type';
import { useState } from 'react';
import { CardComponent, HoverArea } from '../_components/Card';
import { SelectedCards } from '../_components/SelectedCards';
import { useRouter } from 'next/navigation';
import { useFrosthavenStore } from '@/stores/cards.store';

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
  const { cards, selectCards } = useFrosthavenStore((state) => ({
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

  const selectClickProps = {
    zone: HoverArea.all,
    onClick: selectCard,
    info: 'Select Card',
  };

  const validateSelection = () => {
    selectCards(selectedCards);
    router.push('/play');
  }

  return (<div className='p-4 flex flex-row'>

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
            <div key={`cards-level-${level}`} className='flex  flex-wrap gap-4'>
              {frosthavenClass.cards
                .filter((card) => card.level === level)
                .filter((card) => selectedCards.every((selectedCard) => selectedCard.path !== card.path))
                .map((card, index) => <CardComponent key={`card-${level}-${index}`} card={card}
                  clickableAreasProps={[selectClickProps]}
                />)}
            </div>
          </>))}
      </div>

    </div>

    <div className='basis-1/4'>
      <button onClick={validateSelection}>Validate Selection</button>
      {selectedCardComponent({ cards: selectedCards, onRemoveCard: removeCard })}
    </div>
  </div>);
}
