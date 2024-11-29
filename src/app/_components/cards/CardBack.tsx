'use client';

import { ClassContext } from '@/context/ClassContext';
import * as m from 'framer-motion/m';
import Image from 'next/image';
import { use } from 'react';

export default function CardBack({ flipped }: { flipped: boolean }) {
  const fhClass = use(ClassContext);
  const cardBacKPath = `/${fhClass.name}/abilities/fh-back.webp`;

  return <m.div
    transition={{ duration: 0.7 }}
    initial={{ rotateY: 180 }}
    animate={{ rotateY: flipped ? 0 : 180 }}
    className='absolute pointer-events-none'
  >
    <Image
      src={cardBacKPath}
      alt={`${fhClass.name} back card`}
      width={143}
      height={200}
      style={{ 'backfaceVisibility': 'hidden' }}
    />
  </m.div>;
}