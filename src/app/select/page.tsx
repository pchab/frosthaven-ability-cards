'use client';

import Image from 'next/image';
import Button from '../_components/inputs/Button';
import { useSelectCards } from './useSelectCards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useClassHook } from '@/stores/class.store';
import { useShallow } from 'zustand/shallow';

export default function SelectCardsHeader() {
  const fhClass = useClassHook();
  const { level, setLevel } = useFrosthavenStore(useShallow((state) => ({
    level: state.level,
    setLevel: state.setLevel,
  })));
  const { validateSelection } = useSelectCards();
  const {
    name = '',
  } = fhClass ?? {};

  return <>
    <p>{name}</p>
    {fhClass && <Image src={fhClass.path} alt={name} {...fhClass.iconSize} />}
    <div className='flex items-center gap-4 p-3'>
      <label htmlFor='level'>Level {level}</label>
      <input type='range' id='level' name='level' min='1' max='9'
        value={level} onChange={e => setLevel(Number(e.target.value))}
      />
    </div>
    <Button onClick={validateSelection}>Validate Selection</Button>
  </>;
}