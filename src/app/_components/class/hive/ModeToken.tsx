import Image from 'next/image';

export interface ModePosition {
  x: number;
  y: number;
  size?: number;
};

export default function ModeToken({
  position: { x, y, size = 20 },
}: {
  position: ModePosition;
}) {
  const tokenPath = '/hive/icons/fh-hive-mode-color-icon.webp';

  return <Image
    src={tokenPath}
    alt='mode token'
    width={size}
    height={size}
    className='absolute'
    style={{ left: x - size / 2, top: y - size / 2 }}
  />;
}
