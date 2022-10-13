import { Album } from '../pages/photography'
import { getBlocks, getDatabase, getPage } from './client'
import { PHOTOGRAPHY_DATABASE_ID } from './constants'
import sizeOf from 'image-size'

export const fetchAlbums = async () => {
  const albums = getDatabase(PHOTOGRAPHY_DATABASE_ID)
  return albums
}

export type PhotoType = {
  url: string
  height?: number
  width?: number
}

export const fetchAlbum = async (albumId: string): Promise<Album> => {
  const page: any = await getPage(albumId)

  const { id, properties } = page
  const { Name, Location, Date } = properties

  const blocks = await getBlocks(page.id)
  const photos = await Promise.all(
    blocks.map<Promise<PhotoType>>(async (block: any) => {
      const url = block.image.file.url
      const { width, height } = await fetchImageDimensions(url)

      return {
        url,
        width,
        height,
      }
    }),
  )

  return {
    id,
    title: Name.title[0].text.content || '',
    location: Location.select.name || '',
    date: Date.date?.start || '',
    photos,
  } as Album
}

type PhotoDimension = {
  width?: number
  height?: number
}

export const fetchImageDimensions = async (url: string): Promise<PhotoDimension> => {
  const response = await fetch(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })

  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const dimensions = sizeOf(buffer)
  return { width: dimensions.width, height: dimensions.height }
}
