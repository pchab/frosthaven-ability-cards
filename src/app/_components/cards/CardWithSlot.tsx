'use client';

import { CardComponent } from './Card';
import Image from 'next/image';
import { useState } from 'react';
import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';

export default function CardWithSlot<X extends Card>({
  fhClass,
  card,
}: {
  fhClass: FrosthavenClass<X>;
  card: X;
}) {
  const [tokenPosition, setTokenPosition] = useState<{
    visibility?: 'hidden';
    left?: number;
    top?: number;
  }>({ visibility: 'hidden' });

  if (!card.slots) {
    throw new Error(`Card ${card.name} doest not have slots`)
  }

  const moveSlotProps = card.slots?.map((coords, index) => ({
    getZone: () => coords,
    onClick: () => {
      const { x, y, radius = 10 } = coords;
      setTokenPosition({ left: x - radius, top: y - radius });
    },
    info: 'Move token',
  }));

  return <CardComponent card={card} clickableAreasProps={moveSlotProps}>
    <Image
      src={`/${fhClass.name}/icons/fh-${fhClass.name}-character-token.png`}
      alt='token'
      width={20}
      height={20}
      className='absolute'
      style={tokenPosition}
    />
  </CardComponent>;
}
