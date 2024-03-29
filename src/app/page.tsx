'use client';

import { bannerSpear } from '@/domain/banner-spear/class';
import { blinkblade } from '@/domain/blinkblade/class';
import { boneshaper } from '@/domain/boneshaper/class';
import { deathwalker } from '@/domain/deathwalker/class';
import { geminate } from '@/domain/geminate/class';
import { snowdancer } from '@/domain/snowdancer/class';
import { useFrosthavenStore } from '@/stores/cards.store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SelectClassPage() {
  const router = useRouter();
  const selectClass = useFrosthavenStore((state) => state.selectClass);

  const frosthavenClasses = [
    bannerSpear,
    blinkblade,
    boneshaper,
    deathwalker,
    geminate,
    snowdancer,
  ];

  return (<div className="flex flex-col p-32 items-center w-full">
    <Image src="/fh-frosthaven-logo.png" alt="Forsthaven logo" width={600} height={87} />
    <div className="flex p-32 justify-center w-full gap-8">
      {frosthavenClasses.map((fhClass) => {
        const { name, path, iconSize } = fhClass;
        return <Image
          key={name} src={path} alt={name}
          {...iconSize}
          onClick={() => {
            selectClass(fhClass);
            router.push('/select');
          }} />;
      })}
    </div>
  </div>);
}
