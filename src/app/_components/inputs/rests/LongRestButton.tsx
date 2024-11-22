import { type Card } from '@/domain/cards.type';
import { useCards } from '@/hooks/useCards';
import { useState } from 'react';
import CardPile from '../../cards/CardPile';
import Modal from '../../layout/Modal';
import Button from '../Button';

export default function LongRestButton<X extends Card>({
  cards,
}: {
  cards: X[];
}) {
  const [doesLongRest, setDoesLongRest] = useState(false);
  const { makeRest } = useCards();

  const confirmLongRestAction = (lostCard: X) => [{
    name: 'Confirm Long Rest',
    onClick: () => makeRest(lostCard),
  }];

  return <>
    {doesLongRest &&
      <Modal onCancel={() => setDoesLongRest(false)}>
        <CardPile cards={cards} actions={confirmLongRestAction} />
      </Modal>
    }
    <Button onClick={() => setDoesLongRest(true)}>Long Rest</Button>
  </>;
}
