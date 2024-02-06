'use client';

import { GeminateForm, geminateCards } from '@/domain/geminate/cards';
import { useCards } from './useCards';
import ChangeForm from './_components/geminate/ChangeForm';
import { CardComponent } from './_components/Card';
import { useState } from 'react';


export default function Home() {
  const currentLevel = 2;
  const cards = geminateCards.filter(card => card.level === 'X' || card.level <= currentLevel);

  const [currentForm, setCurrentForm] = useState<GeminateForm>(GeminateForm.melee);
  const {
    currentHand,
    discardCard,
    loseCard,
    recoverLostCard,
    recoverDiscardedCard,
  } = useCards(cards);

  return (<div className='p-8'>
    <ChangeForm form={currentForm} setForm={setCurrentForm} />

    <div className='p-4'>
      <p>Current hand</p>
      <div className='flex gap-4'>
        {currentHand
          .filter(card => card.form === currentForm)
          .filter(card => !card.isLost && !card.isDiscarded)
          .map((card, index) => <CardComponent key={`card-${index}`} card={card}
            onClickLeft={discardCard} onClickRight={loseCard} />)}
      </div>
    </div>

    <div className='p-4'>
      <p>Lost cards</p>
      <div className='flex gap-4'>
        {currentHand
          .filter(card => card.isLost)
          .map((card, index) => <CardComponent key={`card-${index}`} card={card}
            onClickLeft={recoverLostCard} onClickRight={recoverLostCard} />)}
      </div>
    </div>

    <div className='p-4'>
      <p>Discarded cards</p>
      <div className='flex gap-4'>
        {currentHand
          .filter(card => card.isDiscarded)
          .map((card, index) => <CardComponent key={`card-${index}`} card={card}
            onClickLeft={recoverDiscardedCard} onClickRight={recoverDiscardedCard} />)}
      </div>
    </div>
  </div>);
}
