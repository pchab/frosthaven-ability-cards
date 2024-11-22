'use client';

import { bannerSpear } from '@/domain/banner-spear/class';
import type { Card } from '@/domain/cards.type';
import { frosthavenClasses } from '@/domain/frosthaven-class';
import type { FrosthavenClass, FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import { getClass, setClass } from '@/stores/class.store';
import { createContext, useEffect } from 'react';

export const ClassContext = createContext<FrosthavenClass<Card>>(bannerSpear);

export default function ClassProvider({
  children,
  fhClassName,
}: {
  children: React.ReactNode;
  fhClassName: FrosthavenClassNames;
}) {
  const reset = useFrosthavenStore((state) => state.reset);
  const fhClass = frosthavenClasses
    .find(({ name }) => name === fhClassName)!;

  useEffect(() => {
    const previousClass = getClass();
    setClass(fhClass.name);
    if (previousClass && previousClass.name !== fhClass.name) {
      reset();
    }
  });

  return <ClassContext value={fhClass}>
    {children}
  </ClassContext>;
}
