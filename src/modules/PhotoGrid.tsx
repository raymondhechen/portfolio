import styled from 'styled-components'
import Image from 'next/image'
import { PhotoType } from '../notion/photography.requests'

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

const ImageContainer = styled.div`
  position: relative;
`

type Props = {
  photos: PhotoType[]
}

const PhotoGrid = ({ photos }: Props) => {
  return (
    <GridContainer>
      {photos.map((photo, id) => {
        const { width, height } = photo
        const aspectRatio = width && height && width / height
        const containerHeight = 300
        const containerWidth = aspectRatio ? containerHeight * aspectRatio : 300

        return (
          <ImageContainer key={id} style={{ width: containerWidth, height: containerHeight }}>
            <Image
              src={photo.url}
              alt={'photo'}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL={photo.url}
              quality={50}
            />
          </ImageContainer>
        )
      })}
    </GridContainer>
  )
}

export default PhotoGrid
