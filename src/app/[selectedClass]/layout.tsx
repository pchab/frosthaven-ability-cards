import ClassProvider from '@/context/ClassContext';
import { classNameToURI, classURIToName, frosthavenClasses } from '@/domain/frosthaven-class';
import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import type { Metadata, ResolvingMetadata } from 'next';
import DisplayClassMat from './DisplayClassMat';

export const dynamicParams = false;

type Params = Promise<{
  selectedClass: FrosthavenClassNames;
}>;

export function generateStaticParams() {
  return frosthavenClasses.map(({ name }) => ({
    selectedClass: classNameToURI(name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { selectedClass } = await params;
  const fhClassName = classURIToName(selectedClass);
  const keywords = (await parent).keywords ?? [];

  return {
    title: `${fhClassName} - Frosthaven Cards`,
    description: `Manage your Frosthaven ${fhClassName} Cards`,
    keywords: [...keywords, fhClassName],
  }
}

export default async function Layout({
  params,
  children,
}: LayoutProps<'/[selectedClass]'>) {
  const { selectedClass } = await params;
  const fhClassName = classURIToName(selectedClass);

  return <div data-theme={selectedClass}>
    <ClassProvider fhClassName={fhClassName}>
      {children}
      <div className='absolute left-0 top-0 p-4 flex flex-col items-end gap-2'>
        <DisplayClassMat />
      </div>
    </ClassProvider>
  </div>;
}
