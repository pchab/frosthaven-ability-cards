import { bannerSpear } from '@/domain/banner-spear/class';
import { blinkblade } from '@/domain/blinkblade/class';
import { boneshaper } from '@/domain/boneshaper/class';
import { deathwalker } from '@/domain/deathwalker/class';
import { deepwraith } from '@/domain/deepwraith/class';
import { drifter } from '@/domain/drifter/class';
import { fist } from '@/domain/fist/class';
import { geminate } from '@/domain/geminate/class';
import { hive } from '@/domain/hive/class';
import { painConduit } from "@/domain/pain-conduit/class";
import { pyroclast } from "@/domain/pyroclast/class";
import { snowdancer } from '@/domain/snowdancer/class';
import { trapper } from '@/domain/trapper/class';
import Image from 'next/image';
import SelectClass from './SelectClass';
import Heading from '../_components/layout/Heading';

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
    deepwraith,
    fist,
    hive,
    painConduit,
    pyroclast,
    snowdancer,
    trapper,
  ];

  return (<div className='flex flex-col pt-32 px-8 items-center w-full'>
    <Image src='/fh-frosthaven-logo.webp' alt='Forsthaven logo' width={600} height={87} />
    <Heading title='Select your class' />
    <div className='p-16'>
      <div className='flex flex-wrap p-6 justify-center w-full gap-8 bg-gradient-to-b from-black to-blue-500 rounded-lg'>
        {[...starterClasses, ...unlockedClasses].map((fhClass) => <SelectClass key={fhClass.name} fhClass={fhClass} />)}
      </div>
    </div>
  </div>);
}
