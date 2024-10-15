import type { Enhancement } from '@/domain/enhancement/enhancement.type';
import Image from 'next/image';

export default function EnchantSticker({
  enhancement,
  position: { x: left, y: top },
}: {
  enhancement: Enhancement;
  position: { x: number; y: number; };
}) {
  const { name } = enhancement;
  const tokenPath = `/enhancement-stickers/fh-${name}-sticker.png`;

  return <Image
    src={tokenPath}
    alt='token'
    width={10}
    height={10}
    className='absolute'
    style={{ left, top }}
  />;
}