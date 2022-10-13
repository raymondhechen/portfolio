import { Album } from '../pages/photography'
import { getBlocks, getDatabase, getPage } from './client'
import { PHOTOGRAPHY_DATABASE_ID } from './constants'

export const fetchAlbums = async () => {
  const albums = getDatabase(PHOTOGRAPHY_DATABASE_ID)
  return albums
}

export const fetchAlbum = async (albumId: string): Promise<Album> => {
  const page = await getPage(albumId)

  const { id, properties } = page
  const { Name, Location, Date } = properties

  const blocks = await getBlocks(page.id)
  const photos = blocks.map((block) => block.image.file.url)

  return {
    id,
    title: Name.title[0].text.content || '',
    location: Location.select.name || '',
    date: Date.date?.start || '',
    photos,
  } as Album
}
