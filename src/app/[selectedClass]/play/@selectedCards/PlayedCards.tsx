'use client';

import { CardComponent } from '@/app/_components/cards/Card';
import { CardStatus, type Card } from '@/domain/cards.type';
import { useCards, type Action } from '@/app/[selectedClass]/play/useCards';
import useSecretary from '@/app/_components/secretary/useSecretary';
import { useFrosthavenStore } from '@/stores/cards.store';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import { useShallow } from 'zustand/shallow';

function getSelectedActionMasks(action: Action) {
  const masks = [];
  if (['top', 'default'].includes(action)) {
    masks.push(<div
      key={'mask-action-top'}
      className='m-2 absolute bg-black/80 left-0 w-action h-action top-[108px]' />);
  }
  if (['bottom', 'default'].includes(action)) {
    masks.push(<div
      key={'mask-action-bottom'}
      className='m-2 absolute bg-black/80 left-0 w-action h-action top-[12px]' />);
  }
  return masks;
}

export default function PlayedCards<X extends Card>() {
  const { currentCards } = useCards<X>();
  const {
    selectedActions,
    setSelectedActions,
  } = useFrosthavenStore(useShallow((store) => ({
    selectedActions: store.selectedActions,
    setSelectedActions: store.setSelectedActions,
  })))
  const {
    isConnected,
    setInitiative,
  } = useSecretary();

  const selectedCards = currentCards
    .filter(card => card.status === CardStatus.selected);

  const selectAction = (action: Action) => (card: X) => {
    const cardIndex = selectedCards.indexOf(card);
    const [firstAction, secondAction] = [...selectedActions];

    setSelectedActions(cardIndex
      ? [action !== 'default' && action === firstAction
        ? undefined : firstAction,
        action]
      : [action,
        action !== 'default' && action === secondAction
          ? undefined : secondAction]
    );
  };

  const playTopAction = (card: X) => ({
    name: 'Play top',
    onClick: () => selectAction('top')(card),
  });
  const playBottomAction = (card: X) => ({
    name: 'Play bottom',
    onClick: () => selectAction('bottom')(card),
  });
  const playDefaultAction = (card: X) => ({
    name: 'Play default',
    onClick: () => selectAction('default')(card),
  });
  const selectInitiative = (card: X) => ({
    name: 'Select Initiative',
    onClick: () => setInitiative(card),
  })

  const getPlayableActions = (card: X) => [
    playDefaultAction(card),
    playTopAction(card),
    ...(isConnected ? [selectInitiative(card)] : []),
    playBottomAction(card),
  ];

  return <div className='flex gap-4 min-h-card min-w-[302px]'>
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode='popLayout'>
        {selectedCards
          .map((card, index) => <CardComponent
            key={card.name}
            card={card}
            actions={getPlayableActions(card)}
          >
            {selectedActions[index] && getSelectedActionMasks(selectedActions[index])}
          </CardComponent>)}
      </AnimatePresence>
    </LazyMotion>
  </div>;
}