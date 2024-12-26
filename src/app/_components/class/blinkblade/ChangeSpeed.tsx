'use client';

import { use } from 'react';
import SpeedIcon from './SpeedIcon';
import { IdentityContext } from '@/context/IdentityContext';
import { BlinkbladeSpeed, speeds } from '@/domain/blinkblade/class';

export default function ChangeSpeed() {
  const {
    identity,
    changeIdentity,
  } = use(IdentityContext);

  const currentSpeed = speeds[identity];
  const changeSpeed = () => {
    const newSpeed = currentSpeed === 'fast'
      ? 'slow'
      : 'fast';
    const fromTo: [string, string] = [currentSpeed, newSpeed];
    changeIdentity(speeds.indexOf(newSpeed), fromTo);
  };

  return <button
    aria-label='change speed'
    className='flex justify-center items-center gap-2 h-24 w-24'
    onClick={changeSpeed}>
    <SpeedIcon speed={currentSpeed as BlinkbladeSpeed} />
  </button>;
}