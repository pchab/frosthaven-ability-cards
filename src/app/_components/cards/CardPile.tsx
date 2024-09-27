import { Card } from '@/domain/cards.type';
import { CardComponent } from './Card';
import { useState } from 'react';
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
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | undefined>(undefined);
  const overlap = vertical ? '-mb-36' : '-mr-24';

  return <div
    className={`flex flex-wrap ${vertical ? 'flex-col' : ''} gap-4 min-h-48 min-w-36`}
    onMouseLeave={() => setHoveredCardIndex(undefined)}
  >
    {cards
      .map((card, index) => <motion.div
        key={card.name}
        onMouseEnter={() => setHoveredCardIndex(index)}
        whileHover={{ scale: 1.1 }}
        className={`w-fit ${hoveredCardIndex === index ? '' : overlap}`}
      >
        <CardComponent
          name={name ? `${name}-${card.name.replaceAll(' ', '-')}` : card.name}
          card={card}
          actions={actions.map((action) => action(card))} />
      </motion.div>)}
  </div>
}
