import Image from 'next/image';

export default function PressureDownIcon() {
  const path = '/metal-mosaic/icons/fh-metal-mosaic-pressure-down-color-icon.webp';

  return <Image
    src={path}
    alt={`pressure-down`}
    width={417}
    height={600}
  />;
}