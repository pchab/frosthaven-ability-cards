'use client';

import { IdentityContext } from '@/context/IdentityContext';
import { MetalMosaicPressure } from '@/domain/metal-mosaic/class';
import Image from 'next/image';
import { use } from 'react';

function getPressureDescription(pressure: MetalMosaicPressure) {
  switch (pressure) {
    case MetalMosaicPressure.LOW:
      return 'low';
    case MetalMosaicPressure.REGULAR:
      return 'regular';
    case MetalMosaicPressure.HIGH:
      return 'high';
    case MetalMosaicPressure.OVER:
      return 'over';
  }
}

export default function PressureIcon() {
  const {
    identity: currentPressure,
  } = use(IdentityContext);

  const pressureString = getPressureDescription(currentPressure as MetalMosaicPressure);
  const path = `/metal-mosaic/icons/fh-metal-mosaic-pressure-${pressureString}-color-icon.webp`;

  return <Image
    src={path}
    alt={`pressure-${pressureString}`}
    width={60}
    height={60}
  />;
}
