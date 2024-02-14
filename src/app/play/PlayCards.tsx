'use client';

import { CardStatus, type Card, CardActions } from '@/domain/cards.type';
import { CardComponent, HoverArea } from '../_components/cards/Card';
import CardPile from '../_components/cards/CardPile';
import ShortRestButton from '../_components/rests/ShortRestButton';
import { useCards } from './useCards';
import type { ReactNode } from 'react';
import BoardArea from '../_components/BoardArea';
import LongRestButton from '../_components/rests/LongRestButton';


export default function PlayCards<X extends Card>({
  cards,
  filterCard = () => true,
  children,
}: {
  cards: X[];
  filterCard?: (card: X) => boolean;
  children?: ReactNode;
}) {
  const {
    currentCards,
    selectCard,
    playCard,
    discardCard,
    loseCard,
    recoverCard,
    makeRest,
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
    .filter(card => [CardStatus.activeTop, CardStatus.activeBottom].includes(card.status));

  const selectClickProps = {
    getZone: () => HoverArea.left,
    onClick: selectCard,
    info: 'Select Card',
  };
  const loseClickProps = {
    getZone: () => HoverArea.right,
    onClick: loseCard,
    info: 'Lose Card',
  };
  const recoverClickProps = {
    getZone: () => HoverArea.all,
    onClick: recoverCard,
    info: 'Recover Card',
  };
  const playTopClickProps = {
    getZone: () => HoverArea.top,
    onClick: playCard('top'),
    info: 'Play top',
  };
  const playBottomClickProps = {
    getZone: () => HoverArea.bottom,
    onClick: playCard('bottom'),
    info: 'Play bottom',
  };
  const RemoveEffectClickProps = {
    getZone: (card: X) => card.status === CardStatus.activeTop ? HoverArea.top : HoverArea.bottom,
    onClick: (card: X) => {
      const action = card.status === CardStatus.activeTop ? card.actions.top : card.actions.bottom;
      action === CardActions.activeDiscard ? discardCard(card) : loseCard(card)
    },
    info: 'Remove effect',
  };

  return (<div className='p-4 flex flex-row'>

    <div className='basis-2/3'>
      <BoardArea title='Current hand'>
        <CardPile
          cards={currentHand}
          clickProps={[selectClickProps, loseClickProps]}
        />
      </BoardArea>

      <BoardArea title='Discarded cards'>
        <div className='flex justify-between'>
          <CardPile
            cards={discardPile}
            clickProps={[recoverClickProps]}
          />
          {discardPile.length > 1 && <div className='flex flex-col justify-between'>
            <ShortRestButton cards={discardPile} onShortRest={makeRest} />
            <LongRestButton cards={discardPile} onLongRest={makeRest} />
          </div>}
        </div>
      </BoardArea>

      <BoardArea title='Lost cards'>
        <CardPile
          cards={lostPile}
          clickProps={[recoverClickProps]}
        />
      </BoardArea>
    </div>

    <div className='basis-1/3 p-2 flex flex-col items-center'>
      {children}

      <BoardArea title='Selected cards'>
        <div className='flex gap-4 justify-center min-h-[266px]'>
          {selectedCards
            .map((card, index) => <div
              key={`select-card-${index}`}
              className='flex flex-col'>
              <CardComponent card={card}
                clickableAreasProps={[playTopClickProps, playBottomClickProps]} />
              <button onClick={() => discardCard(card)}>Default Action</button>
            </div>)}
        </div>
      </BoardArea>

      <BoardArea title='Active effects'>
        <CardPile
          cards={activeEffects}
          clickProps={[RemoveEffectClickProps]}
        />
      </BoardArea>
    </div>
  </div>);
}
