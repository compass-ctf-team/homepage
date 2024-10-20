'use client'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

export const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className='sticky top-0 z-50 mb-2 flex select-none items-center overflow-x-auto bg-[#232323]'>
      {menu.map(item => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.title}
            href={item.href}
            className={`flex shrink-0 items-center gap-1.5 px-3 py-0.5 leading-none transition-all ${isActive ? 'bg-[#969696] text-black' : 'text-[#BDBDBDE6]'}`}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}

const menu = [
  {
    title: 'All',
    href: '/members'
  },
  {
    title: 'Active',
    href: '/members/active'
  },
  {
    title: 'Alumni',
    href: '/members/alumni'
  }
]
