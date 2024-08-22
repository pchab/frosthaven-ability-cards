import { Card } from '@/domain/cards.type';
import { CardComponent, type ClickableAreasProps } from './Card';
import { useState } from 'react';

export default function CardPile<X extends Card>({
  cards,
  clickProps,
  vertical,
  name,
}: {
  cards: X[];
  clickProps: ClickableAreasProps<X>;
  vertical?: boolean;
  name?: string;
}) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | undefined>(undefined);
  const overlap = vertical ? '-mb-36' : '-mr-24';

  return <div
    className={`flex flex-wrap ${vertical ? 'flex-col' : ''} gap-4 min-w-36 min-h-56`}
    onMouseLeave={() => setHoveredCardIndex(undefined)}
  >
    {cards
      .map((card, index) => <div
        key={card.name}
        onMouseEnter={() => setHoveredCardIndex(index)}
        className={`w-fit ${hoveredCardIndex === index ? '' : overlap}`}
      >
        <CardComponent
          name={name ? `${name}-${card.name.replaceAll(' ', '-')}` : card.name}
          card={card}
          clickableAreasProps={clickProps} />
      </div>)}
  </div>
}
