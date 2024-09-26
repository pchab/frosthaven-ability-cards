import CardWithSlot from '../_components/cards/CardWithSlot';
import { trapperCards } from '@/domain/trapper/cards';

export default function TestCard() {
  const card = trapperCards.find(({ name }) => name === 'unavoidable outcome');

  if (!card) {
    return <>Missing Card</>
  }

  return <div className="flex flex-col p-32 items-center w-full">
    <CardWithSlot card={card} clickableAreasProps={[]} />
  </div>;
}
