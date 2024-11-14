import { type Card } from '@/domain/cards.type';
import { useState } from 'react';
import { CardComponent } from '../../cards/Card';
import Image from 'next/image';
import Modal from '../../layout/Modal';
import Button from '../Button';
import { useCards } from '@/app/play/useCards';

function getRandomCard<X extends Card>(arr: X[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function ShortRestButton<X extends Card>({
  cards,
}: {
  cards: X[];
}) {
  const [lostCard, setLostCard] = useState<X | undefined>(undefined);
  const [hasRerolled, setHasRerolled] = useState(false);
  const { makeRest } = useCards();

  const confirmShortRestAction = {
    name: 'Confirm Short Rest',
    onClick: () => {
      if (!lostCard) return;
      makeRest(lostCard);
    },
  };

  return <>
    {lostCard && <Modal onCancel={() => setLostCard(undefined)}>
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
        <CardComponent card={lostCard} actions={[confirmShortRestAction]} />
      </div>
    </Modal>}
    <Button onClick={() => setLostCard(getRandomCard(cards))}>Short Rest</Button>
  </>;
}
