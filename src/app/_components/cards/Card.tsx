'use client';

import { Card } from '@/domain/cards.type';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import * as m from 'framer-motion/m';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import ActionWheel, { type WheelAction } from './ActionWheel';
import EnhanceSticker from './Enhance/EnhanceSticker';

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
  const innerRef = useRef<HTMLDivElement>(null);
  const [isActionWheelOpen, setIsActionWheelOpen] = useState(false);

  console.count(card.name);

  const onClickCard = useCallback(() => {
    if (actions.length === 0) return;
    if (actions.length === 1) {
      actions[0].onClick();
      return;
    }
    setIsActionWheelOpen(!isActionWheelOpen);
  }, [actions, isActionWheelOpen]);

  const handleClickOutside: EventListener = useCallback((event) => {
    if (!innerRef.current?.contains(event.target as Node)) {
      setIsActionWheelOpen(false);
    }
  }, [innerRef]);
  const handleTouchOutside: EventListener = useCallback((event) => {
    const changedTouch = (event as TouchEvent).changedTouches[0];
    const elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
    if (!innerRef.current?.contains(elem as Node)) {
      setIsActionWheelOpen(false);
    }
  }, [innerRef]);
  useEffect(() => {
    if (isActionWheelOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchend', handleTouchOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleTouchOutside);
    };
  }, [isActionWheelOpen, handleClickOutside, handleTouchOutside]);

  return <LazyMotion features={domAnimation}>
    <m.div
      aria-label={card.name}
      ref={innerRef}
      onClick={onClickCard}
      className='relative'
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
    >
      <AnimatePresence>
        {isActionWheelOpen && <ActionWheel actions={actions} />}
      </AnimatePresence>
      {children}
      <Image
        {...(mapName ? { useMap: `#${mapName}` } : {})}
        src={card.path}
        alt={`card ${card.name}`}
        width={143}
        height={200}
      />
      {card.availableEnhancements
        ?.map(({ position }, index) => !!card.enhancements?.[index]
          && <EnhanceSticker
            key={`${card.name}-enhance-slot-${index}`}
            enhancement={card.enhancements?.[index]!}
            position={position}
          />)}
    </m.div>
  </LazyMotion>;
}