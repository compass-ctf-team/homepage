import './globals.css'
import { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { ViewTransitions } from 'next-view-transitions'

import { Navbar } from '@/components/navbar'
import { Container } from '@/components/container'

import { ENV } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(ENV.NEXT_PUBLIC_WEBSITE_URL),
  title: {
    default: 'COMPASS CTF',
    template: '%s | COMPASS'
  },
  description:
    "COMPASS CTF is a team affiliated to COMPASS Lab from Southern University of Science and Technology (SUSTech).",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: ENV.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
}

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={`${GeistSans.variable} ${GeistMono.variable} grid h-dvh place-items-center bg-[#3D3D3D] font-mono overflow-hidden`}>
          <Container>
            <section className='relative flex-1 overflow-y-auto px-2 md:px-3 lg:px-4'>{children}</section>
            <Navbar />
          </Container>
          <div
            className='absolute left-0 top-0 z-20 h-full w-full rounded-2xl bg-gradient-to-tr from-[#010101] to-[#242424] opacity-[4%]'
          />
          <div className='absolute left-0 top-0 h-full w-full' />
          {process.env.NODE_ENV === 'production'}
        </body>
      </html>
    </ViewTransitions>
  )
}
