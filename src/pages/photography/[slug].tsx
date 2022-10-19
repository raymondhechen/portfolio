import { fetchAlbum, fetchAlbums } from '../../notion/photography.requests'
import { Album } from '../photography'
import PhotographyMenu from './PhotographyMenu'
import { createSlug, createSlugMap, IParams, SlugMap } from '../../utilities/slugs'

type Props = {
  albumId: string
  albums: Album[]
  slugMap: SlugMap
}

const PhotographyAlbumPage = ({ albumId, albums, slugMap }: Props) => {
  return <PhotographyMenu albums={albums} activeId={albumId} />
}

export const getStaticProps = async ({ params }: { params: IParams }) => {
  const albumDatabase = await fetchAlbums()
  const albums = await Promise.all(albumDatabase.map((page) => fetchAlbum(page.id)))
  const slugMap = createSlugMap(albums)

  const { slug } = params
  const albumId = slugMap[slug]

  return {
    props: {
      albumId,
      albums,
      slugMap,
    },
  }
}

export const getStaticPaths = async () => {
  const albumDatabase = await fetchAlbums()
  const albums = await Promise.all(albumDatabase.map((page) => fetchAlbum(page.id)))
  const paths = albums.map((album) => ({ params: { slug: createSlug(album.title) } }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export default PhotographyAlbumPage
