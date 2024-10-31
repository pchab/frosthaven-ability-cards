'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return <div className='absolute right-0 top-0 p-4 flex flex-col items-end gap-2'>
    <button className='rounded-full' onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <Image src='/icons/cogwheel.svg' alt='Settings' width={24} height={24} />
    </button>
    {isMenuOpen && <div className='bg-black border-solid rounded-lg border-2 p-4'>
      <Link type='submit' href='https://github.com/pchab/frosthaven-ability-cards/issues/new' target='_blank'>
        Report Issue
      </Link>
    </div>}
  </div>;
}