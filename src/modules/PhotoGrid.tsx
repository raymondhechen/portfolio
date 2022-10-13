import styled from 'styled-components'
import Image from 'next/image'

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

type Props = {
  photos: string[]
}

const PhotoGrid = ({ photos }: Props) => {
  return (
    <GridContainer>
      {photos.map((photo, id) => (
        <Image
          key={id}
          src={photo}
          alt={'photo'}
          height={300}
          width={300}
          placeholder="blur"
          blurDataURL={photo}
        />
      ))}
    </GridContainer>
  )
}

export default PhotoGrid
