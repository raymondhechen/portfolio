import slugify from 'slugify'
import { Album } from '../pages/photography'
import { ParsedUrlQuery } from 'querystring'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

export type SlugMap = Record<string, string>

export const createSlug = (name: string) => {
  return slugify(name)
}

export const createSlugMap = (albums: Album[]) => {
  return albums.reduce<SlugMap>((prev, album) => {
    const { id, title } = album
    const slug = createSlug(title)
    prev[slug] = id
    return prev
  }, {})
}
