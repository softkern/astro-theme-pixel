interface Link {
  name: string
  url: string
  icon?: string
}

interface Site {
  url: string
  author: string
  title: string
  favicon?: string
  description?: string
  canonicalURL?: string
  ogImage?: string
  ogType?: string
}

export type { Link, Site }
