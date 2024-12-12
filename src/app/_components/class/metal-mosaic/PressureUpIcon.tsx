'use client';

import { IdentityContext } from '@/context/IdentityContext';
import { pressures, type MetalMosaicPressure } from '@/domain/metal-mosaic/class';
import Image from 'next/image';
import { use } from 'react';

const path = '/metal-mosaic/icons/fh-metal-mosaic-pressure-up-color-icon.webp';
const pressureIncrementMapping = {
  low: 'regular',
  regular: 'high',
  high: 'over',
};

export default function PressureUpIcon() {
  const {
    identity,
    changeIdentity,
  } = use(IdentityContext);

  const currentPressure = pressures[identity];
  const increasePressure = () => {
    if (currentPressure === 'over') return;

    const newPressure = pressureIncrementMapping[currentPressure] as MetalMosaicPressure;
    const fromTo: [string, string] = [currentPressure, newPressure];
    changeIdentity(pressures.indexOf(newPressure), fromTo);
  };

  return <Image
    aria-label='increase pressure'
    onClick={increasePressure}
    src={path}
    alt={`pressure-up`}
    width={417}
    height={600}
  />;
}
