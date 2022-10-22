import { ScrollControls, Scroll } from '@react-three/drei'
import { PhotoType } from '../notion/photography.requests'
import { useThree } from '@react-three/fiber'
import PhotoGridItem from './PhotoGridItem'
import { useEffect, useState } from 'react'
import {
  computeNumberPages,
  computePhotoPositions,
  computeResizedPhotos,
  PhotoPosition,
} from './grid.utils'

type Props = {
  photos: PhotoType[]
}

const PhotoGrid = ({ photos }: Props) => {
  const { width: containerWidth } = useThree((state) => state.viewport)
  const [renderPhotos, setRenderPhotos] = useState<PhotoType[]>([])
  const [renderPositions, setRenderPositions] = useState<PhotoPosition[]>([])
  const [numPages, setNumPages] = useState<number>(1)

  useEffect(() => {
    const gap = 0.3
    const halfContainerWidth = containerWidth / 2

    const resizedPhotos = computeResizedPhotos(photos, halfContainerWidth)
    const photoPositions = computePhotoPositions(resizedPhotos, halfContainerWidth / 2, gap) // halfContainerWidth / 2 is a bit arbitrary
    const numPages = computeNumberPages(resizedPhotos, containerWidth, gap)
    setNumPages(numPages)
    setRenderPhotos(resizedPhotos)
    setRenderPositions(photoPositions)
  }, [photos, containerWidth])

  return (
    <ScrollControls horizontal damping={10} pages={numPages}>
      <Scroll>
        {renderPhotos.map((photo, i) => (
          <PhotoGridItem
            key={i}
            url={photo.url}
            position={[renderPositions[i].x, 0, 0]}
            scale={[photo.width, photo.height]}
            allPhotos={renderPhotos}
          />
        ))}
      </Scroll>
    </ScrollControls>
  )
}

export default PhotoGrid
