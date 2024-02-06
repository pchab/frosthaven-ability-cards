'use client';

import { Card } from '@/domain/cards.type';
import Image from 'next/image';
import { useState } from 'react';

type HoverArea = 'none' | 'left' | 'right';

export function CardComponent<X extends Card>({
  card,
  onClickLeft,
  onClickRight,
  leftInfo,
  rightInfo,
}: {
  card: X;
  onClickLeft: (card: X) => void;
  onClickRight: (card: X) => void;
  leftInfo: string;
  rightInfo: string;
}) {
  const [hoverArea, setHoverArea] = useState<HoverArea>('none');

  const handleMouseLeave = () => {
    setHoverArea('none');
  };

  const clickAreasName = `click-${card.path}`;
  return <div>
    {hoverArea === 'left' && <p>{leftInfo}</p>}
    {hoverArea === 'right' && <p>{rightInfo}</p>}
    <div
      onMouseLeave={handleMouseLeave}
      className={'hover:border-solid hover:border-white hover:border'}>
      <map name={clickAreasName}>
        <area
          href='#'
          onClick={(event) => {
            event.preventDefault();
            onClickLeft(card);
          }}
          coords={'0,0,71,200'}
          shape={'rect'}
          onMouseEnter={() => setHoverArea('left')}
        />
        <area
          href='#'
          onClick={(event) => {
            event.preventDefault();
            onClickRight(card);
          }}
          coords={'73,0,143,200'}
          shape={'rect'}
          onMouseEnter={() => setHoverArea('right')}
        />
      </map><Image
        useMap={`#${clickAreasName}`}
        src={card.path}
        alt='card'
        width={143}
        height={200}
      />
    </div>
  </div>;
}