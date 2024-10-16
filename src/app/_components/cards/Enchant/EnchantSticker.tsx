import type { Enhancement } from '@/domain/enhancement/enhancement.type';
import Image from 'next/image';

export default function EnchantSticker({
  enhancement,
  position: { x: left, y: top },
  size = 10,
}: {
  enhancement: Enhancement;
  position: { x: number; y: number; };
  size?: number;
}) {
  const { name } = enhancement;
  const tokenPath = `/enhancement-stickers/fh-${name}-sticker.png`;

  return <Image
    src={tokenPath}
    alt='token'
    width={size}
    height={size}
    className='absolute'
    style={{ left, top }}
  />;
}