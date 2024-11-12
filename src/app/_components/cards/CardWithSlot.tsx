'use client';

import { useCards } from '@/app/play/useCards';
import type { Card } from '@/domain/cards.type';
import { isDrifter } from '@/domain/drifter/class';
import { useClassHook } from '@/stores/class.store';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CharacterToken from '../class/CharacterToken';
import type { WheelAction } from './ActionWheel';
import { CardComponent } from './Card';

export default function CardWithSlot<X extends Card>({
  card,
  actions,
}: {
  card: X;
  actions: WheelAction[];
}) {
  const selectedClass = useClassHook();
  const [tokenPosition, setTokenPosition] = useState<{
    left?: number;
    top?: number;
  }>();
  const { moveTokenForward, moveTokenBackward } = useCards<X>();

  useEffect(() => {
    if (!card.slots) {
      return;
    }
    const { x, y, radius = 10 } = card.slots[card.tokenPosition ?? 0];
    setTokenPosition({ left: x - radius, top: y - radius });
  }, [card]);

  if (!card.slots) {
    throw new Error(`Card ${card.name} doest not have slots`)
  }
  if (!selectedClass) {
    return <></>;
  }

  const moveTokenForwardAction = (card: X) => ({
    name: 'Move token forward',
    onClick: () => {
      moveTokenForward(card);
    },
  });

  const moveTokenBackwardAction = (card: X) => ({
    name: 'Move token backward',
    onClick: () => {
      moveTokenBackward(card);
    },
  });

  const tokenActions = selectedClass
    && isDrifter(selectedClass)
    && card.tokenPosition
    && card.tokenPosition > 0
    ? [moveTokenForwardAction(card), moveTokenBackwardAction(card)]
    : [moveTokenForwardAction(card)];

  return <CardComponent card={card} actions={[...actions, ...tokenActions]}>
    <motion.div
      animate={{ x: tokenPosition?.left, y: tokenPosition?.top }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    >
      <CharacterToken className={selectedClass.name} />
    </motion.div>
  </CardComponent>;
}
