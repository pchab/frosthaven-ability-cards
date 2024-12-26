import type { ButtonHTMLAttributes } from 'react';

export default function Button({
  children,
  onClick,
  type = 'button',
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  label?: string;
  autoFocus?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) {
  return <button
    {...props}
    type={type}
    className='bg-slate-600 hover:bg-blue-400 border-primary text-white font-bold py-2 px-4 rounded-lg border-2 border-solid'
    onClick={onClick}
  >
    {children}
  </button>;
}
