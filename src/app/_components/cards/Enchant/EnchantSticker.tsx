import type { Enhancement, EnhancementSlot } from '@/domain/enhancement/enhancement.type';
import Image from 'next/image';

export default function EnchantSticker({
  enhancement,
  position: { x, y, size = 10 },
}: {
  enhancement: Enhancement;
  position: EnhancementSlot['position'];
  size?: number;
}) {
  const tokenPath = `/enhancement-stickers/fh-${enhancement}-sticker.png`;

  return <Image
    src={tokenPath}
    alt='token'
    width={size}
    height={size}
    className='absolute'
    style={{ left: x - size / 2, top: y - size / 2 }}
  />;
}