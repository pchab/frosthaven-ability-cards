import { Card } from '@/domain/cards.type';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
}: {
  cards: X[];
  actions: PileActions<X>;
  maxCardLength?: number;
}) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number>(cards.length - 1);
  function getZIndex(index: number) {
    return 20 - Math.abs(((hoveredCardIndex ?? 0) - index));
  }

  useEffect(() => {
    setHoveredCardIndex(cards.length - 1);
  }, [cards.length]);

  const minWidthValue = maxCardLength > 1 ? minWidthValues[maxCardLength - 1] : '';

  return <div
    className={`flex gap-4 ml-24 min-h-card ${minWidthValue}`}
    onMouseLeave={() => setHoveredCardIndex(cards.length - 1)}
  >
    <AnimatePresence>
      {cards
        .map((card, index) => <motion.div
          key={card.name}
          onMouseEnter={() => setHoveredCardIndex(index)}
          onTouchMove={() => setHoveredCardIndex(index)}
          onFocus={() => setHoveredCardIndex(index)}
          onTap={() => setHoveredCardIndex(index)}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
          className='w-fit -ml-24'
          style={{ zIndex: getZIndex(index) }}
        >
          <CardComponent
            card={card}
            actions={actions(card)} />
        </motion.div>)}
    </AnimatePresence>
  </div>;
}
