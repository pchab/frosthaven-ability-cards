import { bannerSpear } from '@/domain/banner-spear/class';
import { blinkblade } from '@/domain/blinkblade/class';
import { boneshaper } from '@/domain/boneshaper/class';
import { deathwalker } from '@/domain/deathwalker/class';
import { drifter } from '@/domain/drifter/class';
import { fist } from '@/domain/fist/class';
import { geminate } from '@/domain/geminate/class';
import { snowdancer } from '@/domain/snowdancer/class';
import { trapper } from '@/domain/trapper/class';
import Image from 'next/image';
import SelectClass from './SelectClass';

export default function SelectClassPage() {
  const starterClasses = [
    bannerSpear,
    blinkblade,
    boneshaper,
    deathwalker,
    drifter,
    geminate,
  ];
  const unlockedClasses = [
    fist,
    snowdancer,
    trapper,
  ];

  return (<div className="flex flex-col p-32 items-center w-full">
    <Image src="/fh-frosthaven-logo.png" alt="Forsthaven logo" width={600} height={87} />
    <div className="p-32">
      <div className="flex p-6 justify-center w-full gap-8">
        {starterClasses.map((fhClass) => {
          const { name, path, iconSize } = fhClass;
          return <SelectClass key={name} fhClass={fhClass}>
            <Image src={path} alt={name} {...iconSize} />
          </SelectClass>;
        })}
      </div>
      <div className="flex p-6 justify-center w-full gap-8">
        {unlockedClasses.map((fhClass) => {
          const { name, path, iconSize } = fhClass;
          return <SelectClass key={name} fhClass={fhClass}>
            <Image src={path} alt={name} {...iconSize} />
          </SelectClass>;
        })}
      </div>
    </div>
  </div>);
}
