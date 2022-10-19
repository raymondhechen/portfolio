import { fetchAlbum, fetchAlbums, PhotoType } from '../notion/photography.requests'
import PhotographyMenu from './photography/PhotographyMenu'

export type Album = {
  id: string
  title: string
  date: string
  location: string
  photos: PhotoType[]
}

type Props = {
  albums: Album[]
}

const PhotographyPage = ({ albums }: Props) => {
  return <PhotographyMenu albums={albums} />
}

export const getStaticProps = async () => {
  const albumDatabase = await fetchAlbums()
  const albums = await Promise.all(albumDatabase.map((page) => fetchAlbum(page.id)))
  return {
    props: {
      albums,
    },
  }
}

export default PhotographyPage
