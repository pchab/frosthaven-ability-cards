import { type Card } from '@/domain/cards.type';

export default function ShortRestButton<X extends Card>({
  cards,
  onShortRest,
}: {
  cards: X[];
  onShortRest: (args: { recovered: X[]; lost: X }) => void;
}) {
  const getRandomCard = (arr: X[]) =>
    arr[Math.floor(Math.random() * arr.length)]

  return <button onClick={() => {
    const lostCard = getRandomCard(cards);
    const recoveredCard = cards.filter(c => c !== lostCard);
    onShortRest({ recovered: recoveredCard, lost: lostCard });
  }}>Short Rest</button>;
}
