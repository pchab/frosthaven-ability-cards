import Image from 'next/image';

export default function PressureUpIcon() {
  const path = `/metal-mosaic/icons/fh-metal-mosaic-pressure-up-color-icon.webp`;

  return <Image
    src={path}
    alt={`pressure-up`}
    width={417}
    height={600}
  />;
}