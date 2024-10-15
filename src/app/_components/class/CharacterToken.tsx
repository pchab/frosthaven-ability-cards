import Image from 'next/image';

export default function CharacterToken({
  className,
  position,
}: {
  className: string;
  position?: { left?: number; top?: number; };
}) {
  const fhClassName = className.toLocaleLowerCase();
  const tokenPath = `/${fhClassName}/icons/fh-${fhClassName}-character-token.png`;

  return <Image
    src={tokenPath}
    alt='token'
    width={20}
    height={20}
    className='absolute'
    style={position}
  />;
}