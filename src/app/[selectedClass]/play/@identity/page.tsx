'use client';

import ChangeSpeed from '@/app/_components/class/blinkblade/ChangeSpeed';
import ChangeForm from '@/app/_components/class/geminate/ChangeForm';
import { isBlinkblade } from '@/domain/blinkblade/class';
import { isGeminate } from '@/domain/geminate/class';
import { ClassContext } from '@/context/ClassContext';
import { use } from 'react';

export default function PlayPage() {
  const selectedClass = use(ClassContext);

  return <div>
    {isGeminate(selectedClass) && <ChangeForm />}
    {isBlinkblade(selectedClass) && <ChangeSpeed />}
  </div>;
}
