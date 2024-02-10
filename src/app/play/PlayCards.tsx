'use client';

import { CardStatus, type Card } from '@/domain/cards.type';
import { CardComponent, HoverArea } from '../_components/Card';
import ShortRestButton from '../_components/ShortRestButton';
import { useCards } from './useCards';


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

  const selectClickProps = {
    zone: HoverArea.left,
    onClick: selectCard,
    info: 'Select Card',
  };
  const discardClickProps = {
    zone: HoverArea.left,
    onClick: discardCard,
    info: 'Discard Card',
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

  return (<div className='p-4 flex flex-row'>

    <div className='basis-3/4'>
      <div className='p-4'>
        <p>Current hand</p>
        <div className='flex gap-4'>
          {currentHand
            .map((card, index) => <CardComponent key={`card-${index}`} card={card}
              clickableAreasProps={[selectClickProps, loseClickProps]} />)}
        </div>
      </div>

      <div className='p-4'>
        <p>Lost cards</p>
        <div className='flex gap-4'>
          {lostPile
            .map((card, index) => <CardComponent key={`card-${index}`} card={card}
              clickableAreasProps={[recoverClickProps]} />)}
        </div>
      </div>

      <div className='p-4'>
        <p>Discarded cards</p>
        <div className='flex gap-4'>
          {discardPile
            .map((card, index) => <CardComponent key={`card-${index}`} card={card}
              clickableAreasProps={[recoverClickProps]} />)}
          {discardPile.length > 1 && <ShortRestButton cards={discardPile} onShortRest={makeShortRest} />}
        </div>
      </div>
    </div>

    <div className='basis-1/4'>
      <div className='p-4'>
        <p>Selected cards</p>
        <div className='flex gap-4'>
          {selectedCards
            .map((card, index) => <CardComponent key={`card-${index}`} card={card}
              clickableAreasProps={[discardClickProps, loseClickProps]} />)}
        </div>
      </div>
    </div>
  </div>);
}
