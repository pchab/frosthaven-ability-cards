'use client';

import { use, useState } from 'react';
import Modal from '../_components/layout/Modal';
import CharacterMat from '../_components/class/CharacterMat';
import { ClassContext } from '@/context/ClassContext';

export default function DisplayClassMat() {
  const [display, setDisplay] = useState(false);
  const [displayFront, setDisplayFront] = useState(true);
  const fhClass = use(ClassContext);

  return <>
    {display && <Modal onCancel={() => setDisplay(false)}>
      <CharacterMat
        fhClassName={fhClass.name}
        flipped={!displayFront}
        onClick={() => setDisplayFront(!displayFront)} />
    </Modal>}
    <button
      className='rounded-full border-solid border-2 border-white px-2'
      onClick={() => setDisplay(true)}>
      ?
    </button>
  </>;
}