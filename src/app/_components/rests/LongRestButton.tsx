import { type Card } from '@/domain/cards.type';
import { useState } from 'react';
import CardPile from '../cards/CardPile';
import Modal from '../Modal';

export default function LongRestButton<X extends Card>({
  cards,
  onLongRest,
}: {
  cards: X[];
  onLongRest: (args: { recovered: X[]; lost: X }) => void;
}) {
  const [doesLongRest, setDoesLongRest] = useState(false);

  const confirmLongRestAction = (card: X) => ({
    name: 'Confirm Long Rest',
    onClick: () => {
      const recoveredCard = cards.filter(c => c !== card);
      onLongRest({ recovered: recoveredCard, lost: card });
    },
  });

  return <>
    {doesLongRest && <Modal>
      <CardPile name='confirm-long-rest' cards={cards} actions={[confirmLongRestAction]} />
    </Modal>}
    <button
      className='m-4'
      onClick={() => setDoesLongRest(true)}
    >Long Rest</button>
  </>;
}
