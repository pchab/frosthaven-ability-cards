'use client';

import { useFrosthavenStore } from '@/stores/cards.store';
import { useClassHook } from '@/stores/class.store';
import Image from 'next/image';
import { useShallow } from 'zustand/shallow';
import Button from '../_components/inputs/Button';
import { useSelectCards } from './useSelectCards';

export default function SelectCardsHeader() {
  const fhClass = useClassHook();
  const { level, setLevel } = useFrosthavenStore(useShallow((state) => ({
    level: state.level,
    setLevel: state.setLevel,
  })));
  const { validateSelection } = useSelectCards();
  const { name = '' } = fhClass ?? {};

  return <div className='flex items-center gap-4 p-3'>
    <h2 className='text-xl'>{name}</h2>
    {fhClass && <Image src={fhClass.path} alt={name} {...fhClass.iconSize} />}
    <label htmlFor='level'>Level {level}</label>
    <input type='range' id='level' name='level' min='1' max='9'
      value={level} onChange={e => setLevel(Number(e.target.value))}
    />
    <Button onClick={validateSelection}>Validate Selection</Button>
  </div >;
}