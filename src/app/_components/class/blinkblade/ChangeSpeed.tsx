'use client';

import Button from '../../inputs/Button';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useShallow } from 'zustand/shallow';
import useSecretary from '../../secretary/useSecretary';
import { BlinkbladeSpeed } from '@/domain/secretary/game.state';
import BlinkbladeSpeedIcon from './BlinkbladeSpeedIcon';

export default function ChangeSpeed() {
  const {
    currentForm,
    setForm,
  } = useFrosthavenStore(useShallow((state) => ({
    currentForm: state.currentForm as BlinkbladeSpeed,
    setForm: state.setForm,
  })));
  const { isConnected, updateIdentity } = useSecretary();

  const changeSpeed = () => {
    const newForm = currentForm === BlinkbladeSpeed.FAST
      ? BlinkbladeSpeed.SLOW
      : BlinkbladeSpeed.FAST;
    setForm(newForm);

    if (isConnected) {
      updateIdentity(newForm);
    }
  };

  return <Button
    onClick={changeSpeed}>
    <div className='flex justify-center items-center gap-2 min-h-24'>
      <label>Change Speed</label>
      <BlinkbladeSpeedIcon speed={currentForm} />
    </div>
  </Button>;
}