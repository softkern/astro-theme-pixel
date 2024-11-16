import type { Link, Site } from '@types'

const SITE: Site = {
  url: 'https://softkern.com',
  favicon: '/favicon.svg',
  author: 'softkern',
  title: '软核',
  description: '欢迎来到我的个人网站',
}

const MENUS: Link[] = [
  { name: '首页', url: '/' },
  { name: '博客', url: '/posts' },
  { name: '标签', url: '/tags' },
  { name: '关于', url: '/about' },
]

export { MENUS, SITE }
