'use client';

import CardWithSlot from '../_components/cards/CardWithSlot';
import { snowdancerCards } from '@/domain/snowdancer/cards';
import { snowdancer } from '@/domain/snowdancer/class';

export default function TestCard() {
  const card = snowdancerCards.find(({ name }) => name === 'snowball');

  if (!card) {
    return <>Missing Card</>
  }

  return <div className="flex flex-col p-32 items-center w-full">
    <CardWithSlot card={card} fhClass={snowdancer} clickableAreasProps={[]} />
  </div>;
}
