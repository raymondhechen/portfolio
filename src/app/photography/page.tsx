'use client'

import Page from '@/modules/Page'
import { styled } from 'styled-components'
import { photographyRepository } from './repository'
import Image from 'next/image'

const Content = styled.div`
  display: grid;
  padding: 30px;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1.5fr));
  grid-auto-rows: minmax(800px, auto);
  gap: 0.5rem;
  width: 100%;
  height: 100%;

  // this adds padding at bottom of grid which is missing due to a known css bug
  &:after {
    padding-bottom: 30px;
    height: 100%;
    content: '';
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`

const PhotographyPage = () => {
  return (
    <Page>
      <Content>
        {photographyRepository.map((photo) => (
          <ImageContainer key={photo}>
            <Image
              alt={photo}
              style={{ objectFit: 'cover' }}
              src={photo}
              fill
            />
          </ImageContainer>
        ))}
      </Content>
    </Page>
  )
}

export default PhotographyPage
