import { type Card } from '@/domain/cards.type';
import { useState } from 'react';
import { CardComponent, HoverArea } from './Card';
import Image from 'next/image';

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

  const confirmShortRestProps = {
    getZone: () => HoverArea.all,
    onClick: (card: X) => {
      const recoveredCard = cards.filter(c => c !== card);
      onShortRest({ recovered: recoveredCard, lost: card });
    },
    info: 'Confirm Short Rest',
  };

  return <>
    {lostCard && <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/80'>
      {!hasRerolled && <button
        className='m-4'
        onClick={() => {
          setHasRerolled(true);
          const newLostCard = getRandomCard(cards.filter(c => c !== lostCard));
          setLostCard(newLostCard);
        }}
      >
        <div className='flex gap-2 items-center'>
          Reroll Short Rest
          <Image src="/icons/fh-damage-color-icon.png" alt="Suffer damage" width={24} height={23} />
        </div>
      </button>}
      <CardComponent card={lostCard} clickableAreasProps={[confirmShortRestProps]} />

    </div >}
    <button
      className='m-4'
      onClick={() => setLostCard(getRandomCard(cards))}
    >Short Rest</button>
  </>;
}
