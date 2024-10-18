'use client';

import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import { setClass } from '@/stores/class.store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SelectClass({
  fhClass,
}: {
  fhClass: FrosthavenClass<Card>;
}) {
  const router = useRouter();
  const { name, path, iconSize } = fhClass;

  return (<button
    className='border-0 flex items-center justify-center'
    onClick={() => {
      setClass(fhClass.name);
      router.push('/select');
    }}>
    <Image src={path} alt={name} {...iconSize} />
  </button>)
}