import { GeminateForm } from '@/domain/geminate/cards';
import Button from '../../inputs/Button';
import GeminateFormIcon from './GeminateFormIcon';

export default function ChangeForm({
  form,
  setForm,
}: {
  form: GeminateForm;
  setForm: (form: GeminateForm) => void;
}) {
  return <Button
    onClick={() => setForm(form === GeminateForm.melee
      ? GeminateForm.ranged
      : GeminateForm.melee)}>
    <div className='flex justify-center items-center gap-2 min-h-24'>
      <label>Change form</label>
      <GeminateFormIcon form={form} />
    </div>
  </Button>;
}