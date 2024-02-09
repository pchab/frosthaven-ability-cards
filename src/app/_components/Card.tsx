'use client';

import { Card } from '@/domain/cards.type';
import Image from 'next/image';
import { useState } from 'react';

export enum HoverArea {
  none,
  left,
  right,
  all,
}

type ClickableAreasProps<X extends Card> = { zone: HoverArea, onClick: (card: X) => void; info: string; }[];
const clickableArea: Record<HoverArea, string> = {
  [HoverArea.none]: '0,0,0,0',
  [HoverArea.left]: '0,0,72,200',
  [HoverArea.right]: '73,0,143,200',
  [HoverArea.all]: '0,0,143,200',
};

export function CardComponent<X extends Card>({
  card,
  clickableAreasProps,
}: {
  card: X;
  clickableAreasProps: ClickableAreasProps<X>;
}) {
  const [hoverArea, setHoverArea] = useState<HoverArea>(HoverArea.none);
  const uuid = crypto.randomUUID();

  const handleMouseLeave = () => {
    setHoverArea(HoverArea.none);
  };

  const clickAreasName = `click-${uuid}`;
  return <div>
    <div
      onMouseLeave={handleMouseLeave}
      className={'hover:border-solid hover:border-white hover:border'}>
      <map name={clickAreasName}>
        {clickableAreasProps.map(({ zone, onClick }) => (
          <area
            href='#'
            key={`${zone}-area`}
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