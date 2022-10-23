import type { PhotoType } from '../../notion/photography.requests'

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
  margin: number,
  gap: number,
): PhotoPosition[] => {
  let col = -margin
  const positions: PhotoPosition[] = []

  // using array.map leads to bizarre race condition in nextjs
  // where x is not properly assigned to column
  for (const photo of photos) {
    const { width, height } = photo

    let currCol = col
    let x = currCol + width / 2
    let y = height / 2

    col += width + gap
    positions.push({ x, y })
  }

  return positions
}

export const computeNumberPages = (
  photos: PhotoType[],
  containerWidth: number,
  margin: number,
  gap: number,
): number => {
  const totalWidth = photos.reduce((prev, photo) => prev + photo.width + gap, 0) - gap // remove the last gap at the end since extra
  // containerWidth / 2 is added buffer
  return (margin + totalWidth) / containerWidth
}
