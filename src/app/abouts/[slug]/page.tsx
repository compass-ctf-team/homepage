import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRenderer } from '@/components/mdx-renderer'
import { getContents } from '@/lib/contents'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata | undefined> {
  let about = getContents('abouts').find(post => post.slug === params.slug)
  if (!about) return

  let { summary: description } = about.metadata
  const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)

  return {
    title,
    description
  }
}

export async function generateStaticParams() {
  const abouts = getContents('abouts')
  return abouts.map(about => ({ slug: about.slug }))
}

export default function AboutPage({ params }: Props) {
  const about = getContents('abouts').find(about => about.slug === params.slug)
  if (!about) notFound()

  return (
    <MDXRenderer
      limitWidth={false}
      source={about.content}
      components={{
        pre: props => <pre className='bg-transparent p-0' {...props} />
      }}
    />
  )
}
