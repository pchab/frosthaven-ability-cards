'use client';

import { use } from 'react';
import SpeedIcon from './SpeedIcon';
import { IdentityContext } from '@/context/IdentityContext';
import { BlinkbladeSpeed } from '@/domain/blinkblade/class';

export default function ChangeSpeed() {
  const {
    identity: currentSpeed,
    changeIdentity,
  } = use(IdentityContext);

  const changeSpeed = () => {
    const newSpeed = currentSpeed === BlinkbladeSpeed.FAST
      ? BlinkbladeSpeed.SLOW
      : BlinkbladeSpeed.FAST;
    changeIdentity(newSpeed);
  };

  return <div
    className='flex justify-center items-center gap-2 h-24 w-24'
    onClick={changeSpeed}>
    <label className='hidden'>Change Speed</label>
    <SpeedIcon speed={currentSpeed as BlinkbladeSpeed} />
  </div>;
}