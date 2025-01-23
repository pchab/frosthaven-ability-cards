'use client';

import { classNameToURI } from '@/domain/frosthaven-class';
import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import { domAnimation, LazyMotion } from 'motion/react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import { useState } from 'react';

export default function CharacterMat({
  className,
}: {
  className: FrosthavenClassNames;
}) {
  const [displayFront, setDisplayFront] = useState(true);
  const fhClassName = classNameToURI(className);
  const matPath = `/${fhClassName}/mats/fh-${fhClassName}.webp`;
  const matBackPath = `/${fhClassName}/mats/fh-${fhClassName}-back.webp`;

  return <button
    autoFocus
    onClick={() => setDisplayFront(!displayFront)}
    className='w-mat h-mat perspective-distant transform-3d'>
    <LazyMotion features={domAnimation}>
      <m.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: displayFront ? 0 : 180 }}
        className='absolute top-0 border-solid border-2 border-primary backface-hidden'
      >
        <Image
          src={matPath}
          alt={`${fhClassName} mat`}
          width={600}
          height={392}
        />
      </m.div>
      <m.div
        transition={{ duration: 0.7 }}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: displayFront ? 180 : 360 }}
        className='absolute top-0 border-solid border-2 border-primary backface-hidden'
      >
        <Image
          src={matBackPath}
          alt={`${fhClassName} mat back`}
          width={600}
          height={392}
        />
      </m.div>
    </LazyMotion>
  </button>;
}
