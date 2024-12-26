'use client';

import { forms } from '@/domain/geminate/cards';
import { use } from 'react';
import FormIcon from './FormIcon';
import { IdentityContext } from '@/context/IdentityContext';

export default function ChangeForm() {
  const {
    identity,
    changeIdentity,
  } = use(IdentityContext);

  const currentForm = forms[identity];
  const changeForm = () => {
    const newForm = currentForm === 'melee'
      ? 'ranged'
      : 'melee';
    const fromTo: [string, string] = [currentForm, newForm];
    changeIdentity(forms.indexOf(newForm), fromTo);
  };

  return <button
    aria-label='change form'
    className='flex justify-center items-center gap-2 h-24 w-24'
    onClick={changeForm}>
    <FormIcon form={forms[identity]} />
  </button>;
}