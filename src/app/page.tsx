'use client';

import { GeminateCard, GeminateForm, geminateCards } from '@/domain/geminate/cards';
import { CardComponent } from './_components/card';
import { useEffect, useState } from 'react';

export default function Home() {
  const currentLevel = 2;
  const cards = geminateCards.filter(card => card.level === 'X' || card.level <= currentLevel);
  const [currentHand, setCurrentHand] = useState<GeminateCard[]>(cards);
  const [currentForm, setCurrentForm] = useState<GeminateForm>(GeminateForm.melee);

  const discardCard = (card: GeminateCard) => {
    const newCurrentHand = currentHand.filter(c => c !== card);
    setCurrentHand([...newCurrentHand, { ...card, isDiscarded: true }]);
  }

  const loseCard = (card: GeminateCard) => {
    const newCurrentHand = currentHand.filter(c => c !== card);
    setCurrentHand([...newCurrentHand, { ...card, isLost: true }]);
  }

  const recoverLostCard = (card: GeminateCard) => {
    const newCurrentHand = currentHand.filter(c => c !== card);
    setCurrentHand([...newCurrentHand, { ...card, isLost: false }]);
  }

  const recoverDiscardedCard = (card: GeminateCard) => {
    const newCurrentHand = currentHand.filter(c => c !== card);
    setCurrentHand([...newCurrentHand, { ...card, isDiscarded: false }]);
  }

  return (<>
    <label>Select form</label>
    <select id='select-form' onChange={(event) => setCurrentForm(parseInt(event.target.value, 10) as GeminateForm)}>
      <option value={GeminateForm.melee}>Melee</option>
      <option value={GeminateForm.ranged}>Ranged</option>
    </select>

    <p>Current hand</p>
    <div className='flex gap-4'>
      {currentHand
        .filter(card => card.form === currentForm)
        .filter(card => !card.isLost && !card.isDiscarded)
        .map((card, index) => <CardComponent key={`card-${index}`} card={card}
          onClickLeft={discardCard} onClickRight={loseCard} />)}
    </div>

    <p>Lost cards</p>
    <div className='flex gap-4'>
      {currentHand
        .filter(card => card.isLost)
        .map((card, index) => <CardComponent key={`card-${index}`} card={card}
          onClickLeft={recoverLostCard} onClickRight={recoverLostCard} />)}
    </div>


    <p>Discarded cards</p>
    <div className='flex gap-4'>
      {currentHand
        .filter(card => card.isDiscarded)
        .map((card, index) => <CardComponent key={`card-${index}`} card={card}
          onClickLeft={recoverDiscardedCard} onClickRight={recoverDiscardedCard} />)}
    </div>
  </>);
}
