'use client';

import { MetalMosaicPressure } from '@/domain/secretary/game.state';
import { use } from 'react';
import { IdentityContext } from '@/context/IdentityContext';
import PressureIcon from './PressureIcon';
import PressureUpIcon from './PressureUpIcon';
import PressureDownIcon from './PressureDownIcon';

export default function ChangePressure() {
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

  const decreasePressure = () => {
    if (currentPressure === MetalMosaicPressure.LOW) return;

    const newPressure = currentPressure === MetalMosaicPressure.REGULAR
      ? MetalMosaicPressure.LOW
      : currentPressure - 1;
    changeIdentity(newPressure);
  };

  return <div className='flex justify-center items-center gap-2 h-24 w-24'>
    <label className='hidden'>Change Speed</label>
    <PressureIcon pressure={currentPressure as MetalMosaicPressure} />
    <div className='flex flex-col justify-center items-center gap-2'>
      <div onClick={increasePressure}>
        <PressureUpIcon />
      </div>
      <div onClick={decreasePressure}>
        <PressureDownIcon />
      </div>
    </div>
  </div>;
}