import { type MetalMosaicPressure } from '@/domain/secretary/game.state';
import Image from 'next/image';

export default function PressureIcon({
  pressure,
}: {
  pressure: MetalMosaicPressure;
}) {
  const path = `/metal-mosaic/icons/fh-metal-mosaic-pressure-${pressure}-color-icon.webp`;

  return <Image
    src={path}
    alt={`pressure-${pressure}`}
    width={60}
    height={60}
  />;
}