import { Card } from '@/domain/cards.type';
import { CardComponent } from './Card';
import { useEffect, useState } from 'react';
import type { WheelAction } from '../ActionWheel';
import { motion } from 'framer-motion';

export default function CardPile<X extends Card>({
  cards,
  actions,
  vertical,
  name,
}: {
  cards: X[];
  actions: ((card: X) => WheelAction)[];
  vertical?: boolean;
  name?: string;
}) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number>(cards.length - 1);
  const overlap = vertical ? '-mb-36' : '-mr-24';
  function getZIndex(index: number) {
    return 200 - Math.abs(((hoveredCardIndex ?? 0) - index) * 10);
  }

  useEffect(() => {
    setHoveredCardIndex(cards.length - 1);
  }, [cards.length]);

  return <div
    className={`flex flex-wrap ${vertical ? 'flex-col' : ''} gap-4 min-h-48 min-w-36`}
    onMouseLeave={() => setHoveredCardIndex(cards.length - 1)}
  >
    {cards
      .map((card, index) => <motion.div
        key={card.name}
        onMouseEnter={() => setHoveredCardIndex(index)}
        whileHover={{ scale: 1.1 }}
        className={`w-fit ${overlap}`}
        style={{ zIndex: getZIndex(index) }}
      >
        <CardComponent
          name={name ? `${name}-${card.name.replaceAll(' ', '-')}` : card.name}
          card={card}
          actions={actions.map((action) => action(card))} />
      </motion.div>)}
  </div>
}
