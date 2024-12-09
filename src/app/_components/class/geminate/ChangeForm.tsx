'use client';

import { GeminateForm } from '@/domain/geminate/cards';
import { use } from 'react';
import Button from '../../inputs/Button';
import FormIcon from './FormIcon';
import { IdentityContext } from '@/context/IdentityContext';

export default function ChangeForm() {
  const {
    identity: currentForm,
    changeIdentity,
  } = use(IdentityContext);

  const changeForm = () => {
    const newForm = currentForm === GeminateForm.MELEE
      ? GeminateForm.RANGED
      : GeminateForm.MELEE;
    changeIdentity(newForm);
  };

  return <div
    className='flex justify-center items-center gap-2 h-24 w-24'
    onClick={changeForm}>
    <label className='hidden'>Change form</label>
    <FormIcon form={currentForm as GeminateForm} />
  </div>;
}