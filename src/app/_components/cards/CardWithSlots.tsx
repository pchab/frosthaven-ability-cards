'use client';

import { ClassContext } from '@/context/ClassContext';
import type { Card, SlotArea } from '@/domain/cards.type';
import { isDrifter } from '@/domain/drifter/class';
import * as m from 'motion/react-m';
import { use, useEffect, useState } from 'react';
import CharacterToken from '../class/CharacterToken';
import type { WheelAction } from './ActionWheel';
import { CardComponent } from './Card';
import { useCardsSlots } from './useCardsSlots';

export type CardWithRequiredSlots = Required<Pick<Card, 'slots'>> & Card;

export default function CardWithSlots<X extends CardWithRequiredSlots>({
  card,
  actions = [],
  onCloseCard,
}: {
  card: X;
  actions?: WheelAction[];
  onCloseCard?: () => void;
}) {
  const { slots, tokenPosition = 0 } = card;
  const selectedClass = use(ClassContext);
  const [{ x, y, radius = 10 }, setTokenPosition] = useState<SlotArea>(slots[tokenPosition]);
  const { moveTokenForward, moveTokenBackward } = useCardsSlots();

  useEffect(() => {
    setTokenPosition(slots[tokenPosition]);
  }, [slots, tokenPosition]);

  const moveTokenBackwardAction = {
    name: 'Move token backward',
    onClick: () => moveTokenBackward(card),
  };
  const moveTokenForwardAction = {
    name: 'Move token forward',
    onClick: () => moveTokenForward(card),
  };

  const canMoveBackward = selectedClass && isDrifter(selectedClass) && tokenPosition > 0;
  const tokenActions = canMoveBackward
    ? [moveTokenBackwardAction, moveTokenForwardAction]
    : [moveTokenForwardAction];

  return <CardComponent card={card} actions={[...actions, ...tokenActions]} onCloseCard={onCloseCard}>
    <m.div
      animate={{ x: x - radius, y: y - radius }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    >
      {selectedClass && <CharacterToken className={selectedClass.name} />}
    </m.div>
  </CardComponent>;
}
