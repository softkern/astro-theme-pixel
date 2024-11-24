import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString as toStr } from 'mdast-util-to-string'
import calculateReadingTime from 'reading-time'

export const getReadingTime = (text: string): string | undefined => {
  if (!text || !text.length) {
    return
  }

  try {
    const { minutes } = calculateReadingTime(toStr(fromMarkdown(text)))
    if (minutes && minutes > 0) {
      return `${Math.ceil(minutes)} min read`
    }
    return
  } catch (e) {
    return
  }
}
