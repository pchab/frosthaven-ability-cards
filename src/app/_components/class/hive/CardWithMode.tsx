'use client';

import type { WheelAction } from '../../cards/ActionWheel';
import { CardComponent } from '../../cards/Card';
import type { HiveCard } from '@/domain/hive/cards';
import ModeToken from './ModeToken';
import { useHiveMode } from './useHiveMode';

export type HiveCardWithRequiredMode = Required<Pick<HiveCard, 'mode'>> & HiveCard;

export default function CardWithMode({
  card,
  actions = [],
  onCloseCard,
}: {
  card: HiveCardWithRequiredMode;
  actions?: WheelAction[];
  onCloseCard?: () => void;
}) {
  const { mode, isSelectedMode } = card;
  const { transferHive } = useHiveMode();

  const transferAction = {
    name: 'Transfer Hive',
    onClick: () => transferHive(card),
  };

  const tokenActions = [transferAction];

  return <CardComponent card={card} actions={[...actions, ...tokenActions]} onCloseCard={onCloseCard}>
    {isSelectedMode && mode && <ModeToken position={{ ...mode }} />}
  </CardComponent>;
}
