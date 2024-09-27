import BoardArea from '@/app/_components/BoardArea';
import PlayedCards from './PlayedCards';

export default function SelectedCardsPage() {
  return <BoardArea title='Selected cards'>
    <PlayedCards />
  </BoardArea>;
}