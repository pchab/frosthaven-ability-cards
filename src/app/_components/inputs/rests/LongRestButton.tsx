import { type Card } from '@/domain/cards.type';
import { useState } from 'react';
import CardPile from '../../cards/CardPile';
import Modal from '../../layout/Modal';
import Button from '../Button';

export default function LongRestButton<X extends Card>({
  cards,
  onLongRest,
}: {
  cards: X[];
  onLongRest: (args: { recovered: X[]; lost: X }) => void;
}) {
  const [doesLongRest, setDoesLongRest] = useState(false);

  const confirmLongRestAction = (card: X) => [{
    name: 'Confirm Long Rest',
    onClick: () => {
      const recoveredCard = cards.filter(c => c !== card);
      onLongRest({ recovered: recoveredCard, lost: card });
    },
  }];

  return <>
    {doesLongRest && <Modal onCancel={() => setDoesLongRest(false)}>
      <CardPile cards={cards} actions={confirmLongRestAction} />
    </Modal>}
    <Button onClick={() => setDoesLongRest(true)}>Long Rest</Button>
  </>;
}
