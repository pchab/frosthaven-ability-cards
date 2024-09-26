'use client';

import CardWithSlot from '../_components/cards/CardWithSlot';
import { boneshaperCards } from '@/domain/boneshaper/cards';
import { boneshaper } from '@/domain/boneshaper/class';

export default function TestCard() {
  const card = boneshaperCards.find(({ name }) => name === 'wrath of the turned earth');

  if (!card) {
    return <>Missing Card</>
  }

  return <div className="flex flex-col p-32 items-center w-full">
    <CardWithSlot card={card} fhClass={boneshaper} clickableAreasProps={[]} />
  </div>;
}
