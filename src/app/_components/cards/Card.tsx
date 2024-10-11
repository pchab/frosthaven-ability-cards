'use client';

import { Card } from '@/domain/cards.type';
import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import ActionWheel, { type WheelAction } from '../ActionWheel';

export function CardComponent<X extends Card>({
  card,
  children,
  name = card.name,
  actions = [],
}: {
  card: X;
  children?: ReactNode;
  name?: string;
  actions?: WheelAction[];
}) {
  const [isActionWheelOpen, setIsActionWheelOpen] = useState(false);

  const toggleWheel = () => {
    setIsActionWheelOpen(!isActionWheelOpen);
  };

  const onClickCard = () => {
    if (actions.length === 0) return;
    if (actions.length === 1) {
      actions[0].onClick();
      return;
    }
    toggleWheel();
  };

  return <div onClick={onClickCard} className='relative' >
    <ActionWheel isOpen={isActionWheelOpen} actions={actions} />
    <Image
      useMap={`#${name}`}
      src={card.path}
      alt={`card ${card.name}`}
      width={143}
      height={200}
    />
    {children}
  </div>;
}