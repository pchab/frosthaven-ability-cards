import Image from 'next/image';

export default function CharacterToken({
  className,
}: {
  className: string;
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
