'use client';

import { Card } from '@/domain/cards.type';
import { AnimatePresence, domAnimation, LazyMotion } from 'motion/react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import ActionWheel, { type WheelAction } from './ActionWheel';
import EnhanceSticker from './Enhance/EnhanceSticker';

export function CardComponent<X extends Card>({
  card,
  children,
  actions = [],
  mapName,
  autoFocus,
  onCloseCard,
}: {
  card: X;
  children?: ReactNode;
  actions?: WheelAction[];
  mapName?: string;
  autoFocus?: boolean;
  onCloseCard?: () => void;
}): ReactNode {
  const innerRef = useRef<HTMLDivElement>(null);
  const [isActionWheelOpen, setIsActionWheelOpen] = useState(false);

  const onClickCard = () => {
    if (actions.length === 0) return;
    if (actions.length === 1) {
      actions[0].onClick();
      return;
    }
    setIsActionWheelOpen(!isActionWheelOpen);
  };

  const handleClickOutsideEvent: EventListener = (event) => {
    if (!innerRef.current?.contains(event.target as Node)) {
      setIsActionWheelOpen(false);
    }
  };
  const handleTouchOutsideEvent: EventListener = (event) => {
    const changedTouch = (event as TouchEvent).changedTouches[0];
    const elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
    if (!innerRef.current?.contains(elem as Node)) {
      setIsActionWheelOpen(false);
    }
  };
  const handleKeyboardOutsideEvent = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || (event.key === 'Enter' && !innerRef.current?.contains(event.target as Node))) {
      setIsActionWheelOpen(false);
    }
  };

  useEffect(() => {
    if (isActionWheelOpen) {
      document.addEventListener('mousedown', handleClickOutsideEvent);
      document.addEventListener('touchend', handleTouchOutsideEvent);
      document.addEventListener('keydown', handleKeyboardOutsideEvent);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideEvent);
      document.removeEventListener('touchend', handleTouchOutsideEvent);
      document.removeEventListener('keydown', handleKeyboardOutsideEvent);
    };
  }, [isActionWheelOpen]);

  const cardLabel = actions.length === 1
    ? actions[0].name as string
    : card.name;

  return <LazyMotion features={domAnimation}>
    <m.div
      ref={innerRef}
      className='relative'
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
    >
      {children}
      <button
        autoFocus={autoFocus}
        aria-label={cardLabel}
        onClick={onClickCard}>
        <Image
          className='shadow-card shadow-gray-950/80'
          {...(mapName ? { useMap: `#${mapName}` } : {})}
          src={card.path}
          alt={`card ${card.name}`}
          width={143}
          height={200}
        />
      </button>
      {onCloseCard && <button
        aria-label='remove card'
        className='rounded-full border border-solid border-white px-1 bg-primary z-40 text-xs absolute -top-1 -right-1'
        onClick={onCloseCard}>X</button>}
      <AnimatePresence>
        {isActionWheelOpen && <ActionWheel actions={actions} onAction={() => setIsActionWheelOpen(false)} />}
      </AnimatePresence>
      {card.availableEnhancements
        ?.map(({ position }, index) => !!card.enhancements?.[index]
          && <EnhanceSticker
            key={`${card.name}-enhance-slot-${index}`}
            enhancement={card.enhancements?.[index]}
            position={position}
          />)}
    </m.div>
  </LazyMotion>;
}
