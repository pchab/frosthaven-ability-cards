'use client';

import PlayCards from '@/app/play/PlayCards';
import { GeminateCard, GeminateForm } from '@/domain/geminate/cards';
import { useState } from 'react';
import ChangeForm from './ChangeForm';

export default function PlayGeminateCards({ cards }: { cards: GeminateCard[] }) {
  const [currentForm, setCurrentForm] = useState<GeminateForm>(GeminateForm.melee);
  const filterCard = (card: GeminateCard) => card.form === currentForm;

  return <PlayCards cards={cards} filterCard={filterCard}>
    <ChangeForm form={currentForm} setForm={setCurrentForm} />
  </PlayCards>;
}
