import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import { useEffect, useState } from 'react';

export function useClassHook<X extends Card>() {
  const [currentClass, setCurrentClass] = useState<FrosthavenClass<X> | undefined>(undefined);
  useEffect(() => {
    const currentClass = getClass<X>();
    setCurrentClass(currentClass);
  }, []);

  return currentClass;
}

export function getClass<X extends Card>() {
  if (!localStorage) {
    return undefined;
  }
  const classString = localStorage.getItem('selectedClass');
  if (!classString) {
    return undefined;
  }
  return JSON.parse(classString) as FrosthavenClass<X>;
}

export function setClass<X extends Card>(selectedClass: FrosthavenClass<X>) {
  if (!localStorage) {
    return undefined;
  }
  localStorage.setItem('selectedClass', JSON.stringify(selectedClass));
}
