import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Members',
  description:
    ''
}

interface Props {
  children: React.ReactNode
}

export default function ProjectsLayout({ children }: Readonly<Props>) {
  return (
    <>
      <Suspense fallback={<div className='mb-2 h-5' />}>
      </Suspense>
      {children}
    </>
  )
}
