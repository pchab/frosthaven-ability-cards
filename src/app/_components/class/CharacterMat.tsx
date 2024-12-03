'use client';

import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import { domAnimation, LazyMotion } from 'framer-motion';
import * as m from 'framer-motion/m';
import Image from 'next/image';
import { useState } from 'react';

export default function CharacterMat({
  className,
}: {
  className: FrosthavenClassNames;
}) {
  const [displayFront, setDisplayFront] = useState(true);
  const fhClassName = className.toLocaleLowerCase().replaceAll(' ', '-');
  const matPath = `/${fhClassName}/mats/fh-${fhClassName}.webp`;
  const matBackPath = `/${fhClassName}/mats/fh-${fhClassName}-back.webp`;

  return <div onClick={() => setDisplayFront(!displayFront)}
    className='absolute m-auto left-0 right-0 top-0 bottom-0 w-mat h-mat perspective-distant transform-3d'>
    <LazyMotion features={domAnimation}>
      <m.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: displayFront ? 0 : 180 }}
        className='absolute border-solid border-2 border-white'
      >
        <Image
          src={matPath}
          alt={`${fhClassName} mat`}
          width={600}
          height={392}
          className='backface-hidden'
        />
      </m.div>
      <m.div
        transition={{ duration: 0.7 }}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: displayFront ? 180 : 360 }}
        className='absolute border-solid border-2 border-white'
      >
        <Image
          src={matBackPath}
          alt={`${fhClassName} mat back`}
          width={600}
          height={392}
          className='backface-hidden'
        />
      </m.div>
    </LazyMotion>
  </div>;
}
