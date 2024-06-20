'use client';

import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

export default function SelectClass({
  children,
  fhClass,
}: {
  children: ReactNode;
  fhClass: FrosthavenClass<Card>;
}) {
  const router = useRouter();
  const selectClass = useFrosthavenStore((state) => state.selectClass);

  return (<button
    className='border-0'
    onClick={() => {
      selectClass(fhClass);
      router.push('/select');
    }}>
    {children}
  </button>)
}