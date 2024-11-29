import { Card } from '@/domain/cards.type';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import * as m from 'framer-motion/m';
import { useEffect, useRef, useState } from 'react';
import type { WheelAction } from './ActionWheel';
import { CardComponent } from './Card';

const minWidthValues = [
  'min-w-cards-1',
  'min-w-cards-2',
  'min-w-cards-3',
  'min-w-cards-4',
  'min-w-cards-5',
  'min-w-cards-6',
  'min-w-cards-7',
  'min-w-cards-8',
  'min-w-cards-9',
  'min-w-cards-10',
  'min-w-cards-11',
  'min-w-cards-12',
  'min-w-cards-13',
  'min-w-cards-14',
];

export type PileActions<X extends Card> = (card: X) => WheelAction[];

export default function CardPile<X extends Card>({
  cards,
  actions,
  maxCardLength = 1,
  folded = false,
}: {
  cards: X[];
  actions: PileActions<X>;
  maxCardLength?: number;
  folded?: boolean;
}) {
  const [focusCardIndex, setFocusCardIndex] = useState<number | null>(null);
  const pileRef = useRef<HTMLDivElement>(null);

  function getZIndex(index: number) {
    return focusCardIndex !== null
      ? 20 - Math.abs(focusCardIndex - index)
      : 20 - Math.abs(cards.length - 1 - index);
  }

  useEffect(() => setFocusCardIndex(null), [cards.length]);

  const handleTouchMove = ({ touches }: React.TouchEvent) => {
    if (pileRef.current) {
      const touch = touches[0];
      const pile = pileRef.current;
      const pileRect = pile.getBoundingClientRect();
      const touchX = touch.clientX - pileRect.left;
      const touchY = touch.clientY - pileRect.top;

      const touchedCard = cards.findIndex((_, index) => {
        const card = pile.children[index] as HTMLElement;
        const cardRect = card.getBoundingClientRect();
        const cardX = cardRect.left - pileRect.left;
        const cardY = cardRect.top - pileRect.top;
        return (
          touchX >= cardX &&
          touchX <= cardX + cardRect.width &&
          touchY >= cardY &&
          touchY <= cardY + cardRect.height
        );
      });

      if (touchedCard !== -1) {
        setFocusCardIndex(touchedCard);
      }
    }
  };

  const minWidthValue = maxCardLength > 1 ? minWidthValues[maxCardLength - 1] : '';

  return <div
    ref={pileRef}
    className={`flex min-h-card ${minWidthValue} ${folded ? 'pointer-events-none' : ''}`}
    onMouseLeave={() => setFocusCardIndex(null)}
    onTouchMove={handleTouchMove}
  >
    <LazyMotion features={domAnimation}>
      <AnimatePresence initial={false} mode='popLayout'>
        {cards
          .map((card, index) => <m.div
            key={card.name}
            onMouseEnter={() => setFocusCardIndex(index)}
            onTouchStart={() => setFocusCardIndex(index)}
            onFocus={() => setFocusCardIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileFocus={{ scale: 1.2 }}
            initial={{
              y: -40,
              opacity: 0,
              marginRight: folded ? -128 : -64,
            }}
            animate={{
              marginRight: folded ? -128 : -64,
              scale: focusCardIndex === index ? 1.2 : 1,
              y: 0,
              opacity: 1,
              zIndex: getZIndex(index),
            }}
            exit={{
              y: -40,
              opacity: 0,
            }}
          >
            <CardComponent
              card={card}
              actions={actions(card)}
              flipped={folded}
            />
          </m.div>)}
      </AnimatePresence>
    </LazyMotion>
  </div>;
}
