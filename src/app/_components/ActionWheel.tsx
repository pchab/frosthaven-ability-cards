'use client';

import { motion } from 'framer-motion';

type Action = {
  name: string
  onClick: () => void;
}

export default function ActionWheel({
  actions,
}: {
  actions: Action[];
}) {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='relative w-80 h-80'>
        {actions.map((action, index) => {
          const angle = (index / actions.length) * 360
          const radius = 150
          const x = radius * Math.cos((angle * Math.PI) / 180)
          const y = radius * Math.sin((angle * Math.PI) / 180)

          return (
            <motion.button
              key={action.name}
              className={`absolute w-24 h-24 rounded-full text-white flex items-center justify-center shadow-lg text-sm font-medium`}
              style={{
                left: `calc(50% + ${x}px - 3rem)`,
                top: `calc(50% + ${y}px - 3rem)`,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={action.onClick}
            >
              {action.name}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}