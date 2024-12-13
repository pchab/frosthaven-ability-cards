'use client';

import type { WheelAction } from '../../cards/ActionWheel';
import { CardComponent } from '../../cards/Card';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import type { HiveCard } from '@/domain/hive/cards';
import ModeToken from './ModeToken';

type CardWithMode = Required<Pick<HiveCard, 'mode'>> & HiveCard;

export default function CardWithMode({
  card,
  actions,
}: {
  card: CardWithMode;
  actions: WheelAction[];
}) {
  const { moveTokenForward, transferHive } = useCards<CardWithMode>();

  const moveTokenForwardAction = {
    name: 'Move token forward',
    onClick: () => moveTokenForward(card),
  };
  const transferAction = {
    name: 'Transfer Hive',
    onClick: () => transferHive(card),
  };

  const tokenActions = [moveTokenForwardAction, transferAction];

  return <CardComponent card={card} actions={[...actions, ...tokenActions]}>
    <ModeToken position={{ ...card.mode }} />
  </CardComponent>;
}
