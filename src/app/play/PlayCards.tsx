'use client';

import { CardStatus, type Card } from '@/domain/cards.type';
import { CardComponent, HoverArea } from '../_components/Card';
import ShortRestButton from '../_components/ShortRestButton';
import { useCards } from './useCards';
import CardPile from '../_components/CardPile';


export default function PlayCards<X extends Card>({
  cards,
  filterCard = () => true,
}: {
  cards: X[];
  filterCard?: (card: X) => boolean;
}) {
  const {
    currentCards,
    selectCard,
    playCard,
    discardCard,
    loseCard,
    recoverCard,
    makeShortRest,
  } = useCards(cards);

  const currentHand = currentCards
    .filter(filterCard)
    .filter(card => card.status === CardStatus.inHand);

  const selectedCards = currentCards
    .filter(card => card.status === CardStatus.selected);

  const lostPile = currentCards
    .filter(card => card.status === CardStatus.lost);

  const discardPile = currentCards
    .filter(card => card.status === CardStatus.discarded);

  const activeEffects = currentCards
    .filter(card => [CardStatus.activeDiscard, CardStatus.activeLost].includes(card.status));

  const selectClickProps = {
    zone: HoverArea.left,
    onClick: selectCard,
    info: 'Select Card',
  };
  const loseClickProps = {
    zone: HoverArea.right,
    onClick: loseCard,
    info: 'Lose Card',
  };
  const recoverClickProps = {
    zone: HoverArea.all,
    onClick: recoverCard,
    info: 'Recover Card',
  };
  const playTopClickProps = {
    zone: HoverArea.top,
    onClick: playCard('top'),
    info: 'Play top',
  };
  const playBottomClickProps = {
    zone: HoverArea.bottom,
    onClick: playCard('bottom'),
    info: 'Play bottom',
  };
  const RemoveEffectClickProps = {
    zone: HoverArea.all,
    onClick: (card: X) => (card.status === CardStatus.activeDiscard ? discardCard(card) : loseCard(card)),
    info: 'Remove effect',
  };

  return (<div className='p-4 flex flex-row'>

    <div className='basis-3/4'>
      <div className='p-2'>
        <p>Current hand</p>
        <CardPile
          cards={currentHand}
          clickProps={[selectClickProps, loseClickProps]}
        />
      </div>

      <div className='p-2'>
        <p>Lost cards</p>
        <CardPile
          cards={lostPile}
          clickProps={[recoverClickProps]}
        />
      </div>

      <div className='p-2'>
        <p>Discarded cards</p>
        <CardPile
          cards={discardPile}
          clickProps={[recoverClickProps]}
        />
        {discardPile.length > 1 && <ShortRestButton cards={discardPile} onShortRest={makeShortRest} />}
      </div>
    </div>

    <div className='basis-1/4'>
      <p>Selected cards</p>
      <div className='flex gap-4'>
        {selectedCards
          .map((card, index) => <div
            key={`select-card-${index}`}
            className='flex flex-col'>
            <CardComponent card={card}
              clickableAreasProps={[playTopClickProps, playBottomClickProps]} />
            <button onClick={() => discardCard(card)}>Default Action</button>
          </div>)}
      </div>

      <div className='p-4'>
        <p>Active effects</p>
        <div className='flex gap-4'>
          <CardPile
            cards={activeEffects}
            clickProps={[RemoveEffectClickProps]}
          />
        </div>
      </div>
    </div>
  </div>);
}
