import { ScrollControls, Scroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import PhotoGridItem from './PhotoGridItem'
import { Suspense, useEffect, useState } from 'react'
import {
  computeNumberPages,
  computePhotoPositions,
  computeResizedPhotos,
  loadPhotoDimensions,
  PhotoPosition,
  PhotoType,
} from './grid.utils'
import PhotoGridLoading from './PhotoGridLoading'

type Props = {
  urls: string[]
}

const PhotoGrid = ({ urls }: Props) => {
  const { width: containerWidth } = useThree((state) => state.viewport)
  const [renderPhotos, setRenderPhotos] = useState<PhotoType[]>([])
  const [renderPositions, setRenderPositions] = useState<PhotoPosition[]>([])
  const [numPages, setNumPages] = useState<number>(1)

  useEffect(() => {
    const gap = 0.3
    const margin = containerWidth / 3

    loadPhotoDimensions(urls).then((photos) => {
      console.log(photos)
      const resizedPhotos = computeResizedPhotos(photos, containerWidth / 2)
      const photoPositions = computePhotoPositions(resizedPhotos, margin, gap) // halfContainerWidth / 2 is a bit arbitrary
      const numPages = computeNumberPages(resizedPhotos, containerWidth, margin, gap)

      setNumPages(numPages)
      setRenderPhotos(resizedPhotos)
      setRenderPositions(photoPositions)
    })
  }, [urls, containerWidth])

  return (
    <Suspense fallback={<PhotoGridLoading />}>
      <ScrollControls
        horizontal
        damping={10}
        pages={numPages}
        style={{ overscrollBehavior: 'none' }}>
        <Scroll>
          {renderPhotos.map((photo, i) => (
            <PhotoGridItem
              key={i}
              texture={photo.texture}
              position={[renderPositions[i].x, 0, 0]}
              scale={[photo.width, photo.height]}
            />
          ))}
        </Scroll>
      </ScrollControls>
    </Suspense>
  )
}

export default PhotoGrid
