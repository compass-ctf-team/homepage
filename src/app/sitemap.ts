import { ENV } from '@/lib/constants'
import { getContents } from '@/lib/contents'

export default async function sitemap() {
  const URL = ENV.NEXT_PUBLIC_WEBSITE_URL

  const routes = [''].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  const aboutRoutes = getContents('abouts').map(route => ({
    url: `${URL}/abouts/${route.slug}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  const membersRoutes = getContents('members').map(route => ({
    url: `${URL}/members/${route.slug}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...aboutRoutes, ...membersRoutes]
}
