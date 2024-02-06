import { Card } from '@/domain/cards.type';
import Image from 'next/image';

export function CardComponent<X extends Card>({
  card,
  onClickLeft,
  onClickRight,
}: {
  card: X;
  onClickLeft: (card: X) => void;
  onClickRight: (card: X) => void;
}) {
  const clickAreasName = `click-${card.path}`;
  return <div>
    <map name={clickAreasName}>
      <area
        href='#'
        onClick={(event) => {
          event.preventDefault();
          onClickLeft(card);
        }}
        coords={'0,0,71,200'}
        shape={'rect'}
      />
      <area
        href='#'
        onClick={(event) => {
          event.preventDefault();
          onClickRight(card);
        }}
        coords={'73,0,143,200'}
        shape={'rect'}
      />
    </map><Image
      useMap={`#${clickAreasName}`}
      src={card.path}
      alt='card'
      width={143}
      height={200}
    />
  </div>;
}