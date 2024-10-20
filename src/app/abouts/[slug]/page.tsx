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
  let project = getContents('abouts').find(post => post.slug === params.slug)
  if (!project) return

  let { summary: description } = project.metadata
  const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)

  return {
    title,
    description
  }
}

export async function generateStaticParams() {
  const projects = getContents('abouts')
  return projects.map(project => ({ slug: project.slug }))
}

export default function AboutPage({ params }: Props) {
  const project = getContents('abouts').find(project => project.slug === params.slug)
  if (!project) notFound()

  return (
    <MDXRenderer
      limitWidth={false}
      source={project.content}
      components={{
        pre: props => <pre className='bg-transparent p-0' {...props} />
      }}
    />
  )
}
