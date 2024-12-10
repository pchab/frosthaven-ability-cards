'use client';

import { IdentityContext } from '@/context/IdentityContext';
import { MetalMosaicPressure } from '@/domain/metal-mosaic/class';
import Image from 'next/image';
import { use } from 'react';

const path = '/metal-mosaic/icons/fh-metal-mosaic-pressure-down-color-icon.webp';

export default function PressureDownIcon() {
  const {
    identity: currentPressure,
    changeIdentity,
  } = use(IdentityContext);

  const decreasePressure = () => {
    if (currentPressure === MetalMosaicPressure.LOW) return;

    const newPressure = currentPressure === MetalMosaicPressure.REGULAR
      ? MetalMosaicPressure.LOW
      : currentPressure - 1;
    changeIdentity(newPressure);
  };

  return <Image
    onClick={decreasePressure}
    src={path}
    alt={`pressure-down`}
    width={417}
    height={600}
  />;
}
