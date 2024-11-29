'use client';

import { Card } from '@/domain/cards.type';
import { domAnimation, LazyMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { type WheelAction } from './ActionWheel';
import CardBack from './CardBack';
import CardFront from './CardFront';

export function CardComponent<X extends Card>({
  children,
  flipped = false,
  ...props
}: {
  children?: ReactNode;
  flipped?: boolean;
  card: X;
  actions?: WheelAction[];
  mapName?: string;
}) {
  return <div
    className='relative w-card h-card'
    style={{
      'perspective': '1600px',
      'transformStyle': 'preserve-3d',
    }}>
    <LazyMotion features={domAnimation}>
      <CardFront flipped={flipped} {...props}>{children}</CardFront>
      <CardBack flipped={flipped} />
    </LazyMotion>
  </div>;
}