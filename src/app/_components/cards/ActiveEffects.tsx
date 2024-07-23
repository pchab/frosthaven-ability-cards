import { Card } from '@/domain/cards.type';
import { CardComponent, type ClickableAreasProps } from './Card';
import { useState } from 'react';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import CardWithSlot from './CardWithSlot';

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
  return <div
    className={`flex flex-wrap ${vertical ? 'flex-col' : ''} gap-4 min-w-36 min-h-56`}
  >
    {cards
      .map((card, index) => {
        const cardElement = !!card.slots
          ? <CardWithSlot key={index} card={card} fhClass={fhClass} clickableAreasProps={clickProps} />
          : <CardComponent key={index} card={card} clickableAreasProps={clickProps} />;
        return cardElement;
      })
    }
  </div>
}
