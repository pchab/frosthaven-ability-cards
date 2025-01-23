import ActionWheel from '@/app/_components/cards/ActionWheel';
import { CardComponent } from '@/app/_components/cards/Card';
import EnhanceSticker from '@/app/_components/cards/Enhance/EnhanceSticker';
import Button from '@/app/_components/inputs/Button';
import type { Card } from '@/domain/cards.type';
import type { Enhancement } from '@/domain/enhancement/enhancement.type';
import { getEnhancementByType } from '@/domain/enhancement/enhancements';
import { AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const RADIUS = 10;

interface HoverCircleArea {
  x: number;
  y: number;
  radius?: number;
}

function drawCircleArea(hoverArea: HoverCircleArea, context: CanvasRenderingContext2D) {
  const { x, y, radius = RADIUS } = hoverArea;

  context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  context.lineWidth = 3;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.stroke();
}

export default function EnhanceCard<X extends Card>({
  card,
  onEnhanceCard,
}: {
  card: X;
  onEnhanceCard: (card: X) => void;
}) {
  const [currentCard, setCard] = useState(card);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentEnhanceSlot, setCurrentEnhanceSlot] = useState<number>();

  if (!card.availableEnhancements) {
    throw new Error('Card has no available enhancements');
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.reset();
    if (currentEnhanceSlot === undefined) return;
    const currentSlot = card.availableEnhancements?.[currentEnhanceSlot];
    if (!currentSlot) return;
    drawCircleArea(currentSlot.position, context);
  }, [currentEnhanceSlot, card.availableEnhancements]);

  const addEnhance = (index: number, enhanceName: Enhancement | undefined) => {
    const newCard = { ...currentCard };
    const newEnhancements = [...(newCard.enhancements ?? Array.from({ length: newCard.availableEnhancements?.length ?? 0 }))];
    newEnhancements[index] = enhanceName;
    newCard.enhancements = newEnhancements;
    setCard(newCard);
  }

  const getEnhancementActions = (slotIndex: number | undefined) => {
    if (slotIndex === undefined) return [];
    const { type } = card.availableEnhancements?.[slotIndex] ?? {};
    if (!type) return [];
    return [...getEnhancementByType(type)
      .map((enhancement) => ({
        name: <EnhanceSticker enhancement={enhancement} position={{ x: 30, y: 30, size: 30 }} />,
        onClick: () => addEnhance(slotIndex, enhancement),
      })),
    {
      name: 'Remove enhance',
      onClick: () => addEnhance(slotIndex, undefined),
    }];
  };

  const mapName = ['enhance', ...card.name.split(' ')].join('-');
  const getAreaName = (index: number) => ['enhance', ...card.name.split(' '), 'slot', index].join('-');

  return <div className='flex flex-col gap-4'>
    <CardComponent card={currentCard} mapName={mapName} actions={[{
      name: 'Cancel enhancement',
      onClick: () => setCurrentEnhanceSlot(undefined),
    }]}>
      <AnimatePresence>
        {currentEnhanceSlot !== undefined && <ActionWheel actions={getEnhancementActions(currentEnhanceSlot)} onAction={() => setCurrentEnhanceSlot(undefined)} />}
      </AnimatePresence>
      <canvas
        ref={canvasRef}
        className='absolute pointer-events-none'
        width={143}
        height={200}
      />
      <map name={mapName}>
        {card.availableEnhancements.map(({ position: { x, y } }, index) => {
          return <area
            key={getAreaName(index)}
            coords={`${x},${y},${RADIUS}`}
            className='pointer-events-auto'
            shape='circle'
            onClick={() => setCurrentEnhanceSlot(index)}
          />;
        })}
      </map>
    </CardComponent>
    <Button
      label={`Enhance ${card.name}`}
      onClick={() => onEnhanceCard(currentCard)}
    >
      Enhance
    </Button>
  </div>;
}
