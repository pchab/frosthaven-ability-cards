import { Card } from '@/domain/cards.type';
import { CardComponent } from './Card';
import { useEffect, useState } from 'react';
import type { WheelAction } from '../ActionWheel';
import { motion } from 'framer-motion';

const minWidthValues = [
  'min-w-[37px]',
  'min-w-[110px]',
  'min-w-[173px]',
  'min-w-[236px]',
  'min-w-[299px]',
  'min-w-[362px]',
  'min-w-[425px]',
  'min-w-[488px]',
  'min-w-[551px]',
  'min-w-[614px]',
  'min-w-[677px]',
  'min-w-[740px]',
  'min-w-[803px]',
  'min-w-[866px]',
];

export default function CardPile<X extends Card>({
  cards,
  actions,
  name,
  maxCardLength = 1,
}: {
  cards: X[];
  actions: ((card: X) => WheelAction)[];
  name?: string;
  maxCardLength?: number;
}) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number>(cards.length - 1);
  const overlap = '-ml-24';
  function getZIndex(index: number) {
    return 200 - Math.abs(((hoveredCardIndex ?? 0) - index) * 10);
  }

  useEffect(() => {
    setHoveredCardIndex(cards.length - 1);
  }, [cards.length]);

  const minWidthValue = maxCardLength > 1 ? minWidthValues[maxCardLength - 1] : '';

  return <div
    className={`flex flex-wrap gap-4 min-h-[200px] ml-24 ${minWidthValue}`}
    onMouseLeave={() => setHoveredCardIndex(cards.length - 1)}
  >
    {cards
      .map((card, index) => <motion.div
        key={card.name}
        onMouseEnter={() => setHoveredCardIndex(index)}
        onTap={() => setHoveredCardIndex(index)}
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
