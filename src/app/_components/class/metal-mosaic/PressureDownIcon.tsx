'use client';

import { IdentityContext } from '@/context/IdentityContext';
import { pressures, type MetalMosaicPressure } from '@/domain/metal-mosaic/class';
import Image from 'next/image';
import { use } from 'react';

const path = '/metal-mosaic/icons/fh-metal-mosaic-pressure-down-color-icon.webp';
const pressureDecrementMapping: Record<MetalMosaicPressure, MetalMosaicPressure> = {
  low: 'low',
  regular: 'low',
  high: 'regular',
  over: 'high',
};

export default function PressureDownIcon() {
  const {
    identity,
    changeIdentity,
  } = use(IdentityContext);

  const currentPressure = pressures[identity];
  const decreasePressure = () => {
    const newPressure = pressureDecrementMapping[currentPressure];
    if (newPressure === currentPressure) return;
    const fromTo: [string, string] = [currentPressure, newPressure];
    changeIdentity(pressures.indexOf(newPressure), fromTo);
  };

  return <button
    onClick={decreasePressure}
    aria-label='decrease pressure'>
    <Image
      src={path}
      alt={`pressure-down`}
      width={417}
      height={600}
    />
  </button>;
}
