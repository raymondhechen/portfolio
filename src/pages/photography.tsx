import styled from 'styled-components'
import Text from '../components/Text'
import Page from '../modules/Page'
import PhotoGrid from '../modules/PhotoGrid'
import { fetchAlbum, fetchAlbums, PhotoType } from '../notion/photography.requests'

const AlbumSection = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.gray12};
`

const AlbumHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const AlbumHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

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
              <Text type="h3">{album.title}</Text>
              <AlbumHeaderRight>
                <Text type="h5">{album.location}</Text>
                <Text type="b1">{dateString}</Text>
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
  }
}

export default PhotographyPage
