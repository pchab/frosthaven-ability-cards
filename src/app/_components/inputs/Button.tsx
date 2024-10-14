export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return <button
    className='bg-slate-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg border-2 border-solid'
    onClick={onClick}
  >
    {children}
  </button>;
}
