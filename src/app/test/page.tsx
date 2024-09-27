'use client';

import { bannerSpear } from '@/domain/banner-spear/class';
import { blinkblade } from '@/domain/blinkblade/class';
import { boneshaper } from '@/domain/boneshaper/class';
import { deathwalker } from '@/domain/deathwalker/class';
import { deepwraith } from '@/domain/deepwraith/class';
import { drifter, isDrifter } from '@/domain/drifter/class';
import { fist } from '@/domain/fist/class';
import { geminate } from '@/domain/geminate/class';
import { hive } from '@/domain/hive/class';
import { snowdancer } from '@/domain/snowdancer/class';
import { trapper } from '@/domain/trapper/class';
import { useEffect, useState } from 'react';
import CardWithSlot from '../_components/cards/CardWithSlot';
import { CardComponent } from '../_components/cards/Card';
import { useFrosthavenStore } from '@/stores/cards.store';
import { CardActions } from '@/domain/cards.type';

function capitalize(str: string): string {
  return str.split(' ').map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
}

export default function TestCard() {
  const { selectedClass, selectClass } = useFrosthavenStore((state) => ({
    selectedClass: state.selectedClass ?? bannerSpear,
    selectClass: state.selectClass,
  }));
  const [currentCard, setCard] = useState(selectedClass.cards[0]);

  useEffect(() => {
    setCard(selectedClass.cards[0]);
  }, [selectedClass]);

  const allClasses = [
    bannerSpear,
    blinkblade,
    boneshaper,
    deathwalker,
    drifter,
    geminate,
    deepwraith,
    fist,
    hive,
    snowdancer,
    trapper,
  ];

  const moveTokenForwardAction = {
    name: 'Move token forward',
    onClick: () => {
      const card = { ...currentCard };
      if (!card.slots) {
        return;
      }
      card.tokenPosition = Math.min((card.tokenPosition ?? 0) + 1, card.slots.length - 1);
      setCard(card);
    },
  };

  const moveTokenBackwardAction = {
    name: 'Move token backward',
    onClick: () => {
      const card = { ...currentCard };
      if (!card.slots) {
        return;
      }
      card.tokenPosition = Math.max((card.tokenPosition ?? 0) - 1, 0);
      setCard(card);
    },
  };

  return <div className="flex flex-col p-32 items-center w-full gap-4">
    <select
      className='p-4 bg-black'
      onChange={(e) => {
        console.log(e.target.value);
        selectClass(allClasses.find(({ name }) => name === e.target.value) ?? bannerSpear)
      }}
    >
      {allClasses.map((fhClass) => {
        return <option key={fhClass.name} value={fhClass.name}>{fhClass.name}</option>;
      })}
    </select>
    <select
      className='p-4 bg-black'
      onChange={(e) => setCard(selectedClass.cards.find(({ name }) => name === e.target.value) ?? selectedClass.cards[0])}
    >
      {selectedClass.cards.map((card) => {
        return <option key={card.name} value={card.name}>{capitalize(card.name)}</option>;
      })}
    </select>
    <div className="flex gap-4 border border-white p-4">
      {currentCard.slots
        ? <CardWithSlot card={currentCard} actions={
          isDrifter(selectedClass)
            ? [moveTokenForwardAction, moveTokenBackwardAction]
            : [moveTokenForwardAction]
        } />
        : <CardComponent card={currentCard} actions={[]} />
      }

      <div>
        <h3 className='font-bold'>Details:</h3>
        <div>Level: {currentCard.level}</div>
        <div>Top: {CardActions[currentCard.actions.top]}</div>
        <div>Bottom: {CardActions[currentCard.actions.bottom]}</div>
      </div>
    </div>
  </div>;
}
