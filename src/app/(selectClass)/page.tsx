import Image from 'next/image';
import SelectClass from './SelectClass';
import Heading from '../_components/layout/Heading';
import { frosthavenClasses } from '@/domain/frosthaven-class';

export default function SelectClassPage() {
  return (<div className='flex flex-col pt-32 px-8 items-center w-full'>
    <Image src='/fh-frosthaven-logo.webp' alt='Forsthaven logo' width={600} height={87} />
    <Heading title='Select your class' />
    <div className='p-16'>
      <div className='flex flex-wrap p-6 justify-center w-full gap-8 bg-gradient-to-b from-black to-blue-500 rounded-lg'>
        {frosthavenClasses.map((fhClass) => <SelectClass key={fhClass.name} fhClass={fhClass} />)}
      </div>
    </div>
  </div>);
}
