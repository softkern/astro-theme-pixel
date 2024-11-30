import type { Link, Site } from '@types'

const SITE: Site = {
  url: 'http://localhost:4321',
  favicon: '/favicon.svg',
  author: 'You Name',
  title: 'Website Name',
  description: 'welcome to my personal website',
  umami: {
    url: import.meta.env.SK_UMAMI_URL,
    website_id: import.meta.env.SK_UMAMI_WEBSITE_ID,
  },
}

const MENUS: Link[] = [
  { name: '首页', url: '/' },
  { name: '博客', url: '/posts' },
  { name: '标签', url: '/tags' },
  { name: '关于', url: '/about' },
]

export { MENUS, SITE }
