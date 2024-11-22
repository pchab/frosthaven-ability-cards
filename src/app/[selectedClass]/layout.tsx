import ClassProvider from '@/context/ClassContext';
import { classNameToURI, classURIToName, frosthavenClasses } from '@/domain/frosthaven-class';
import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import { type ReactNode } from 'react';

export const dynamicParams = false;

export function generateStaticParams() {
  return frosthavenClasses.map(({ name }) => ({
    selectedClass: classNameToURI(name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ selectedClass: FrosthavenClassNames }>
}) {
  const { selectedClass } = await params;
  const fhClassName = classURIToName(selectedClass);

  return {
    title: `${fhClassName} - Frosthaven Cards`,
    description: `Manage your Frosthaven ${fhClassName} Cards`,
  }
}

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ selectedClass: FrosthavenClassNames }>
  children: ReactNode;
}) {
  const { selectedClass } = await params;
  const fhClassName = classURIToName(selectedClass);

  return <ClassProvider fhClassName={fhClassName}>
    {children}
  </ClassProvider>;
}
