'use client';

import { useSelectCards } from '@/app/[selectedClass]/select/useSelectCards';
import ClassIcon from '@/app/_components/class/ClassIcon';
import { ClassContext } from '@/context/ClassContext';
import { classNameToURI } from '@/domain/frosthaven-class';
import { useFrosthavenStore } from '@/stores/cards.store';
import Link from 'next/link';
import { use } from 'react';
import { useShallow } from 'zustand/shallow';

export default function SelectCardsHeader() {
  const fhClass = use(ClassContext);
  const { level, setLevel } = useFrosthavenStore(useShallow((state) => ({
    level: state.level,
    setLevel: state.setLevel,
  })));
  const { cards } = useSelectCards();
  const { name = '' } = fhClass ?? {};

  const canValidateSelection = fhClass && cards.length === fhClass.handSize;

  return <div className='flex items-center gap-4 p-3'>
    <h2 className='text-xl'>{name}</h2>
    <ClassIcon fhClass={fhClass} />
    <label htmlFor='level'>Level {level}</label>
    <input type='range' id='level' name='level' min='1' max='9'
      value={level} onChange={e => setLevel(Number(e.target.value))}
    />
    <div className={`bg-slate-600 ${canValidateSelection && 'hover:bg-blue-400'} border-primary text-white font-bold py-2 px-4 rounded-lg border-2 border-solid`}>
      {canValidateSelection
        ? <Link href={`/${classNameToURI(fhClass.name)}/play`}>Confirm Selection</Link>
        : <>Select your Cards</>
      }
    </div>
  </div>;
}