'use client';

import { ClassContext } from '@/context/ClassContext';
import { WebSocketContext } from '@/context/WebSocketContext';
import { isBlinkblade } from '@/domain/blinkblade/class';
import type { Card } from '@/domain/cards.type';
import type { Identity } from '@/domain/frosthaven-class.type';
import { GeminateForm } from '@/domain/geminate/cards';
import { isGeminate } from '@/domain/geminate/class';
import { BlinkbladeSpeed, CharacterState, type Figure, type GameState } from '@/domain/secretary/game.state';
import { mapCharacterNameToSecretary } from '@/domain/secretary/secretary-character.mapper';
import { use, useEffect, useState } from 'react';

export default function useSecretary<X extends Card>() {
  const {
    isConnected,
    gameState,
    sendGameStateToGhs,
  } = use(WebSocketContext);
  const currentClass = use(ClassContext);
  const [currentCharacter, setCurrentCharacter] = useState<CharacterState>();
  const [currentPlayingFigure, setCurrentPlayingFigure] = useState<Figure>();
  const [state, setState] = useState<GameState['state']>();

  function updateGameStateForFigure<F extends Figure>(
    oldGameState: GameState,
    figureName: F['name'],
    newFigureState: Partial<F>,
  ): GameState {
    const {
      characters,
      monsters,
      revision,
      ...rest
    } = oldGameState;

    const currentCharacterIndex = characters
      .findIndex(({ name }) => name === figureName);
    const currentMonsterIndex = monsters
      .findIndex(({ name }) => name === figureName);

    const newFiguresState = {
      characters,
      monsters,
    };
    if (currentCharacterIndex > -1) {
      newFiguresState.characters = characters.with(currentCharacterIndex, {
        ...characters[currentCharacterIndex],
        ...newFigureState,
      });
    } else if (currentMonsterIndex > -1) {
      newFiguresState.monsters = monsters.with(currentMonsterIndex, {
        ...monsters[currentMonsterIndex],
        ...newFigureState,
      });
    }

    // update playSeconds
    const newGameState = {
      ...rest,
      revision: revision + 1,
      ...newFiguresState,
    }
    return newGameState;
  }

  const setGhsInitiative = ({ initiative }: X) => {
    if (!isConnected || !currentClass || !currentCharacter || !gameState) return;

    let newInitiative = initiative;

    if (isBlinkblade(currentClass)) {
      const currentSpeed = currentCharacter.identity;
      if (currentSpeed === BlinkbladeSpeed.SLOW) {
        newInitiative += 30;
      }
    }

    const newGameState = updateGameStateForFigure(gameState, currentCharacter.name, { initiative: newInitiative })!;
    if (sendGameStateToGhs) {
      sendGameStateToGhs(newGameState, ["setInitiative", currentCharacter.title || currentClass.name, `"${newInitiative}"`]);
    }
  };

  const setGhsInactive = () => {
    if (!isConnected || !currentClass || !gameState) return;
    let newGameState = gameState;
    const { figures } = gameState;
    const ghsCharacterName = mapCharacterNameToSecretary(currentClass.name);

    // Set the current character to inactive
    if (!currentCharacter || currentCharacter.off || !currentCharacter.active) return;
    newGameState = updateGameStateForFigure(gameState, currentCharacter.name, { active: false, off: true });

    // Set the next character to active if current character is not the last one
    const currentInitiativeOrder = figures
      .findIndex(figure => figure === `fh-${ghsCharacterName}`);
    if (currentInitiativeOrder < figures.length - 1) {
      const nextActingFigure = figures[currentInitiativeOrder + 1];
      newGameState = updateGameStateForFigure(newGameState, nextActingFigure.replace('fh-', ''), { active: true, off: false });
    }

    if (sendGameStateToGhs) {
      sendGameStateToGhs(newGameState!, ["unsetActive", currentCharacter.title || currentClass.name]);
    }
  }

  const setGhsIdentity = (form: Identity) => {
    if (!gameState || !currentClass || !currentCharacter) return;
    const { name, title } = currentCharacter;

    const undoInfo = ["nextIdentity", title || currentClass.name, name];
    if (isGeminate(currentClass)) {
      if (form === GeminateForm.melee) {
        undoInfo.push("range", "melee");
      }
      if (form === GeminateForm.ranged) {
        undoInfo.push("melee", "range");
      }
    }

    if (isBlinkblade(currentClass)) {
      if (form === BlinkbladeSpeed.FAST) {
        undoInfo.push("slow", "fast");
      }
      if (form === BlinkbladeSpeed.SLOW) {
        undoInfo.push("fast", "slow");
      }
    }
    const newGameState = updateGameStateForFigure(gameState, name, { identity: form })!;
    if (sendGameStateToGhs) {
      sendGameStateToGhs(newGameState, undoInfo);
    }
  }

  useEffect(() => {
    if (!gameState) return;

    const currentCharacter = gameState.characters
      .find(({ name }) => name === mapCharacterNameToSecretary(currentClass.name));
    const currentPlayingFigure = [...(gameState.characters ?? []), ...(gameState.monsters ?? [])]
      .find(({ active }) => active);

    setCurrentCharacter(currentCharacter);
    setCurrentPlayingFigure(currentPlayingFigure);
    setState(gameState.state);
  }, [gameState, currentClass.name]);

  return {
    isConnected,
    state,
    currentCharacter,
    currentPlayingFigure,
    setGhsInitiative,
    setGhsInactive,
    setGhsIdentity,
  };
}
