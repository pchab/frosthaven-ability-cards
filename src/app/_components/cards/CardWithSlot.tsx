'use client';

import { CardComponent } from './Card';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Card } from '@/domain/cards.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import type { WheelAction } from '../ActionWheel';

export default function CardWithSlot<X extends Card>({
  card,
  actions,
}: {
  card: X;
  actions: WheelAction[];
}) {
  const selectedClass = useFrosthavenStore((state) => state.selectedClass);
  const [tokenPosition, setTokenPosition] = useState<{
    left?: number;
    top?: number;
  }>();

  if (!card.slots) {
    throw new Error(`Card ${card.name} doest not have slots`)
  }

  useEffect(() => {
    if (!card.slots) {
      return;
    }
    const { x, y, radius = 10 } = card.slots[card.tokenPosition ?? 0];
    setTokenPosition({ left: x - radius, top: y - radius });
  }, [card]);

  const fhClassName = selectedClass?.name.toLocaleLowerCase();
  const tokenPath = `/${fhClassName}/icons/fh-${fhClassName}-character-token.png`

  return <CardComponent card={card} actions={actions}>
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
