import { GeminateForm } from '@/domain/geminate/cards';
import Image from 'next/image';

const meleeFormPath = '/geminate/icons/fh-geminate-melee-color-icon.webp';
const rangedFormPath = '/geminate/icons/fh-geminate-ranged-color-icon.webp';

export default function FormIcon({
  form,
}: {
  form: GeminateForm;
}) {
  const formPath = form === GeminateForm.MELEE
    ? meleeFormPath
    : rangedFormPath;

  return <Image
    src={formPath}
    alt={`form-${form}`}
    width={33}
    height={60}
  />;
}