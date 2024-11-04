'use client';

import { useFrosthavenStore } from '@/stores/cards.store';
import AvailableCardsByLevel from './AvailableCardsByLevel';

export default function CardsByLevelPage() {
  const level = useFrosthavenStore((state) => state.level);

  return <>
    <div className='col-span-full flex flex-row gap-4 w-full justify-between'>
      <AvailableCardsByLevel level={'X'} />

      <div className='grow'>
        <AvailableCardsByLevel level={1} />
      </div>
    </div>

    {level > 1 && Array.from({ length: level - 1 })
      .map((_, level) => level + 2)
      .map((level) => (
        <div key={level} className='col-span-1'>
          <AvailableCardsByLevel level={level} />
        </div>
      ))}
  </>;
}