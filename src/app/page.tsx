'use client';

import { frosthavenClasses } from '@/domain/frosthaven-class.type';
import Image from 'next/image';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useRouter } from 'next/navigation';

export default function SelectClassPage() {
  const router = useRouter();
  const selectClass = useFrosthavenStore((state) => state.selectClass);

  return (<div className="flex p-32 justify-center w-full">
    {frosthavenClasses.map((fhClass) => {
      const { name, path } = fhClass;
      return <Image
        key={name} src={path} alt={name}
        width={33} height={60}
        onClick={() => {
          selectClass(fhClass);
          router.push('/select');
        }} />;
    })}
  </div>);
}
