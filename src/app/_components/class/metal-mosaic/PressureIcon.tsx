'use client';

import { IdentityContext } from '@/context/IdentityContext';
import { pressures } from '@/domain/metal-mosaic/class';
import Image from 'next/image';
import { use } from 'react';

export default function PressureIcon() {
  const { identity } = use(IdentityContext);

  const currentPressure = pressures[identity];
  const path = `/metal-mosaic/icons/fh-metal-mosaic-pressure-${currentPressure}-color-icon.webp`;

  return <Image
    aria-label={`${currentPressure} pressure`}
    src={path}
    alt={`pressure-${currentPressure}`}
    width={60}
    height={60}
  />;
}
