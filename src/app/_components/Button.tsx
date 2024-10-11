export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return <button
    className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'
    onClick={onClick}
  >
    {children}
  </button>;
}
