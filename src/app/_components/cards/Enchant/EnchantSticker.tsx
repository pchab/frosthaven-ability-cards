import type { Enhancement } from '@/domain/enhancement/enhancement.type';
import Image from 'next/image';

export default function EnchantSticker({
  enhancement,
  position,
}: {
  enhancement: Enhancement;
  position?: { left?: number; top?: number; };
}) {
  const { name } = enhancement;
  const tokenPath = `/enhancement-stickers/fh-${name}-sticker.png`;

  return <Image
    src={tokenPath}
    alt='token'
    width={5}
    height={5}
    className='absolute'
    style={position}
  />;
}