import { Card } from '@/domain/cards.type';
import { CardComponent, type ClickableAreasProps } from './Card';
import { useState } from 'react';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';

export default function ActiveEffects<X extends Card>({
  fhClass,
  cards,
  clickProps,
  vertical,
}: {
  fhClass: FrosthavenClass<X>;
  cards: X[];
  clickProps: ClickableAreasProps<X>;
  vertical?: boolean;
}) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | undefined>(undefined);

  const uuid = crypto.randomUUID();
  const overlap = vertical ? '-mb-36' : '-mr-24';

  return <div
    className={`flex flex-wrap ${vertical ? 'flex-col' : ''} gap-4 min-w-36 min-h-56`}
    onMouseLeave={() => setHoveredCardIndex(undefined)}
  >
    {cards
      .map((card, index) => <div
        key={`pile-${uuid}-${index}`}
        onMouseEnter={() => setHoveredCardIndex(index)}
        className={`w-fit ${hoveredCardIndex === index ? '' : overlap}`}
      >
        <CardComponent card={card} clickableAreasProps={clickProps} />
      </div>)}
  </div>
}
