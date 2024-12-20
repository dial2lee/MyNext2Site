// import { SITE_METADATA } from './site-metadata'
interface NavLink {
  href: string
  title: string
  emoji?: string
}

export const HEADER_NAV_LINKS: NavLink[] = [
  { href: '/blog', title: '博客', emoji: 'writing-hand' },
  { href: '/snippets', title: '碎片', emoji: 'dna' },
  // { href: '/projects', title: '项目', emoji: 'man-technologist' },
  { href: '/about', title: '关于', emoji: 'billed-cap' },
]

export const MORE_NAV_LINKS: NavLink[] = [
  // { href: '/books', title: '读书', emoji: 'books' },
  // { href: '/movies', title: '电影', emoji: 'film-frames' },
  // { href: '/tags', title: '标签', emoji: 'label' },
]

export const FOOTER_NAV_LINKS: NavLink[] = [
  { href: '/blog', title: '博客' },
  { href: '/snippets', title: '碎片' },
  // { href: '/projects', title: '项目' },
  { href: '/tags', title: '标签' },
  { href: '/feed.xml', title: 'RSS Feed' },
]

export const FOOTER_PERSONAL_STUFF: NavLink[] = [
  { href: '/about', title: '关于' },
  { href: '/static/resume.pdf', title: '简历' },
  { href: '/books', title: '读书' },
  { href: '/movies', title: '电影' },
]
