'use client';

import { CardComponent, type ClickableAreasProps } from './Card';
import Image from 'next/image';
import { useState } from 'react';
import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';

export default function CardWithSlot<X extends Card>({
  fhClass,
  card,
  clickableAreasProps,
}: {
  fhClass: FrosthavenClass<X>;
  card: X;
  clickableAreasProps: ClickableAreasProps<X>;
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
    info: `Move token to slot ${index}`,
  }));

  const fhClassName = fhClass.name.toLocaleLowerCase();
  const tokenPath = `/${fhClassName}/icons/fh-${fhClassName}-character-token.png`

  return <CardComponent card={card} clickableAreasProps={[...moveSlotProps, ...clickableAreasProps]}>
    <Image
      src={tokenPath}
      alt='token'
      width={20}
      height={20}
      className='absolute'
      style={tokenPosition}
    />
  </CardComponent>;
}
