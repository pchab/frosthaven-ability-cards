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
import { painConduit } from '@/domain/pain-conduit/class';
import { snowdancer } from '@/domain/snowdancer/class';
import { trapper } from '@/domain/trapper/class';
import { CardComponent } from '../_components/cards/Card';
import { CardActions } from '@/domain/cards.type';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { enhancements } from '@/domain/enhancement/enhancements';
import type { Enhancement } from '@/domain/enhancement/enhancement.type';
import { bannerSpearCards } from '@/domain/banner-spear/cards';
import Button from '../_components/inputs/Button';

const RADIUS = 5;

type HoverCircleArea = {
  x: number;
  y: number;
  radius?: number;
}

function drawCircleArea(hoverArea: HoverCircleArea, context: CanvasRenderingContext2D) {
  context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  context.lineWidth = 3;
  const { x, y, radius = RADIUS } = hoverArea;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.stroke();
}

function capitalize(str: string): string {
  return str.split(' ').map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
}

function getTestEnhancement(type: Enhancement['type']) {
  if (type === 'hex') {
    return 'hex-attack';
  }
  return 'plus-one';
}

export default function TestCard({ searchParams: {
  className = bannerSpear.name,
  cardName = bannerSpearCards[0].name,
} }: {
  searchParams: {
    className: string;
    cardName: string;
  }
}) {
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
    painConduit,
    snowdancer,
    trapper,
  ];
  const selectedClass = allClasses.find(({ name }) => name === className);
  const selectedCard = selectedClass?.cards.find(({ name }) => name === cardName) ?? selectedClass?.cards[0];
  const [currentCard, setCard] = useState(selectedCard);
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setCard(selectedCard);
  }, [selectedCard]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.reset();
    drawCircleArea(position, context);
  }, [position]);

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
        <h3 className='font-bold'>Position:</h3>
        <input
          className='p-4 bg-black'
          id='x' name='x' type='number'
          defaultValue={position.x}
          onChange={(e) => setPosition({ ...position, x: parseInt(e.target.value) })} />
        <input
          className='p-4 bg-black'
          id='y' name='y' type='number'
          defaultValue={position.y}
          onChange={(e) => setPosition({ ...position, y: parseInt(e.target.value) })} />
      </div>

      {<CardComponent card={currentCard} actions={[]}>
        <canvas
          ref={canvasRef}
          className='absolute pointer-events-none'
          width={143}
          height={200}
        />
      </CardComponent>}

      <div>
        <h3 className='font-bold'>Details:</h3>
        <div>Level: {currentCard.level}</div>
        <div>Top: {CardActions[currentCard.actions.top]}</div>
        <div>Bottom: {CardActions[currentCard.actions.bottom]}</div>
        <div className='flex flex-col gap-2'>
          {currentCard.availableEnhancements?.map((enhancement, index) => {
            const testEnhancement = getTestEnhancement(enhancement.type);
            return <Button key={index} onClick={() => addEnchant(index, testEnhancement)}>Test enchant {index}</Button>;
          })}
        </div>
      </div>
    </div>
  </div>;
}
