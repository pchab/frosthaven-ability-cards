'use client';

import type { GeminateCard } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import { useClassHook } from '@/stores/class.store';
import CurrentHand from './CurrentHand';
import { use } from 'react';
import { IdentityContext } from '../IdentityContext';

export default function CurrentHandClassWrapper() {
  const selectedClass = useClassHook();
  const { identity: currentForm } = use(IdentityContext);

  if (!selectedClass) {
    return <CurrentHand />;
  }

  return <CurrentHand
    classFilter={
      (selectedClass && isGeminate(selectedClass))
        ? ({ form }: GeminateCard) => form === currentForm
        : undefined
    } />;
}