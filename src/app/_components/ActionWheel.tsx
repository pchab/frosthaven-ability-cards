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
    <div className='absolute px-12 py-20 bg-transparent'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
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
                  className={`absolute w-16 h-16 rounded-full text-white flex items-center justify-center shadow-lg text-xs font-medium bg-black/80`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={action.onClick}
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