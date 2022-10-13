import styled from 'styled-components'
import Page from '../modules/Page'
import PhotoGrid from '../modules/PhotoGrid'
import { fetchAlbum, fetchAlbums } from '../notion/photography.requests'

const AlbumSection = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.gray12};
`

const AlbumHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 35px;
  margin-bottom: 10px;
`

const AlbumHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 25px;
`

const AlbumHeaderSubtitle = styled.div`
  font-size: 15px;
`

export type Album = {
  id: string
  title: string
  date: string
  location: string
  photos: string[]
}

type Props = {
  albums: Album[]
}

const PhotographyPage = ({ albums }: Props) => {
  return (
    <Page>
      {albums.map((album) => {
        const dateString = new Date(album.date).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })

        return (
          <AlbumSection key={album.id}>
            <AlbumHeader>
              <span>{album.title}</span>
              <AlbumHeaderRight>
                <span>{album.location}</span>
                <AlbumHeaderSubtitle>{dateString}</AlbumHeaderSubtitle>
              </AlbumHeaderRight>
            </AlbumHeader>
            <PhotoGrid photos={album.photos} />
          </AlbumSection>
        )
      })}
    </Page>
  )
}

export const getStaticProps = async () => {
  const albumDatabase = await fetchAlbums()
  const albums = await Promise.all(albumDatabase.map((page) => fetchAlbum(page.id)))

  return {
    props: {
      albums,
    },
    revalidate: 1, // In seconds
  }
}

export default PhotographyPage