import slugify from 'slugify'
import { Album } from '../pages/photography'
import { ParsedUrlQuery } from 'querystring'
import { Post } from '../pages/writing'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

export type SlugMap = Record<string, string>

export const createSlug = (name: string) => {
  return slugify(name)
}

export const createSlugMap = (contentArray: any[]) => {
  return contentArray.reduce<SlugMap>((prev: SlugMap, content: Album | Post) => {
    const { id, title } = content
    const slug = createSlug(title)
    prev[slug] = id
    return prev
  }, {})
}
