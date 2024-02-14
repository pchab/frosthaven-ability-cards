import { GeminateForm } from '@/domain/geminate/cards';
import Image from 'next/image';

const meleeFormPath = '/geminate/icons/fh-geminate-melee-color-icon.png';
const rangedFormPath = '/geminate/icons/fh-geminate-ranged-color-icon.png';

export default function ChangeForm({
  form,
  setForm,
}: {
  form: GeminateForm;
  setForm: (form: GeminateForm) => void;
}) {
  const formPath = form === GeminateForm.melee ? meleeFormPath : rangedFormPath;
  return <div className='p-2 flex justify-center items-center'>
    <button
      className='flex justify-center items-center gap-4 min-h-24'
      onClick={() => setForm(form === GeminateForm.melee
        ? GeminateForm.ranged
        : GeminateForm.melee)}>
      <label>Change form</label>
      <Image
        src={formPath}
        alt={`form-${form}`}
        width={33}
        height={60}
      />
    </button>
  </div>;
}