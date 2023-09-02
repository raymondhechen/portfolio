'use client'

import Page from '@/modules/Page'
import { styled } from 'styled-components'
import MediaGrid from './MediaGrid/MediaGrid'
import Media from './MediaGrid/Media'
import { blueAngels, santaMonica, sequoia } from './repository'

const Content = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  // this adds padding at bottom of grid which is missing due to a known css bug
  &:after {
    padding-bottom: 15px;
    height: 100%;
    content: '';
  }
`

const PhotographyPage = () => {
  return (
    <Page>
      <Content>
        <MediaGrid>
          {santaMonica.map((photo) => (
            <Media {...photo} />
          ))}
        </MediaGrid>
        <MediaGrid>
          {sequoia.map((photo) => (
            <Media {...photo} />
          ))}
        </MediaGrid>
        <MediaGrid>
          {blueAngels.map((photo) => (
            <Media {...photo} />
          ))}
        </MediaGrid>
      </Content>
    </Page>
  )
}

export default PhotographyPage
