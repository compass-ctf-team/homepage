import { Metadata } from 'next'
import { Suspense } from 'react'
import { Nav } from './_components/nav'

export const metadata: Metadata = {
  title: 'Members',
  description: 'Meet the hackers at COMPASS CTF team'
}

interface Props {
  children: React.ReactNode
}

export default function MembersLayout({ children }: Readonly<Props>) {
  return (
    <>
      <Suspense fallback={<div className='mb-2 h-5' />}>
        <Nav />
      </Suspense>
      {children}
    </>
  )
}
