'use client';

import { type Card } from '@/domain/cards.type';
import Button from '@/app/_components/inputs/Button';
import { useCards } from '@/hooks/useCards';

export default function PlayStateHeader<X extends Card>() {
  const {
    undo,
    redo,
  } = useCards<X>();

  return <>
    <Button onClick={undo}>Undo</Button>
    <Button onClick={redo}>Redo</Button>
  </>;
}