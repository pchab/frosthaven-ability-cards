import { ClassContext } from '@/context/ClassContext';
import { WebSocketContext } from '@/context/WebSocketContext';
import { isBlinkblade } from '@/domain/blinkblade/class';
import type { Card } from '@/domain/cards.type';
import { BlinkbladeSpeed } from '@/domain/secretary/game.state';
import { mapCharacterNameToSecretary } from '@/domain/secretary/secretary-character.mapper';
import { getCharacterState, getGameState, updateGameStateForFigure } from '@/stores/game.store';
import { use } from 'react';

export default function useSecretary<X extends Card>() {
  const {
    isConnected,
    update: updateGameState,
  } = use(WebSocketContext);
  const currentClass = use(ClassContext);

  const setInitiative = ({ initiative }: X) => {
    if (!updateGameState || !currentClass) return;
    const currentCharacter = getCharacterState(currentClass.name);
    if (!currentCharacter) return;

    let newInitiative = initiative;

    if (isBlinkblade(currentClass)) {
      const currentSpeed = currentCharacter.identity;
      if (currentSpeed === BlinkbladeSpeed.SLOW) {
        newInitiative += 30;
      }
    }

    const newGameState = updateGameStateForFigure(currentCharacter.name, { initiative: newInitiative })!;
    updateGameState(newGameState, ["setInitiative", currentCharacter.title, `"${newInitiative}"`]);
  };

  const setInactive = () => {
    if (!updateGameState || !currentClass) return;
    let gameState = getGameState();
    if (!gameState) return;
    const { characters, figures } = gameState;
    const ghsCharacterName = mapCharacterNameToSecretary(currentClass.name);

    const currentCharacter = characters
      .find(character => character.name === ghsCharacterName);

    // Set the current character to inactive
    if (!currentCharacter || currentCharacter.off || !currentCharacter.active) return;
    gameState = updateGameStateForFigure(ghsCharacterName, { active: false, off: true });

    // Set the next character to active if current character is not the last one
    const currentInitiativeOrder = figures
      .findIndex(figure => figure === `fh-${ghsCharacterName}`);
    if (currentInitiativeOrder < figures.length - 1) {
      const nextActingFigure = figures[currentInitiativeOrder + 1];
      gameState = updateGameStateForFigure(nextActingFigure.replace('fh-', ''), { active: true, off: false });
    }

    updateGameState(gameState!, ["unsetActive", currentCharacter.title]);
  }

  return {
    isConnected,
    setInitiative,
    setInactive,
  };
}
