'use client';

import { AnimatePresence, motion } from 'framer-motion';

export type WheelAction = {
  name: string
  onClick: () => void;
}

export default function ActionWheel({
  isOpen,
  actions,
}: {
  isOpen: boolean;
  actions: WheelAction[];
}) {
  return (
    <div className='absolute w-full h-full bg-transparent'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='relative w-full h-full z-30'
            initial={{ scale: 0, opacity: 0, rotate: 90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            {actions.map((action, index) => {
              const angle = (index / actions.length) * 360
              const radius = 50
              const x = radius * Math.cos((angle * Math.PI) / 180)
              const y = radius * Math.sin((angle * Math.PI) / 180)

              return (
                <motion.button
                  key={action.name}
                  className={`absolute w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-xs font-medium bg-black/80`}
                  style={{
                    left: `calc(50% + ${x}px - 2rem)`, // 2rem is the width of the button (w-16)
                    top: `calc(50% + ${y}px - 2rem)`, // 2rem is the height of the button (h-16)
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onTap={action.onClick}
                >
                  {action.name}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}