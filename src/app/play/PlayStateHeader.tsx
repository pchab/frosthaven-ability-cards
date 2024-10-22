'use client';

import ChangeForm from '@/app/_components/class/geminate/ChangeForm';
import { type Card } from '@/domain/cards.type';
import { isGeminate } from '@/domain/geminate/class';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useClassHook } from '@/stores/class.store';
import { useShallow } from 'zustand/shallow';
import Button from '../_components/inputs/Button';
import { useCards } from './useCards';

export default function PlayStateHeader<X extends Card>() {
  const selectedClass = useClassHook();
  const {
    currentForm,
    setForm,
  } = useFrosthavenStore(useShallow((state) => ({
    currentForm: state.currentForm,
    setForm: state.setForm,
  })));
  const {
    undo,
    redo,
  } = useCards<X>();

  if (!selectedClass) {
    return <></>;
  }

  return <>
    {isGeminate(selectedClass) && <ChangeForm form={currentForm} setForm={setForm} />}
    <Button onClick={undo}>Undo</Button>
    <Button onClick={redo}>Redo</Button>
  </>;
}