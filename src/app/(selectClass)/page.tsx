import Heading from '@/app/_components/layout/Heading';
import { frosthavenClasses } from '@/domain/frosthaven-class';
import Image from 'next/image';
import SelectClass from './SelectClass';

export default function SelectClassPage() {
  return <div className='flex flex-col gap-16 p-16 place-items-center'>
    <header>
      <Image priority loading='eager' src='/fh-frosthaven-logo.webp' alt='Frosthaven logo' width={600} height={87} />
    </header>
    <Heading title='Select your class' />
    <div className='grid grid-cols-3 lg:grid-cols-6 gap-8 p-6 place-items-center bg-linear-to-b from-black to-blue-500 rounded-lg'>
      {frosthavenClasses.map((fhClass) => <SelectClass key={fhClass.name} fhClass={fhClass} />)}
    </div>
  </div>;
}
