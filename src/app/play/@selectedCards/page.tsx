import BoardArea from '@/app/_components/BoardArea';
import PlayedCard from './PlayedCard';

export default function SelectedCardsPage() {
  return <BoardArea title='Selected cards'>
    <PlayedCard />
  </BoardArea>;
}