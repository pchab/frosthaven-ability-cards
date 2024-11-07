export default function Heading({
  title,
}: {
  title: string;
}) {
  return <h1 className='text-2xl font-bold text-center text-black hidden'>{title}</h1>;
}