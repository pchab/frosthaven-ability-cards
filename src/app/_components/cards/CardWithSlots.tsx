'use client';

import { useCards } from '@/app/play/useCards';
import type { Card, SlotArea } from '@/domain/cards.type';
import { isDrifter } from '@/domain/drifter/class';
import { useClassHook } from '@/stores/class.store';
import * as m from 'framer-motion/m';
import { useEffect, useState } from 'react';
import CharacterToken from '../class/CharacterToken';
import type { WheelAction } from './ActionWheel';
import { CardComponent } from './Card';

type CardWithSlots = Required<Pick<Card, 'slots'>> & Card;

export default function CardWithSlots<X extends CardWithSlots>({
  card,
  actions,
}: {
  card: X;
  actions: WheelAction[];
}) {
  const { slots, tokenPosition = 0 } = card;
  const selectedClass = useClassHook();
  const [{ x, y, radius = 10 }, setTokenPosition] = useState<SlotArea>(slots[tokenPosition]);
  const { moveTokenForward, moveTokenBackward } = useCards<X>();

  useEffect(() => {
    setTokenPosition(slots[tokenPosition]);
  }, [card]);

  const moveTokenForwardAction = {
    name: 'Move token forward',
    onClick: () => moveTokenForward(card),
  };
  const moveTokenBackwardAction = {
    name: 'Move token backward',
    onClick: () => moveTokenBackward(card),
  };

  const canMoveBackward = selectedClass && isDrifter(selectedClass) && tokenPosition > 0;
  const tokenActions = canMoveBackward
    ? [moveTokenForwardAction, moveTokenBackwardAction]
    : [moveTokenForwardAction];

  return <CardComponent card={card} actions={[...actions, ...tokenActions]}>
    <m.div
      animate={{ x: x - radius, y: y - radius }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    >
      {selectedClass && <CharacterToken className={selectedClass.name} />}
    </m.div>
  </CardComponent>;
}
