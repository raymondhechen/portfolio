import styled from 'styled-components'
import Page from '../components/Page'

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

const PhotographyPage = () => {
  return (
    <Page>
      <AlbumSection>
        <AlbumHeader>
          <span>Muir Woods</span>
        </AlbumHeader>
        <AlbumGrid></AlbumGrid>
      </AlbumSection>
    </Page>
  )
}

export default PhotographyPage
