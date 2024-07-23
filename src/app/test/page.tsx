'use client';

import { drifterCards } from '@/domain/drifter/cards';
import { drifter } from '@/domain/drifter/class';
import CardWithSlot from '../_components/cards/CardWithSlot';

export default function TestCard() {
  const card = drifterCards.find(({ name }) => name === 'sustained momentum');

  if (!card) {
    return <>Missing Card</>
  }

  return <div className="flex flex-col p-32 items-center w-full">
    <CardWithSlot card={card} fhClass={drifter} clickableAreasProps={[]} />
  </div>;
}
