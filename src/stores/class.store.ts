import type { Card } from '@/domain/cards.type';
import { frosthavenClasses } from '@/domain/frosthaven-class';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import { useEffect, useState } from 'react';

export function useClassHook<X extends Card>() {
  const [currentClass, setCurrentClass] = useState<FrosthavenClass<X> | undefined>(undefined);
  useEffect(() => {
    const currentClass = getClass<X>();
    setCurrentClass(currentClass as FrosthavenClass<X>);
  }, []);

  return currentClass;
}

export function getClass<X extends Card>() {
  if (!window.localStorage) {
    return undefined;
  }
  const classString = localStorage.getItem('selectedClass') as FrosthavenClass<X>['name'];
  return frosthavenClasses.find(({ name }) => name === classString) as FrosthavenClass<X>;
}

export function setClass<X extends Card>(selectedClassName: FrosthavenClass<X>['name']) {
  if (!window.localStorage) {
    return undefined;
  }
  localStorage.setItem('selectedClass', selectedClassName);
}
