'use client';

import { type Card } from '@/domain/cards.type';
import { useCards } from './useCards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { isGeminate } from '@/domain/geminate/class';
import ChangeForm from '@/app/_components/class/geminate/ChangeForm';
import Button from '../_components/inputs/Button';
import { useShallow } from 'zustand/shallow';
import { useClassHook } from '@/stores/class.store';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  if (!selectedClass) {
    return <></>;
  }

  return <>
    {isGeminate(selectedClass) && <ChangeForm form={currentForm} setForm={setForm} />}
    <Button onClick={undo}>Undo</Button>
    <Button onClick={redo}>Redo</Button>
  </>;
}