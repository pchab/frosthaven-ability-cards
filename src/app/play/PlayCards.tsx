'use client';

import { CardStatus } from '@/domain/cards.type';
import { GeminateForm, geminateCards } from '@/domain/geminate/cards';
import { useState } from 'react';
import { CardComponent } from '../_components/Card';
import ShortRestButton from '../_components/ShortRestButton';
import ChangeForm from '../_components/geminate/ChangeForm';
import { useCards } from './useCards';


export default function PlayCards() {
  const currentLevel = 2;
  const cards = geminateCards.filter(card => card.level === 'X' || card.level <= currentLevel);

  const [currentForm, setCurrentForm] = useState<GeminateForm>(GeminateForm.melee);
  const {
    currentCards,
    discardCard,
    loseCard,
    recoverCard,
    makeShortRest,
  } = useCards(cards);

  const currentHand = currentCards
    .filter(card => card.form === currentForm)
    .filter(card => card.status === CardStatus.normal);

  const lostPile = currentCards
    .filter(card => card.status === CardStatus.lost);

  const discardPile = currentCards
    .filter(card => card.status === CardStatus.discarded);

  return (<div className='p-8'>
    <ChangeForm form={currentForm} setForm={setCurrentForm} />

    <div className='p-4'>
      <p>Current hand</p>
      <div className='flex gap-4'>
        {currentHand
          .map((card, index) => <CardComponent key={`card-${index}`} card={card}
            onClickLeft={discardCard} onClickRight={loseCard}
            leftInfo='Discard Card' rightInfo='Lose Card' />)}
      </div>
    </div>

    <div className='p-4'>
      <p>Lost cards</p>
      <div className='flex gap-4'>
        {lostPile
          .map((card, index) => <CardComponent key={`card-${index}`} card={card}
            onClickLeft={recoverCard} onClickRight={recoverCard}
            leftInfo='Recover Card' rightInfo='Recover Card' />)}
      </div>
    </div>

    <div className='p-4'>
      <p>Discarded cards</p>
      <div className='flex gap-4'>
        {discardPile
          .map((card, index) => <CardComponent key={`card-${index}`} card={card}
            onClickLeft={recoverCard} onClickRight={recoverCard}
            leftInfo='Recover Card' rightInfo='Recover Card' />)}
        {discardPile.length > 1 && <ShortRestButton cards={discardPile} onShortRest={makeShortRest} />}
      </div>
    </div>
  </div>);
}
