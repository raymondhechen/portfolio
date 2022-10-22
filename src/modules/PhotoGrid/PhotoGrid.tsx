import { ScrollControls, Scroll } from '@react-three/drei'
import { PhotoType } from '../../notion/photography.requests'
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
    console.log('Container Width', containerWidth)

    const gap = 0.3
    const margin = containerWidth / 3

    const resizedPhotos = computeResizedPhotos(photos, containerWidth / 2)
    const photoPositions = computePhotoPositions(resizedPhotos, margin, gap) // halfContainerWidth / 2 is a bit arbitrary
    const numPages = computeNumberPages(resizedPhotos, containerWidth, margin, gap)

    console.log('Photo Positions', photoPositions)

    setNumPages(numPages)
    setRenderPhotos(resizedPhotos)
    setRenderPositions(photoPositions)
  }, [photos, containerWidth])

  return (
    <ScrollControls horizontal damping={10} pages={numPages} style={{ overscrollBehavior: 'none' }}>
      <Scroll>
        {renderPhotos.map((photo, i) => (
          <PhotoGridItem
            key={i}
            url={photo.url}
            position={[renderPositions[i].x, 0, 0]}
            scale={[photo.width, photo.height]}
          />
        ))}
      </Scroll>
    </ScrollControls>
  )
}

export default PhotoGrid
