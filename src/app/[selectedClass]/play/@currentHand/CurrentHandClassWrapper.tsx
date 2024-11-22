'use client';

import type { GeminateCard } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import CurrentHand from './CurrentHand';
import { use } from 'react';
import { IdentityContext } from '../../../../context/IdentityContext';
import { ClassContext } from '@/context/ClassContext';

export default function CurrentHandClassWrapper() {
  const selectedClass = use(ClassContext);
  const { identity: currentForm } = use(IdentityContext);

  return <CurrentHand
    classFilter={
      (selectedClass && isGeminate(selectedClass))
        ? ({ form }: GeminateCard) => form === currentForm
        : undefined
    } />;
}