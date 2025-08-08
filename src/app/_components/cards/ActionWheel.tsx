import * as m from 'motion/react-m';
import type { ReactNode } from 'react';

export interface WheelAction {
  name: ReactNode | string;
  onClick: () => void;
}

function getRadiusForActions(actions: WheelAction[]) {
  return actions.length > 12
    ? 120
    : actions.length > 6
      ? 80
      : 50;
}
function getPositionForAction(actions: WheelAction[], index: number, radius = getRadiusForActions(actions)) {
  const angle = (index / actions.length) * 360;
  const x = - radius * Math.cos(angle * (Math.PI / 180));
  const y = - radius * Math.sin(angle * (Math.PI / 180));
  return { x, y };
}

export default function ActionWheel({
  actions,
  onAction,
}: {
  actions: WheelAction[];
  onAction: () => void;
}) {
  return <m.div
    role='menu'
    className='absolute top-0 w-full h-full bg-transparent z-30 pointer-events-none'
    initial={{ scale: 0, opacity: 0, rotate: 90 }}
    animate={{ scale: 1, opacity: 1, rotate: 0 }}
    exit={{ scale: 0, opacity: 0, rotate: 90 }}
    transition={{ duration: 0.3 }}
  >
    {actions.map((action, index) => {
      const { x, y } = getPositionForAction(actions, index);
      return (
        <m.button
          autoFocus={index === 0}
          role='menuitem'
          key={`action-${index}`}
          className={`absolute w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center text-xs font-medium bg-black/80 pointer-events-auto shadow-md shadow-primary`}
          style={{
            left: `calc(50% + ${x}px - 2rem)`, // 2rem is the width of the button (w-16)
            top: `calc(50% + ${y}px - 2rem)`, // 2rem is the height of the button (h-16)
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            action.onClick();
            onAction();
          }}
        >
          {action.name}
        </m.button>
      )
    })}
  </m.div>;
}