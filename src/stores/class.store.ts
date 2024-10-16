import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';

export function getClass<X extends Card>() {
  const classString = localStorage.getItem('selectedClass');
  if (!classString) {
    return undefined;
  }
  return JSON.parse(classString) as FrosthavenClass<X>;
}

export function setClass<X extends Card>(selectedClass: FrosthavenClass<X>) {
  localStorage.setItem('selectedClass', JSON.stringify(selectedClass));
}
