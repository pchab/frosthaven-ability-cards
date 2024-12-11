'use client';

import { forms, type GeminateCard } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import CurrentHand from './CurrentHand';
import { use } from 'react';
import { IdentityContext } from '../../../../context/IdentityContext';
import { ClassContext } from '@/context/ClassContext';

export default function CurrentHandClassWrapper() {
  const selectedClass = use(ClassContext);
  const { identity } = use(IdentityContext);

  return <CurrentHand
    classFilter={
      isGeminate(selectedClass)
        ? ({ form }: GeminateCard) => form === forms[identity]
        : undefined
    } />;
}