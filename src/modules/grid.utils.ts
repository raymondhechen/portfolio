import type { PhotoType } from '../notion/photography.requests'

export type PhotoPosition = {
  x: number
  y: number
}

export const computeResizedPhotos = (photos: PhotoType[], rowHeight: number): PhotoType[] => {
  return photos.map((photo) => {
    const { width, height, url } = photo

    const aspectRatio = width / height
    const newHeight = rowHeight
    const newWidth = newHeight * aspectRatio

    return {
      url,
      width: newWidth,
      height: newHeight,
    }
  })
}

export const computePhotoPositions = (
  photos: PhotoType[],
  halfContainerWidth: number,
  gap: number,
): PhotoPosition[] => {
  let col = 0
  return photos.map(({ width, height }) => {
    const currCol = col

    // divide width by 2 because threejs treats ([x, y, z]) as the center of the mesh
    // thus, if we just add currCol + width, then the position will be off by half the width
    const x = currCol + width / 2 - halfContainerWidth
    const y = height / 2

    col += width + gap // add the full width to the image column to get the next column start

    return { x, y }
  })
}

export const computeNumberPages = (
  photos: PhotoType[],
  containerWidth: number,
  gap: number,
): number => {
  const totalWidth = photos.reduce((prev, photo) => prev + photo.width + gap, 0) - gap // remove the last gap at the end since extra
  // containerWidth / 2 is added buffer
  return (containerWidth / 2 + totalWidth) / containerWidth
}
