import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import { domAnimation, LazyMotion } from 'framer-motion';
import * as m from 'framer-motion/m';
import Image from 'next/image';

export default function CharacterMat({
  fhClassName,
  onClick,
  flipped = false,
}: {
  fhClassName: FrosthavenClassNames;
  onClick?: () => void;
  flipped?: boolean;
}) {
  const fhClassPath = fhClassName.toLocaleLowerCase().replaceAll(' ', '-');
  const matPath = `/${fhClassPath}/mats/fh-${fhClassPath}.webp`;
  const matBackPath = `/${fhClassPath}/mats/fh-${fhClassPath}-back.webp`;

  return <div
    className='w-mat h-mat'
    onClick={onClick}
    style={{
      'perspective': '1600px',
      'transformStyle': 'preserve-3d',
    }}>
    <LazyMotion features={domAnimation}>
      <m.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        className='absolute border-solid border-2 border-white'
      >
        <Image
          src={matPath}
          alt={`${fhClassName} mat`}
          width={600}
          height={392}
          style={{ 'backfaceVisibility': 'hidden' }}
        />
      </m.div>
      <m.div
        transition={{ duration: 0.7 }}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flipped ? 360 : 180 }}
        className='absolute border-solid border-2 border-white'
      >
        <Image
          src={matBackPath}
          alt={`${fhClassName} mat back`}
          width={600}
          height={392}
          style={{ 'backfaceVisibility': 'hidden' }}
        />
      </m.div>
    </LazyMotion>
  </div>;
}
