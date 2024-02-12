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

export type ClickableAreasProps<X extends Card> = { zone: HoverArea, onClick: (card: X) => void; info: string; }[];
const clickableArea: Record<HoverArea, string> = {
  [HoverArea.none]: '0,0,0,0',
  [HoverArea.left]: '0,0,72,200',
  [HoverArea.right]: '73,0,143,200',
  [HoverArea.top]: '0,0,143,107',
  [HoverArea.bottom]: '0,108,143,200',
  [HoverArea.all]: '0,0,143,200',
};

export function CardComponent<X extends Card>({
  card,
  clickableAreasProps,
}: {
  card: X;
  clickableAreasProps: ClickableAreasProps<X>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoverArea, setHoverArea] = useState<HoverArea>(HoverArea.none);
  const uuid = crypto.randomUUID();

  const handleMouseLeave = () => {
    setHoverArea(HoverArea.none);
  };

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
    context.strokeRect(coords[0], coords[1], coords[2], coords[3]);
  }, [hoverArea]);

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
        {clickableAreasProps.map(({ zone, onClick }) => (
          <area
            href='#'
            key={`${clickAreasName}-${zone}-area`}
            onClick={(event) => {
              event.preventDefault();
              onClick(card);
            }}
            coords={clickableArea[zone]}
            shape={'rect'}
            onMouseEnter={() => setHoverArea(zone)}
          />
        ))}
      </map><Image
        useMap={`#${clickAreasName}`}
        src={card.path}
        alt='card'
        width={143}
        height={200}
      />
    </div>
    {clickableAreasProps.map(({ zone, info }) => hoverArea === zone && <p key={`${zone}-info`}>{info}</p>)}
    {hoverArea === HoverArea.none && <div className='p-4'></div>}
  </div>;
}