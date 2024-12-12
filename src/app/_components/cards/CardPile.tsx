import { Card } from '@/domain/cards.type';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import * as m from 'framer-motion/m';
import { useCallback, useEffect, useRef, useState } from 'react';
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

type LongHandSize = 11 | 12 | 13 | 14;
const marginRightForLongHand = {
  11: '-mr-[78px]',
  12: '-mr-[84px]',
  13: '-mr-[88px]',
  14: '-mr-[93px]',
}

function getTouchedCardIndex<X extends Card>(
  pile: HTMLDivElement,
  { touches }: React.TouchEvent,
  cards: X[],
): number {
  const touch = touches[0];
  const pileRect = pile.getBoundingClientRect();
  const touchX = touch.clientX - pileRect.left;
  const touchY = touch.clientY - pileRect.top;

  return cards.findIndex((_, index) => {
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
}

export type PileActions<X extends Card> = (card: X) => WheelAction[];

export default function CardPile<X extends Card>({
  cards,
  actions,
  maxCardLength = 1,
}: {
  cards: X[];
  actions: PileActions<X>;
  maxCardLength?: number;
}) {
  const [focusCardIndex, setFocusCardIndex] = useState<number | null>(null);
  const pileRef = useRef<HTMLDivElement>(null);

  const getZIndex = useCallback((index: number) => focusCardIndex !== null
    ? 20 - Math.abs(focusCardIndex - index)
    : 20 - Math.abs(cards.length - 1 - index),
    [cards.length, focusCardIndex]);


  const handleTouchMove = useCallback((event: React.TouchEvent) => {
    if (pileRef.current) {
      const touchedCard = getTouchedCardIndex(pileRef.current, event, cards);

      if (touchedCard !== -1) {
        setFocusCardIndex(touchedCard);
      }
    }
  }, [cards]);

  const minWidthValue = maxCardLength > 1 ? minWidthValues[maxCardLength - 1] : '';

  const changeFocus = useCallback((index: number | null) => () => setFocusCardIndex(index), []);
  useEffect(changeFocus(null), [cards.length]);

  return <div
    ref={pileRef}
    className={`flex min-h-card ${minWidthValue}`}
    onMouseLeave={() => setFocusCardIndex(null)}
    onTouchMove={handleTouchMove}
  >
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode='popLayout'>
        {cards
          .map((card, index) => <m.div
            key={card.name}
            onMouseEnter={changeFocus(index)}
            onTouchStart={changeFocus(index)}
            onFocus={changeFocus(index)}
            whileHover={{ scale: 1.2 }}
            whileFocus={{ scale: 1.2 }}
            className={maxCardLength < 11
              ? '-mr-card-1/2'
              : marginRightForLongHand[maxCardLength as LongHandSize]
            }
            animate={{
              scale: focusCardIndex === index ? 1.2 : 1,
              zIndex: getZIndex(index),
            }}
          >
            <CardComponent
              card={card}
              actions={actions(card)} />
          </m.div>)}
      </AnimatePresence>
    </LazyMotion>
  </div>;
}
