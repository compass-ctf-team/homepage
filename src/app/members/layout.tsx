import { Metadata } from 'next'

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
      {children}
    </>
  )
}
