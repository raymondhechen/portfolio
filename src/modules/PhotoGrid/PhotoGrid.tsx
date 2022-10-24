import { ScrollControls, Scroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import PhotoGridItem from './PhotoGridItem'
import { Suspense, useEffect, useState } from 'react'
import {
  computeNumberPages,
  computePhotoPositions,
  computeResizedPhotos,
  PhotoPosition,
  PhotoType,
} from './grid.utils'
import PhotoGridLoading from './PhotoGridLoading'
import { loadPhotoFromUrl } from './photo.utils'

type Props = {
  urls: string[]
}

const PhotoGrid = ({ urls }: Props) => {
  const { width: containerWidth } = useThree((state) => state.viewport)
  const [loadingProgress, setLoadingProgress] = useState<number>(0)
  const [renderPhotos, setRenderPhotos] = useState<PhotoType[]>([])
  const [renderPositions, setRenderPositions] = useState<PhotoPosition[]>([])
  const [numPages, setNumPages] = useState<number>(1)

  useEffect(() => {
    setLoadingProgress(0) // reset on page change
    const gap = 0.3
    const margin = containerWidth / 3

    const loadPhotos = async (urls: string[]) => {
      let i = 1
      const photos: PhotoType[] = []

      for await (const url of urls) {
        const photo = await loadPhotoFromUrl(url)
        photos.push(photo)
        setLoadingProgress((i / urls.length) * 100)
        i += 1
      }

      return photos
    }

    loadPhotos(urls).then((photos) => {
      const resizedPhotos = computeResizedPhotos(photos, containerWidth / 2)
      const photoPositions = computePhotoPositions(resizedPhotos, margin, gap) // halfContainerWidth / 2 is a bit arbitrary
      const numPages = computeNumberPages(resizedPhotos, containerWidth, margin, gap)

      setLoadingProgress(100)
      setNumPages(numPages)
      setRenderPhotos(resizedPhotos)
      setRenderPositions(photoPositions)
    })
  }, [urls, containerWidth])

  if (loadingProgress !== 100) return <PhotoGridLoading progress={loadingProgress} />

  return (
    <Suspense>
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
