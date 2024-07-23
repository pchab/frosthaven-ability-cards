'use client';

import { drifterCards } from '@/domain/drifter/cards';
import { CardComponent } from '../_components/cards/Card';
import Image from 'next/image';
import { useState } from 'react';

export default function TestCard() {
  const [tokenPosition, setTokenPosition] = useState<{
    visibility?: 'hidden';
    left?: number;
    top?: number;
  }>({ visibility: 'hidden' })
  const card = drifterCards.find(({ name }) => name === 'accurate strikes');

  if (!card) {
    return <>Missing Card</>
  }

  const moveSlotProps = [
    { x: 42, y: 58, radius: 10 },
    { x: 72, y: 58, radius: 10 },
    { x: 101, y: 58, radius: 10 },
    { x: 34, y: 82, radius: 10 },
    { x: 64, y: 82, radius: 10 },
    { x: 93, y: 82, radius: 10 },
  ].map((coords, index) => ({
    getZone: () => coords,
    onClick: () => {
      const { x, y, radius } = coords;
      setTokenPosition({ left: x - radius, top: y - radius });
    },
    info: `Move Slot ${index}`,
  }));

  return <div className="flex flex-col p-32 items-center w-full">
    <CardComponent card={card} clickableAreasProps={moveSlotProps}>
      <Image
        src={'/drifter/icons/fh-drifter-character-token.png'}
        alt='token'
        width={20}
        height={20}
        className='absolute'
        style={tokenPosition}
      />
    </CardComponent>
  </div>;
}
