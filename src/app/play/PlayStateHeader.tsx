'use client';

import { type Card } from '@/domain/cards.type';
import { useCards } from './useCards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { isGeminate } from '@/domain/geminate/class';
import ChangeForm from '@/app/_components/geminate/ChangeForm';

export default function PlayStateHeader<X extends Card>() {
  const {
    selectedClass,
    currentForm,
    setForm,
  } = useFrosthavenStore((state) => ({
    selectedClass: state.selectedClass,
    currentForm: state.currentForm,
    setForm: state.setForm,
  }));
  const {
    undo,
    redo,
  } = useCards<X>();

  return <>
    {!selectedClass || isGeminate(selectedClass) && <ChangeForm form={currentForm} setForm={setForm} />}
    <button onClick={undo}>Undo</button>
    <button onClick={redo}>Redo</button>
  </>;
}