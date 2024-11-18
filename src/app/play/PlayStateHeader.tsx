'use client';

import ChangeForm from '@/app/_components/class/geminate/ChangeForm';
import { type Card } from '@/domain/cards.type';
import { isGeminate } from '@/domain/geminate/class';
import { useClassHook } from '@/stores/class.store';
import Button from '../_components/inputs/Button';
import { useCards } from './useCards';
import { isBlinkblade } from '@/domain/blinkblade/class';
import ChangeSpeed from '../_components/class/blinkblade/ChangeSpeed';

export default function PlayStateHeader<X extends Card>() {
  const selectedClass = useClassHook();

  const {
    undo,
    redo,
  } = useCards<X>();

  return <>
    {selectedClass && isGeminate(selectedClass) && <ChangeForm />}
    {selectedClass && isBlinkblade(selectedClass) && <ChangeSpeed />}
    <Button onClick={undo}>Undo</Button>
    <Button onClick={redo}>Redo</Button>
  </>;
}