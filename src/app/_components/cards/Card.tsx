'use client';

import { Card } from '@/domain/cards.type';
import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import ActionWheel, { type WheelAction } from './ActionWheel';
import EnchantSticker from './Enchant/EnchantSticker';

export function CardComponent<X extends Card>({
  card,
  children,
  actions = [],
  mapName,
}: {
  card: X;
  children?: ReactNode;
  actions?: WheelAction[];
  mapName?: string;
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
    {children}
    <Image
      useMap={`#${mapName}`}
      src={card.path}
      alt={`card ${card.name}`}
      width={143}
      height={200}
    />
    {card.availableEnhancements && card.availableEnhancements.map(({ position }, index) => {
      const enhancement = card.enhancements?.[index];
      return enhancement
        ? <EnchantSticker
          key={`${card.name}-enchant-slot-${index}`}
          enhancement={enhancement}
          position={position}
        />
        : <div key={`${card.name}-enchant-slot-${index}`}></div>;
    })}
  </div>;
}