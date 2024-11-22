'use client';

import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import Link from 'next/link';
import ClassIcon from '../_components/class/ClassIcon';

export default function SelectClass({
  fhClass,
}: {
  fhClass: FrosthavenClass<Card>;
}) {
  const { name } = fhClass;

  return <Link
    href={`/${name.replace(' ', '').toLowerCase()}/select`}
    className='border-0 flex items-center justify-center'>
    <ClassIcon fhClass={fhClass} />
  </Link>;
}