'use client';

import { CardStatus, type Card, CardActions } from '@/domain/cards.type';
import CardPile from '../_components/cards/CardPile';
import ShortRestButton from '../_components/rests/ShortRestButton';
import { useCards } from './useCards';
import type { ReactNode } from 'react';
import BoardArea from '../_components/BoardArea';
import LongRestButton from '../_components/rests/LongRestButton';
import PlayedCard from '../_components/cards/PlayedCard';
import { PredefinedHoverArea } from '../_components/cards/hover-area';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';


export default function PlayCards<X extends Card>({
  fhClass,
  cards,
  filterCard = () => true,
  children,
}: {
  fhClass: FrosthavenClass<X>;
  cards: X[];
  filterCard?: (card: X) => boolean;
  children?: ReactNode;
}) {
  const {
    currentCards,
    selectCard,
    playCards,
    discardCard,
    loseCard,
    recoverCard,
    makeRest,
    undo,
    redo,
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
    getZone: () => PredefinedHoverArea.left,
    onClick: selectCard,
    info: 'Select Card',
  };
  const loseClickProps = {
    getZone: () => PredefinedHoverArea.right,
    onClick: loseCard,
    info: 'Lose Card',
  };
  const recoverClickProps = {
    getZone: () => PredefinedHoverArea.all,
    onClick: recoverCard,
    info: 'Recover Card',
  };
  const removeEffectClickProps = {
    getZone: (card: X) => card.status === CardStatus.activeTop ? PredefinedHoverArea.top : PredefinedHoverArea.bottom,
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

    <div className='basis-1/3 p-2 m-2 flex flex-col items-center'>
      <div className='flex gap-4'>
        {children}
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>

      <BoardArea title='Selected cards'>
        <PlayedCard cards={selectedCards} playCards={playCards} />
      </BoardArea>

      <BoardArea title='Active effects'>
        <CardPile
          cards={activeEffects}
          clickProps={[removeEffectClickProps]}
        />
      </BoardArea>
    </div>
  </div>);
}
