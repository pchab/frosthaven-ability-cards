'use client';

import { IdentityContext } from '@/context/IdentityContext';
import { pressures, type MetalMosaicPressure } from '@/domain/metal-mosaic/class';
import Image from 'next/image';
import { use } from 'react';

const path = '/metal-mosaic/icons/fh-metal-mosaic-pressure-up-color-icon.webp';
const pressureIncrementMapping: Record<MetalMosaicPressure, MetalMosaicPressure> = {
  low: 'regular',
  regular: 'high',
  high: 'over',
  over: 'over',
};

export default function PressureUpIcon() {
  const {
    identity,
    changeIdentity,
  } = use(IdentityContext);

  const currentPressure = pressures[identity];
  const increasePressure = () => {
    const newPressure = pressureIncrementMapping[currentPressure];
    if (newPressure === currentPressure) return;
    const fromTo: [string, string] = [currentPressure, newPressure];
    changeIdentity(pressures.indexOf(newPressure), fromTo);
  };

  return <button
    onClick={increasePressure}
    aria-label='increase pressure'>
    <Image
      src={path}
      alt={`pressure-up`}
      width={417}
      height={600}
    />
  </button>;
}
