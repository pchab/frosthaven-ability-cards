'use client';

import { drifterCards } from '@/domain/drifter/cards';
import { CardComponent, HoverArea } from '../_components/cards/Card';

export default function TestCard() {
  const card = drifterCards.find(({ name }) => name === 'accurate strikes');

  if (!card) {
    return <>Missing Card</>
  }

  const moveSlotProps = [
    { x: 42, y: 58, radius: 10 },
    { x: 72, y: 58, radius: 10 },
    { x: 101, y: 58, radius: 10 },
    { x: 34, y: 82, radius: 10 },
    { x: 64, y: 82, radius: 10 },
    { x: 93, y: 82, radius: 10 },
  ].map((coords, index) => ({
    getZone: () => coords,
    onClick: () => console.log('move slot', index),
    info: `Move Slot ${index}`,
  }));

  return <div className="flex flex-col p-32 items-center w-full">
    <CardComponent card={card} clickableAreasProps={moveSlotProps} />
  </div>;
}
