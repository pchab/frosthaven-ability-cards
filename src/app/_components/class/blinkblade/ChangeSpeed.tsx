'use client';

import { BlinkbladeSpeed } from '@/domain/secretary/game.state';
import { use } from 'react';
import Button from '../../inputs/Button';
import BlinkbladeSpeedIcon from './BlinkbladeSpeedIcon';
import { IdentityContext } from '@/context/IdentityContext';

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

  return <Button
    onClick={changeSpeed}>
    <div className='flex justify-center items-center gap-2 min-h-24 min-w-48'>
      <label>Change Speed</label>
      <BlinkbladeSpeedIcon speed={currentSpeed as BlinkbladeSpeed} />
    </div>
  </Button>;
}