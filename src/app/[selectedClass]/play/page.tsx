'use client';

import Button from '@/app/_components/inputs/Button';
import { type Card } from '@/domain/cards.type';
import { useCards } from '@/hooks/useCards';

export default function PlayPage<X extends Card>() {
  const {
    undo,
    redo,
  } = useCards<X>();

  return <div className='flex flex-col gap-4'>
    <Button onClick={undo}>Undo</Button>
    <Button onClick={redo}>Redo</Button>
  </div>;
}
