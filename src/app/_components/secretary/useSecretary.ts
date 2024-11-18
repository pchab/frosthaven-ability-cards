import { WebSocketContext } from '@/app/MenuContext';
import { isBlinkblade } from '@/domain/blinkblade/class';
import type { Card } from '@/domain/cards.type';
import type { Identity } from '@/domain/frosthaven-class.type';
import { GeminateForm } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import { BlinkbladeSpeed } from '@/domain/secretary/game.state';
import { useClassHook } from '@/stores/class.store';
import { getGameState } from '@/stores/game.store';
import { use } from 'react';

export default function useSecretary<X extends Card>() {
  const {
    isConnected,
    update: updateGameState,
  } = use(WebSocketContext);
  const currentClass = useClassHook();

  const updateInitiative = (initiative: number) => {
    updateGameState && updateGameState({ initiative }, ["setInitiative", `"${initiative}"`]);
  }

  const setInitiative = ({ initiative }: X) => {
    if (!updateGameState || !currentClass) return;

    if (isBlinkblade(currentClass)) {
      const currentSpeed = getGameState()
        ?.characters
        .find(({ name }) => name === currentClass.name.toLowerCase())
        ?.identity;
      if (currentSpeed === BlinkbladeSpeed.SLOW) {
        return updateInitiative(initiative + 30);
      }
    }

    updateInitiative(initiative);
  };

  const setInactive = () => {
    if (!updateGameState || !currentClass) return;

    updateGameState({ active: false, off: true }, ["unsetActive"]);
  }

  const updateIdentity = (form: Identity) => {
    if (!updateGameState || !currentClass) return;

    const undoInfo = ["nextIdentity"];
    if (isGeminate(currentClass)) {
      undoInfo.push("geminate");
      if (form === GeminateForm.melee) {
        undoInfo.push("range", "melee");
      }
      if (form === GeminateForm.ranged) {
        undoInfo.push("melee", "range");
      }
    }

    if (isBlinkblade(currentClass)) {
      undoInfo.push("blinkblade");
      if (form === BlinkbladeSpeed.FAST) {
        undoInfo.push("slow", "fast");
      }
      if (form === BlinkbladeSpeed.SLOW) {
        undoInfo.push("fast", "slow");
      }
    }
    updateGameState({ identity: form }, undoInfo);
  }

  return {
    isConnected,
    setInitiative,
    setInactive,
    updateIdentity,
  };
}
