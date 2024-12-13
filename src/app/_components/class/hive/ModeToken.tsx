import Image from 'next/image';

export type ModePosition = {
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
    width={600}
    height={600}
    className='absolute'
    style={{ left: x - size / 2, top: y - size / 2 }}
  />;
}
