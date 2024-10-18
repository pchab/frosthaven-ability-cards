import { CardComponent } from '@/app/_components/cards/Card';
import EnchantSticker from '@/app/_components/cards/Enchant/EnchantSticker';
import Button from '@/app/_components/inputs/Button';
import Modal from '@/app/_components/layout/Modal';
import type { Card } from '@/domain/cards.type';
import type { Enhancement } from '@/domain/enhancement/enhancement.type';
import { enhancements } from '@/domain/enhancement/enhancements';
import { useEffect, useRef, useState } from 'react';

const RADIUS = 10;

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

export default function EnchantCardModal<X extends Card>({
  card,
  onEnchantCard,
}: {
  card: X;
  onEnchantCard: (card: X) => void;
}) {
  const [currentCard, setCard] = useState(card);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentEnchantSlot, setCurrentEnchantSlot] = useState<number>();

  if (!card.availableEnhancements) {
    throw new Error('Card has no available enhancements');
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.reset();
    if (currentEnchantSlot === undefined) return;
    const currentSlot = card.availableEnhancements?.[currentEnchantSlot];
    if (!currentSlot) return;
    drawCircleArea(currentSlot.position, context);
  }, [currentEnchantSlot, card.availableEnhancements]);

  const addEnchant = (index: number | undefined, enchantName: Enhancement['name']) => {
    if (index === undefined) return [];
    const newCard = { ...currentCard };
    const newEnhancements = [...(newCard.enhancements ?? Array.from({ length: newCard.availableEnhancements?.length ?? 0 }))];
    const newEnhancement = enhancements.find(({ name }) => name === enchantName);
    newEnhancements[index] = newEnhancement;
    newCard.enhancements = newEnhancements;
    setCard(newCard);
  }

  const getEnhancementActions = (slotIndex: number | undefined) => {
    if (slotIndex === undefined) return [];
    const { type } = card.availableEnhancements?.[slotIndex] ?? {};
    if (!type) return [];
    return [...enhancements
      .filter((enhancement) => enhancement.type === type)
      .map((enhancement) => ({
        name: <EnchantSticker enhancement={enhancement} position={{ x: 30, y: 30, size: 30 }} />,
        onClick: () => addEnchant(slotIndex, enhancement.name),
      })),
    {
      name: 'Remove enchant',
      onClick: () => addEnchant(slotIndex, 'none'),
    }];
  };

  const mapName = ['enchant', ...card.name.split(' ')].join('-');
  const getAreaName = (index: number) => ['enchant', ...card.name.split(' '), 'slot', index].join('-');

  return <Modal>
    <div className='flex flex-col gap-4'>
      <CardComponent card={currentCard} mapName={mapName} actions={getEnhancementActions(currentEnchantSlot)}>
        <canvas
          ref={canvasRef}
          className='absolute pointer-events-none'
          width={143}
          height={200}
        />
        <map name={mapName}>
          {card.availableEnhancements.map(({ position: { x, y } }, index) => {
            return <area
              href='#'
              key={getAreaName(index)}
              coords={`${x},${y},${RADIUS}`}
              shape='circle'
              onMouseEnter={() => setCurrentEnchantSlot(index)}
            />;
          })}
        </map>
      </CardComponent>
      <Button onClick={() => onEnchantCard(currentCard)}>Enchant</Button>
    </div>
  </Modal>;
}
