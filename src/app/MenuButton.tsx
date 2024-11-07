'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function MenuButton({
  onOpenConnectModal,
}: {
  onOpenConnectModal: () => void,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <div className='absolute right-0 top-0 p-4 flex flex-col items-end gap-2'>
    <motion.button
      className='rounded-full'
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      whileTap={{ rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Image src='/icons/cogwheel.svg' alt='Settings' width={24} height={24} />
    </motion.button>
    <AnimatePresence>
      {isMenuOpen && <motion.div
        className='bg-black border-solid rounded-lg border-2 p-4 flex flex-col items-center gap-2 z-50'
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3 }}
      >
        <Link type='submit' href='https://github.com/pchab/frosthaven-ability-cards/issues/new' target='_blank'>
          Report Issue
        </Link>
        <div onClick={onOpenConnectModal}>Connect to GH secretariat</div>
      </motion.div>}
    </AnimatePresence>
  </div >;
}