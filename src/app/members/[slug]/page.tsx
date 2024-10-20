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
  let member = getContents('members').find(post => post.slug === params.slug)
  if (!member) return

  let { title, summary: description} = member.metadata

  return {
    title,
    description,
  }
}

export async function generateStaticParams() {
  const members = getContents('members')
  return members.map(member => ({ slug: member.slug }))
}

export default function memberPage({ params }: Props) {
  const member = getContents('members').find(member => member.slug === params.slug)
  if (!member) notFound()

  return <MDXRenderer source={member.content} />
}
