'use client';

import ChangeForm from '@/app/_components/class/geminate/ChangeForm';
import { type Card } from '@/domain/cards.type';
import { isGeminate } from '@/domain/geminate/class';
import { useClassHook } from '@/stores/class.store';
import Button from '../_components/inputs/Button';
import { useCards } from './useCards';

export default function PlayStateHeader<X extends Card>() {
  const selectedClass = useClassHook();

  const {
    undo,
    redo,
  } = useCards<X>();

  return <>
    {selectedClass && isGeminate(selectedClass) && <ChangeForm />}
    <Button onClick={undo}>Undo</Button>
    <Button onClick={redo}>Redo</Button>
  </>;
}