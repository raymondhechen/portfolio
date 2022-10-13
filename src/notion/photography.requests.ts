import { getDatabase } from './client'
import { PHOTOGRAPHY_DATABASE_ID } from './constants'

const fetchPhotographyAlbums = async () => {
  const albums = getDatabase(PHOTOGRAPHY_DATABASE_ID)
}
