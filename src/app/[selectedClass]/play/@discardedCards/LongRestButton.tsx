'use client';

import CardPile from '@/app/_components/cards/CardPile';
import Button from '@/app/_components/inputs/Button';
import Modal from '@/app/_components/layout/Modal';
import { type Card } from '@/domain/cards.type';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import { useState } from 'react';

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
        <CardPile
          cards={cards}
          actions={confirmLongRestAction}
          maxCardLength={cards.length}
        />
      </Modal>
    }
    <Button onClick={() => setDoesLongRest(true)}>Long Rest</Button>
  </>;
}
