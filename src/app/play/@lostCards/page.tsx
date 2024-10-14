import BoardArea from '@/app/_components/layout/BoardArea';
import LostCards from './LostCards';

export default function LostCardsPage() {

  return <BoardArea title='Lost cards'>
    <LostCards />
  </BoardArea>;
}