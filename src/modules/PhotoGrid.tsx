import { ScrollControls, Scroll } from '@react-three/drei'
import { PhotoType } from '../notion/photography.requests'
import { useThree } from '@react-three/fiber'
import PhotoGridItem from './PhotoGridItem'
import { useEffect, useState } from 'react'
import { computeNumberPages, computePhotoColumns, computeResizedPhotos } from './grid.utils'

type Props = {
  photos: PhotoType[]
}

const PhotoGrid = ({ photos }: Props) => {
  const { width: containerWidth } = useThree((state) => state.viewport)
  const [renderPhotos, setRenderPhotos] = useState<PhotoType[]>([])
  const [renderColumns, setRenderColumns] = useState<number[]>([])
  const [numPages, setNumPages] = useState<number>(1)

  useEffect(() => {
    const resizedPhotos = computeResizedPhotos(photos, 5)
    const photoColumns = computePhotoColumns(resizedPhotos)
    const numPages = computeNumberPages(resizedPhotos, containerWidth)
    setNumPages(numPages)
    setRenderPhotos(resizedPhotos)
    setRenderColumns(photoColumns)
  }, [photos, containerWidth])

  return (
    <ScrollControls horizontal damping={10} pages={numPages}>
      <Scroll>
        {renderPhotos.map((photo, i) => (
          <PhotoGridItem
            key={i}
            index={i}
            url={photo.url}
            position={[renderColumns[i], 0, 0]}
            scale={[photo.width, photo.height]}
          />
        ))}
      </Scroll>
    </ScrollControls>
  )
}

export default PhotoGrid
