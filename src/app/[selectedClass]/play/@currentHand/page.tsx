import BoardArea from '@/app/_components/layout/BoardArea';
import CurrentHandClassWrapper from './CurrentHandClassWrapper';

export default function CurrentHandPage() {
  return <BoardArea title='Current hand'>
    <CurrentHandClassWrapper />
  </BoardArea>;
}