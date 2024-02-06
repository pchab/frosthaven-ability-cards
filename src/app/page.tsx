'use client';

import { GeminateForm, geminateCards } from '@/domain/geminate/cards';
import { CardComponent } from './_components/card';
import { useCards } from './useCards';

export default function Home() {
  const currentLevel = 2;
  const cards = geminateCards.filter(card => card.level === 'X' || card.level <= currentLevel);

  const {
    currentHand,
    currentForm,
    setCurrentForm,
    discardCard,
    loseCard,
    recoverLostCard,
    recoverDiscardedCard,
  } = useCards(cards);

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
