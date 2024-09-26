'use client';

import { Card, CardActions, CardStatus } from '@/domain/cards.type';
import { CardComponent } from '../../_components/cards/Card';
import CardWithSlot from '../../_components/cards/CardWithSlot';
import { useCards } from '@/app/play/useCards';
import { PredefinedHoverArea } from '../../_components/cards/hover-area';

export default function ActiveEffects<X extends Card>({
  vertical,
}: {
  vertical?: boolean;
}) {
  const {
    currentCards,
    discardCard,
    loseCard,
  } = useCards<X>();

  const activeEffects = currentCards
    .filter(card => [CardStatus.activeTop, CardStatus.activeBottom].includes(card.status));

  const removeEffectClickProps = {
    getZone: (card: X) => card.status === CardStatus.activeTop ? PredefinedHoverArea.top : PredefinedHoverArea.bottom,
    onClick: (card: X) => {
      const action = card.status === CardStatus.activeTop ? card.actions.top : card.actions.bottom;
      action === CardActions.activeDiscard ? discardCard(card) : loseCard(card)
    },
    info: 'Remove effect',
  };

  return <div
    className={`flex flex-wrap ${vertical ? 'flex-col' : ''} gap-4 min-w-36 min-h-56`}
  >
    {activeEffects
      .map((card) => {
        const cardElement = !!card.slots
          ? <CardWithSlot key={card.name} card={card} clickableAreasProps={[removeEffectClickProps]} />
          : <CardComponent key={card.name} card={card} clickableAreasProps={[removeEffectClickProps]} />;
        return cardElement;
      })
    }
  </div>
}
