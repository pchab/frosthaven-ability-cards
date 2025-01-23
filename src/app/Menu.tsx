'use client';

import * as m from "motion/react-m"
import { AnimatePresence, domAnimation, LazyMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu({
  onOpenConnectModal,
}: {
  onOpenConnectModal: () => void,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <div className='absolute right-0 top-0 p-4 flex flex-col items-end gap-2 overflow-hidden'>
    <LazyMotion features={domAnimation}>
      <m.button
        aria-label='Open settings'
        className='rounded-full'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <Image src='/icons/cogwheel.svg' alt='Settings' width={24} height={24} />
      </m.button>
      <AnimatePresence>
        {isMenuOpen && <m.div
          role='menu'
          className='bg-black border-solid rounded-lg border-2 p-4 flex flex-col items-center gap-2 z-50'
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <Link
            role='menuitem'
            href='https://github.com/pchab/frosthaven-ability-cards/issues/new'
            target='_blank'>
            Report Issue
          </Link>
          <button
            role='menuitem'
            onClick={() => {
              onOpenConnectModal();
              setIsMenuOpen(false);
            }}>Connect to GH secretary</button>
        </m.div>}
      </AnimatePresence>
    </LazyMotion>
  </div >;
}