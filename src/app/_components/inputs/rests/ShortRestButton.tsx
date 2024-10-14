import { type Card } from '@/domain/cards.type';
import { useState } from 'react';
import { CardComponent } from '../../cards/Card';
import Image from 'next/image';
import Modal from '../../layout/Modal';
import Button from '../Button';

function getRandomCard<X extends Card>(arr: X[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function ShortRestButton<X extends Card>({
  cards,
  onShortRest,
}: {
  cards: X[];
  onShortRest: (args: { recovered: X[]; lost: X }) => void;
}) {
  const [lostCard, setLostCard] = useState<X | undefined>(undefined);
  const [hasRerolled, setHasRerolled] = useState(false);

  const confirmShortRestAction = {
    name: 'Confirm Short Rest',
    onClick: () => {
      if (!lostCard) return;
      const recoveredCard = cards.filter(c => c !== lostCard);
      onShortRest({ recovered: recoveredCard, lost: lostCard });
    },
  };

  return <>
    {lostCard && <Modal>
      <div className='flex flex-col gap-4 items-center'>
        {!hasRerolled &&
          <Button
            onClick={() => {
              setHasRerolled(true);
              const newLostCard = getRandomCard(cards.filter(c => c !== lostCard));
              setLostCard(newLostCard);
            }}
          >
            <div className='flex gap-2 items-center'>
              Reroll Short Rest
              <Image src='/icons/fh-damage-color-icon.png' alt='Suffer damage' width={24} height={23} />
            </div>
          </Button>}
        <CardComponent name='confirm-short-rest' card={lostCard} actions={[confirmShortRestAction]} />
      </div>
    </Modal>}
    <Button onClick={() => setLostCard(getRandomCard(cards))}>Short Rest</Button>
  </>;
}
