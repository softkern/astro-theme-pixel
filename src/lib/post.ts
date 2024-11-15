import { type CollectionEntry, getCollection, getEntry } from 'astro:content'

const normalizePost = (post: CollectionEntry<'posts'>) => {
  post.data.category = post.data.category || 'default'
  post.data.tags = post.data.tags || []
  return post
}

export const fetchPosts = async () => {
  // if PROD, filter draft post
  const posts: CollectionEntry<'posts'>[] = await getCollection('posts', ({ data }: CollectionEntry<'posts'>) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })

  const normalizedPosts = posts.map((post) => normalizePost(post))

  // sort by updatedAt or createdAt
  return normalizedPosts.sort((a, b) => {
    const aDate = new Date(a.data.updatedAt ?? a.data.createdAt).valueOf()
    const bDate = new Date(b.data.updatedAt ?? b.data.createdAt).valueOf()
    return bDate - aDate
  })
}

export const fetchTags = async () => {
  const tags = new Map<string, number>()
  const posts = await fetchPosts()
  posts.map((post) => {
    if (!post.data.tags) {
      return
    }

    post.data.tags.map((tag: string) => {
      tags.set(tag, (tags.get(tag) || 0) + 1)
    })
  })
  return tags
}

export const fetchCategoryMap = async () => {
  const categoryMap = new Map<string, CollectionEntry<'posts'>[]>()
  const posts = await fetchPosts()
  posts.map((post) => {
    const category = post.data.category || 'default'
    let posts = categoryMap.get(category)
    if (!posts) {
      posts = []
    }
    posts.push(post)

    categoryMap.set(category, posts)
  })
  return categoryMap
}

export const fetchCategory = async (slug: string) => {
  return await getEntry('categories', slug)
}
