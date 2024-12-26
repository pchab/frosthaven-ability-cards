import type { ReactNode } from 'react';

export default function SecretaryLink({ children }: { children: ReactNode }) {
  return <a
    tabIndex={-1}
    className='underline text-blue-100 hover:text-blue-800'
    href='https://gloomhaven-secretary.de/'
    target='_blank'
  >
    {children}
  </a>;
}