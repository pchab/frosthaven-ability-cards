'use client';

import { bannerSpear } from '@/domain/banner-spear/class';
import { blinkblade } from '@/domain/blinkblade/class';
import { boneshaper } from '@/domain/boneshaper/class';
import { deathwalker } from '@/domain/deathwalker/class';
import { deepwraith } from '@/domain/deepwraith/class';
import { drifter } from '@/domain/drifter/class';
import { fist } from '@/domain/fist/class';
import { geminate } from '@/domain/geminate/class';
import { hive } from '@/domain/hive/class';
import { snowdancer } from '@/domain/snowdancer/class';
import { trapper } from '@/domain/trapper/class';
import { CardComponent } from '../_components/cards/Card';
import { CardActions } from '@/domain/cards.type';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { enhancements } from '@/domain/enhancement/enhancements';
import type { Enhancement } from '@/domain/enhancement/enhancement.type';

function capitalize(str: string): string {
  return str.split(' ').map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
}

export default function TestCard({ searchParams: { className, cardName } }: { searchParams: { className: string; cardName: string; } }) {
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
  const selectedClass = allClasses.find(({ name }) => name === className);
  const selectedCard = selectedClass?.cards.find(({ name }) => name === cardName) ?? selectedClass?.cards[0];
  const [currentCard, setCard] = useState(selectedCard);
  const router = useRouter();

  useEffect(() => {
    setCard(selectedCard);
  }, [selectedCard]);

  if (!selectedClass || !currentCard) {
    return;
  }

  const changeTest = ({ newClassName = className, newCardName = cardName }: { newClassName?: string; newCardName?: string; }) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('className', newClassName);
    searchParams.set('cardName', newCardName);
    router.replace(`/test?${searchParams.toString()}`);
  };

  const addEnchant = (index: number, enchantName: Enhancement['name']) => {
    const newCard = { ...currentCard };
    const newEnhancements = [...(newCard.enhancements ?? Array.from({ length: newCard.availableEnhancements?.length ?? 0 }))];
    const newEnhancement = enchantName
      ? enhancements.find(({ name }) => name === enchantName)
      : undefined;
    newEnhancements[index] = newEnhancement;
    newCard.enhancements = newEnhancements;
    setCard(newCard);
  }

  return <div className='flex flex-col p-32 items-center w-full gap-4'>
    <select
      className='p-4 bg-black'
      onChange={(e) => {
        changeTest({ newClassName: e.target.value })
      }}
      defaultValue={className}
    >
      {allClasses.map((fhClass) => {
        return <option
          key={fhClass.name}
          value={fhClass.name}>{fhClass.name}</option>;
      })}
    </select>
    <select
      className='p-4 bg-black'
      onChange={(e) => changeTest({ newCardName: e.target.value })}
      defaultValue={cardName}
    >
      {selectedClass.cards.map((card) => {
        return <option
          key={card.name}
          value={card.name}>{capitalize(card.name)}</option>;
      })}
    </select>
    <div className='flex gap-4 border border-white p-4'>
      <div className='flex flex-col gap-2'>
        <h3 className='font-bold'>Enchant:</h3>
        {!currentCard.availableEnhancements
          ? <div>No enchant slots</div>
          : currentCard.availableEnhancements.map((slot, index) => {
            const enhancementOptions = enhancements.filter((enhancement) => enhancement.type === slot.type);
            return <select key={index} className='p-4 bg-black' onChange={(e) => addEnchant(index, e.target.value)}>
              <option value={undefined}>{'no enchant'}</option>
              {enhancementOptions.map(({ name }) => <option key={name} value={name}>{name}</option>)}
            </select>
          })
        }
      </div>

      {<CardComponent card={currentCard} actions={[]} />}

      <div>
        <h3 className='font-bold'>Details:</h3>
        <div>Level: {currentCard.level}</div>
        <div>Top: {CardActions[currentCard.actions.top]}</div>
        <div>Bottom: {CardActions[currentCard.actions.bottom]}</div>
      </div>
    </div>
  </div>;
}
