'use client';

import CardWithSlot from '../_components/cards/CardWithSlot';
import { blinkbladeCards } from '@/domain/blinkblade/cards';
import { blinkblade } from '@/domain/blinkblade/class';

export default function TestCard() {
  const card = blinkbladeCards.find(({ name }) => name === 'hit and run');

  if (!card) {
    return <>Missing Card</>
  }

  return <div className="flex flex-col p-32 items-center w-full">
    <CardWithSlot card={card} fhClass={blinkblade} clickableAreasProps={[]} />
  </div>;
}
