'use client';

import { CardComponent } from './Card';
import { useEffect, useState } from 'react';
import type { Card } from '@/domain/cards.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import type { WheelAction } from './ActionWheel';
import { useCards } from '@/app/play/useCards';
import { isDrifter } from '@/domain/drifter/class';
import CharacterToken from '../class/CharacterToken';
import { useShallow } from 'zustand/shallow';
import { getClass } from '@/stores/class.store';

export default function CardWithSlot<X extends Card>({
  card,
  actions,
}: {
  card: X;
  actions: WheelAction[];
}) {
  const selectedClass = getClass();
  const [tokenPosition, setTokenPosition] = useState<{
    left?: number;
    top?: number;
  }>();
  const { moveTokenForward, moveTokenBackward } = useCards<X>();

  if (!card.slots || !selectedClass) {
    throw new Error(`Card ${card.name} doest not have slots`)
  }

  useEffect(() => {
    if (!card.slots) {
      return;
    }
    const { x, y, radius = 10 } = card.slots[card.tokenPosition ?? 0];
    setTokenPosition({ left: x - radius, top: y - radius });
  }, [card]);

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
    <CharacterToken className={selectedClass.name} position={tokenPosition} />
  </CardComponent>;
}
