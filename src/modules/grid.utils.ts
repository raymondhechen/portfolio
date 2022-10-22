import type { PhotoType } from '../notion/photography.requests'

export const computeResizedPhotos = (photos: PhotoType[], rowHeight: number): PhotoType[] => {
  return photos.map((photo) => {
    const { width, height, url } = photo
    const ratio = rowHeight / height

    const newWidth = width * ratio
    const newHeight = height * ratio

    return {
      url,
      width: newWidth,
      height: newHeight,
    }
  })
}

export const computePhotoColumns = (photos: PhotoType[]): number[] => {
  let col = 0
  return photos.map((photo) => {
    const currCol = col
    col += photo.width
    return currCol
  })
}

export const computeNumberPages = (photos: PhotoType[], containerWidth: number): number => {
  const totalWidth = photos.reduce((prev, photo) => prev + photo.width, 0)
  return (containerWidth + totalWidth) / containerWidth
}
