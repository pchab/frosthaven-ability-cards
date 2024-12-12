'use client';

import { IdentityContext } from '@/context/IdentityContext';
import { pressures, type MetalMosaicPressure } from '@/domain/metal-mosaic/class';
import Image from 'next/image';
import { use } from 'react';

const path = '/metal-mosaic/icons/fh-metal-mosaic-pressure-down-color-icon.webp';
const pressureDecrementMapping = {
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
    if (currentPressure === 'low') return;

    const newPressure = pressureDecrementMapping[currentPressure] as MetalMosaicPressure;
    const fromTo: [string, string] = [currentPressure, newPressure];
    changeIdentity(pressures.indexOf(newPressure), fromTo);
  };

  return <Image
    onClick={decreasePressure}
    src={path}
    alt={`pressure-down`}
    width={42}
    height={60}
  />;
}
