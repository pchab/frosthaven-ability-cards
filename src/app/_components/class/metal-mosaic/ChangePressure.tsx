import PressureDownIcon from './PressureDownIcon';
import PressureIcon from './PressureIcon';
import PressureUpIcon from './PressureUpIcon';

export default function ChangePressure() {
  return <div className='flex justify-center items-center gap-2 h-24 w-24'>
    <label className='hidden'>Change Pressure</label>
    <PressureIcon />
    <div className='flex flex-col justify-center items-center gap-2'>
      <PressureUpIcon />
      <PressureDownIcon />
    </div>
  </div>;
}
