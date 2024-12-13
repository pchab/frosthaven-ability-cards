import Image from 'next/image';

export default function ModeToken({
  position: { x, y, size = 20 },
}: {
  position: {
    x: number;
    y: number;
    size?: number;
  };
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
