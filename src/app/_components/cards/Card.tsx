'use client';

import { Card } from '@/domain/cards.type';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export enum HoverArea {
  none,
  left,
  right,
  top,
  bottom,
  all,
}

export type ClickableAreasProps<X extends Card> = {
  getZone: (card: X) => HoverArea;
  onClick: (card: X) => void;
  info: string;
}[];
const clickableArea: Record<HoverArea, string> = {
  [HoverArea.none]: '0,0,0,0',
  [HoverArea.left]: '0,0,72,200',
  [HoverArea.right]: '73,0,143,200',
  [HoverArea.top]: '7,7,136,107',
  [HoverArea.bottom]: '7,108,136,193',
  [HoverArea.all]: '0,0,143,200',
};

export function CardComponent<X extends Card>({
  card,
  clickableAreasProps,
  fixedArea,
}: {
  card: X;
  clickableAreasProps: ClickableAreasProps<X>;
  fixedArea?: HoverArea;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoverArea, setHoverArea] = useState<HoverArea>(fixedArea ?? HoverArea.none);
  const uuid = crypto.randomUUID();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;


    context.reset();
    if (hoverArea === HoverArea.none) {
      return;
    }

    const coords = clickableArea[hoverArea].split(',').map(Number);
    context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    context.lineWidth = 3;
    const [x1, y1, x2, y2] = coords;
    context.strokeRect(x1, y1, x2 - x1, y2 - y1);
  }, [hoverArea]);

  const changeArea = (zone: HoverArea) => () => {
    if (!fixedArea) {
      setHoverArea(zone);
    }
  }

  const handleMouseLeave = changeArea(HoverArea.none);

  const clickAreasName = `click-${uuid}`;
  return <div>
    <div
      onMouseLeave={handleMouseLeave}
    >
      <canvas
        ref={canvasRef}
        className='absolute pointer-events-none'
        width={143}
        height={200}
      />
      <map name={clickAreasName}>
        {clickableAreasProps.map(({ getZone, onClick }) => {
          const zone = getZone(card);
          return <area
            href='#'
            key={`${clickAreasName}-${zone}-area`}
            onClick={(event) => {
              event.preventDefault();
              if (zone === hoverArea) {
                onClick(card);
              }
            }}
            coords={clickableArea[zone]}
            shape={'rect'}
            onMouseEnter={changeArea(zone)}
          />;
        })}
      </map><Image
        useMap={`#${clickAreasName}`}
        src={card.path}
        alt='card'
        width={143}
        height={200}
      />
    </div>
    {clickableAreasProps.map(({ getZone, info }) => hoverArea === getZone(card) && <p key={`${getZone(card)}-info`}>{info}</p>)}
    {hoverArea === HoverArea.none && <div className='p-3'></div>}
  </div>;
}