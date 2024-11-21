import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import Image from 'next/image';

export default function CharacterToken({
  className,
}: {
  className: FrosthavenClassNames;
}) {
  const fhClassName = className.toLocaleLowerCase().replaceAll(' ', '-');
  const tokenPath = `/${fhClassName}/icons/fh-${fhClassName}-character-token.png`;

  return <Image
    src={tokenPath}
    alt='token'
    width={20}
    height={20}
    className='absolute'
  />;
}
