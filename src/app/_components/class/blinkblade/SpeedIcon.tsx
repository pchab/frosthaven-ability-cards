import { BlinkbladeSpeed } from '@/domain/blinkblade/class';
import Image from 'next/image';

const fastIcon = {
  path: '/blinkblade/icons/fh-blinkblade-fast-color-icon.webp',
  width: 55,
  height: 60,
};
const slowIcon = {
  path: '/blinkblade/icons/fh-blinkblade-slow-color-icon.webp',
  width: 30,
  height: 60,
};

export default function SpeedIcon({
  speed,
}: {
  speed: BlinkbladeSpeed;
}) {
  const { path, width, height } = speed === 'fast'
    ? fastIcon
    : slowIcon;

  return <Image
    src={path}
    alt={`speed-${speed}`}
    width={width}
    height={height}
  />;
}
