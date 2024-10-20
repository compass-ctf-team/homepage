import { Suspense } from 'react'

import { Menu, Nav } from './_components/nav'
import { getContents } from '@/lib/contents'

interface Props {
  children: React.ReactNode
}

export default function AboutLayout({ children }: Readonly<Props>) {
  const contents = getContents('abouts')
  const menu: Menu[] = contents.sort((a, b) => (a.metadata.order < b.metadata.order ? -1 : 1)).map(content => ({
    title: content.metadata.title,
    href: `/abouts/${content.slug}`
  }))

  return (
    <>
      <Suspense fallback={<div className='mb-2 h-5' />}>
        <Nav menu={menu} />
      </Suspense>
      <article className='prose max-w-none overflow-hidden'>{children}</article>
    </>
  )
}
