import { type Card } from '@/domain/cards.type';
import { useState } from 'react';
import CardPile from '../cards/CardPile';
import Modal from '../Modal';
import { PredefinedHoverArea } from '../cards/hover-area';

export default function LongRestButton<X extends Card>({
  cards,
  onLongRest,
}: {
  cards: X[];
  onLongRest: (args: { recovered: X[]; lost: X }) => void;
}) {
  const [doesLongRest, setDoesLongRest] = useState(false);

  const confirmLongRestProps = {
    getZone: () => PredefinedHoverArea.all,
    onClick: (card: X) => {
      const recoveredCard = cards.filter(c => c !== card);
      onLongRest({ recovered: recoveredCard, lost: card });
    },
    info: 'Confirm Long Rest',
  };

  return <>
    {doesLongRest && <Modal>
      <CardPile cards={cards} clickProps={[confirmLongRestProps]} />
    </Modal>}
    <button
      className='m-4'
      onClick={() => setDoesLongRest(true)}
    >Long Rest</button>
  </>;
}
