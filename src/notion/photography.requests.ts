import { Album } from '../pages/photography'
import { getBlocks, getDatabase, getPage } from './client'
import { PHOTOGRAPHY_DATABASE_ID } from './constants'

export const fetchAlbums = async () => {
  return getDatabase(PHOTOGRAPHY_DATABASE_ID)
}

export const fetchAlbum = async (albumId: string): Promise<Album> => {
  const page: any = await getPage(albumId)

  const { id, properties } = page
  const { Name, Location, Date } = properties

  const blocks = await getBlocks(page.id)
  const photos = await Promise.all(
    blocks.map<string>((block: any) => {
      return block.image.external?.url ?? block.image.file.url
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
