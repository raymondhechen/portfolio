import { fetchAlbum, fetchAlbums } from '../../notion/photography.requests'
import { Album } from '../photography'
import PhotographyMenu from '../../modules/PhotoMenu'
import { createSlug, createSlugMap, IParams, SlugMap } from '../../utilities/slugs'
import styled from 'styled-components'
import PhotoGrid from '../../modules/PhotoGrid/PhotoGrid'
import { Canvas } from '@react-three/fiber'

const FullContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

type Props = {
  albumId: string
  albums: Album[]
  slugMap: SlugMap
}

const PhotographyAlbumPage = ({ albumId, albums, slugMap }: Props) => {
  const album = albums.find((album) => album.id === albumId)
  if (!album) return <PhotographyMenu albums={albums} activeId={albumId} />

  return (
    <FullContainer>
      <PhotographyMenu albums={albums} activeId={albumId} />
      <FullContainer>
        <Canvas>
          <PhotoGrid photos={album?.photos} />
        </Canvas>
      </FullContainer>
    </FullContainer>
  )
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
