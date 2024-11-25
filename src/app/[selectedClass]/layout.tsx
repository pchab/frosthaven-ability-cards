import ClassProvider from '@/context/ClassContext';
import { classNameToURI, classURIToName, frosthavenClasses } from '@/domain/frosthaven-class';
import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import type { ResolvingMetadata } from 'next';
import { type ReactNode } from 'react';

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
) {
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
}: {
  params: Params;
  children: ReactNode;
}) {
  const { selectedClass } = await params;
  const fhClassName = classURIToName(selectedClass);

  return <ClassProvider fhClassName={fhClassName}>
    {children}
  </ClassProvider>;
}
