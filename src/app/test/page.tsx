'use client';

import CardWithSlot from '../_components/cards/CardWithSlot';
import { geminateCards } from '@/domain/geminate/cards';
import { geminate } from '@/domain/geminate/class';

export default function TestCard() {
  const card = geminateCards.find(({ name }) => name === 'voice of salvation');

  if (!card) {
    return <>Missing Card</>
  }

  return <div className="flex flex-col p-32 items-center w-full">
    <CardWithSlot card={card} fhClass={geminate} clickableAreasProps={[]} />
  </div>;
}
