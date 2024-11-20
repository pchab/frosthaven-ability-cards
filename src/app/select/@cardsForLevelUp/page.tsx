'use client';

import { useFrosthavenStore } from '@/stores/cards.store';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import * as m from 'framer-motion/m';
import AvailableCardsByLevel from './AvailableCardsByLevel';

export default function CardsForLevelUpPage() {
  const level = useFrosthavenStore((state) => state.level);

  return <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {level > 1 && Array.from({ length: level - 1 })
        .map((_, level) => level + 2)
        .map((level) => (
          <m.div
            key={level}
            className='col-span-1'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AvailableCardsByLevel level={level} />
          </m.div>
        ))}
    </AnimatePresence>
  </LazyMotion>;
}