'use client';

import { IdentityContext } from '@/context/IdentityContext';
import { MetalMosaicPressure } from '@/domain/metal-mosaic/class';
import Image from 'next/image';
import { use } from 'react';

const path = '/metal-mosaic/icons/fh-metal-mosaic-pressure-up-color-icon.webp';

export default function PressureUpIcon() {
  const {
    identity: currentPressure,
    changeIdentity,
  } = use(IdentityContext);

  const increasePressure = () => {
    if (currentPressure === MetalMosaicPressure.OVER) return;

    const newPressure = currentPressure === MetalMosaicPressure.LOW
      ? MetalMosaicPressure.REGULAR
      : currentPressure + 1;
    changeIdentity(newPressure);
  };

  return <Image
    onClick={increasePressure}
    src={path}
    alt={`pressure-up`}
    width={417}
    height={600}
  />;
}
