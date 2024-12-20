export default function SecretaryLink({ children }: { children: React.ReactNode }) {
  return <a
    className='underline text-blue-100 hover:text-blue-800'
    href='https://gloomhaven-secretary.de/'
    target='_blank'
  >
    {children}
  </a>;
}