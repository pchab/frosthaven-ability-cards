import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import Link from 'next/link';
import ClassIcon from '../_components/class/ClassIcon';
import { classNameToURI } from '@/domain/frosthaven-class';

export default function SelectClass({
  fhClass,
}: {
  fhClass: FrosthavenClass<Card>;
}) {
  const { name } = fhClass;

  return <Link
    href={`/${classNameToURI(name)}/select`}>
    <ClassIcon fhClass={fhClass} />
  </Link>;
}