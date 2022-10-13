import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { Client } from '@notionhq/client'

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
`

const AlbumGrid = styled.div``

type Album = {
  id: string
  title: string
  date: string
  location: string
  photos: string[]
}

const PhotographyPage = () => {
  const [albums, setAlbums] = useState<Album[]>([])

  // Initializing a client
  const notion = new Client({
    auth: import.meta.env.NOTION_PHOTOGRAPHY_KEY,
  })

  useEffect(() => {
    const fetchPhotos = async () => {
      const databaseId = '13ac81fe0efb42779d2094cbf5c8f6b8'
      const response = await notion.databases.retrieve({ database_id: databaseId })
      console.log(response)
    }
  }, [])

  return (
    <Page>
      <AlbumSection>
        <AlbumHeader>
          <span>Muir Woods: An Oasis in the Bay</span>
        </AlbumHeader>
        <AlbumGrid></AlbumGrid>
      </AlbumSection>
    </Page>
  )
}

export default PhotographyPage
