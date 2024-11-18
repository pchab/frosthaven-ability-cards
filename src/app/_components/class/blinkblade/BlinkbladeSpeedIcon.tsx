import { BlinkbladeSpeed } from '@/domain/secretary/game.state';
import Image from 'next/image';

const fastPath = '/blinkblade/icons/fh-blinkblade-fast-color-icon.png';
const slowPath = '/blinkblade/icons/fh-blinkblade-slow-color-icon.png';
const fastSize = {
  width: 55,
  height: 60,
};
const slowSize = {
  width: 30,
  height: 60,
};

export default function BlinkbladeSpeedIcon({
  speed,
}: {
  speed: BlinkbladeSpeed;
}) {
  const speedPath = speed === BlinkbladeSpeed.FAST
    ? fastPath
    : slowPath;
  const { width, height } = speed === BlinkbladeSpeed.FAST
    ? fastSize
    : slowSize;

  return <Image
    src={speedPath}
    alt={`speed-${speed}`}
    width={width}
    height={height}
  />;
}