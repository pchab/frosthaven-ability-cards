'use client';

import { Card } from '@/domain/cards.type';
import Image from 'next/image';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { PredefinedHoverArea, drawHoverArea, getHoverAreaProps, type HoverArea } from './hover-area';

export type ClickableAreasProps<X extends Card> = {
  getZone: (card: X) => HoverArea;
  onClick: (card: X) => void;
  info: string;
}[];

export function CardComponent<X extends Card>({
  card,
  clickableAreasProps,
  fixedArea,
  children,
}: {
  card: X;
  clickableAreasProps: ClickableAreasProps<X>;
  fixedArea?: HoverArea;
  children?: ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoverArea, setHoverArea] = useState<HoverArea>(fixedArea ?? PredefinedHoverArea.none);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.reset();
    if (hoverArea === PredefinedHoverArea.none) {
      return;
    }

    drawHoverArea(hoverArea, context);
  }, [hoverArea]);

  const changeArea = (zone: HoverArea) => () => {
    if (!fixedArea) {
      setHoverArea(zone);
    }
  }

  const handleMouseLeave = changeArea(PredefinedHoverArea.none);

  const clickAreasName = `click-${card.name}`;
  return <div>
    <div onMouseLeave={handleMouseLeave} className='relative'>
      <canvas
        ref={canvasRef}
        className='absolute pointer-events-none'
        width={143}
        height={200}
      />
      <map name={clickAreasName}>
        {clickableAreasProps.map(({ getZone, onClick }, index) => {
          const zone = getZone(card);
          const props = getHoverAreaProps(zone);
          return <area
            href='#'
            key={`${clickAreasName}-area-${index}`}
            onClick={(event) => {
              event.preventDefault();
              if (zone === hoverArea) {
                onClick(card);
              }
            }}
            {...props}
            onMouseEnter={changeArea(zone)}
          />;
        })}
      </map>
      <Image
        useMap={`#${clickAreasName}`}
        src={card.path}
        alt='card'
        width={143}
        height={200}
      />
      {children ?? <></>}
    </div>
    {clickableAreasProps.map(({ getZone, info }, index) => hoverArea === getZone(card)
      && <p key={`${clickAreasName}-area-${index}-info`}>{info}</p>
    )}
    {hoverArea === PredefinedHoverArea.none && <div className='p-3'></div>}
  </div>;
}