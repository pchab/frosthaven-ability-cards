import { GeminateForm } from "@/domain/geminate/cards";
import Image from "next/image";

const meleeFormPath = '/geminate/fh-geminate-melee-color-icon.png';
const rangedFormPath = '/geminate/fh-geminate-ranged-color-icon.png';

export default function ChangeForm({
  form,
  setForm,
}: {
  form: GeminateForm;
  setForm: (form: GeminateForm) => void;
}) {
  const formPath = form === GeminateForm.melee ? meleeFormPath : rangedFormPath;
  return <>
    <label>Change form</label>
    <Image
      src={formPath}
      alt={`form-${form}`}
      width={33}
      height={60}
      onClick={() => setForm(form === GeminateForm.melee
        ? GeminateForm.ranged
        : GeminateForm.melee)}
    />
  </>;
}