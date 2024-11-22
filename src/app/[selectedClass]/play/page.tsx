'use client';

import ChangeSpeed from '@/app/_components/class/blinkblade/ChangeSpeed';
import ChangeForm from '@/app/_components/class/geminate/ChangeForm';
import Button from '@/app/_components/inputs/Button';
import { isBlinkblade } from '@/domain/blinkblade/class';
import { type Card } from '@/domain/cards.type';
import { isGeminate } from '@/domain/geminate/class';
import { useCards } from '@/hooks/useCards';
import { ClassContext } from '@/context/ClassContext';
import { use } from 'react';

export default function PlayPage<X extends Card>() {
  const selectedClass = use(ClassContext);

  const {
    undo,
    redo,
  } = useCards<X>();

  return <div className='flex gap-4'>
    {isGeminate(selectedClass) && <ChangeForm />}
    {isBlinkblade(selectedClass) && <ChangeSpeed />}
    <Button onClick={undo}>Undo</Button>
    <Button onClick={redo}>Redo</Button>
  </div>;
}
