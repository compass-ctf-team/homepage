import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { getContents } from '@/lib/contents'

export default function members() {
  const members = getContents('members')

  return (
    <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {members.sort((a, b) => (a.metadata.order < b.metadata.order ? -1 : 1)).map(member => (
        <Link href={`/members/${member.slug}`} key={member.slug} className='divide-y divide-[#898989]/20 overflow-hidden border border-[#898989]/20'>
          <figure className='group relative aspect-video'>
            <Image
              src={member.metadata.image!}
              alt={member.metadata.title}
              quality={10}
              fill
              sizes='100%'
              className='object-cover object-center transition-all duration-500 group-hover:grayscale-0'
              priority
            />
            <div className='absolute left-0 top-0 grid h-full w-full place-items-center bg-[#080808]/90 transition-opacity duration-500 group-hover:opacity-0'>
              <p className='text-center text-3xl font-semibold uppercase'>{member.metadata.title}</p>
            </div>
            <div
              className='absolute left-0 top-0 h-full w-full opacity-[2%] group-hover:opacity-0'
            />
          </figure>
          <div className='p-2'>
            <p className='line-clamp-4 text-sm'>{member.metadata.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
