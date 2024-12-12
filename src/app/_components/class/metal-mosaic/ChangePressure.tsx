import PressureDownIcon from './PressureDownIcon';
import PressureIcon from './PressureIcon';
import PressureUpIcon from './PressureUpIcon';

export default function ChangePressure() {
  return <div className='grid grid-cols-3 grid-rows-2 place-items-center gap-2 h-24 w-24'>
    <div className='col-span-2 row-span-2'>
      <div className='rounded-full bg-white'>
        <PressureIcon />
      </div>
    </div>
    <PressureUpIcon />
    <PressureDownIcon />
  </div>;
}
