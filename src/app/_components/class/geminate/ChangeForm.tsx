'use client';

import { GeminateForm } from '@/domain/geminate/cards';
import { use } from 'react';
import Button from '../../inputs/Button';
import GeminateFormIcon from './GeminateFormIcon';
import { IdentityContext } from '@/context/IdentityContext';

export default function ChangeForm() {
  const {
    identity: currentForm,
    changeIdentity,
  } = use(IdentityContext);

  const changeForm = () => {
    const newForm = currentForm === GeminateForm.melee
      ? GeminateForm.ranged
      : GeminateForm.melee;
    changeIdentity(newForm);
  };

  return <Button
    onClick={changeForm}>
    <div className='flex justify-center items-center gap-2 min-h-20 min-w-48'>
      <label>Change form</label>
      <GeminateFormIcon form={currentForm as GeminateForm} />
    </div>
  </Button>;
}