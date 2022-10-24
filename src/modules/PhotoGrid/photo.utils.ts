import { PhotoType } from './grid.utils'
import * as THREE from 'three'

export const loadPhotoFromUrl = async (url: string): Promise<PhotoType> => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.crossOrigin = 'anonymous' // cors for threejs
    img.onload = () => {
      // ideally we'd use this texture for a planeGeometry material
      // but wasn't able to solve the initial scroll lag with that approach
      // using the drei image abstraction worked instead but loads url again
      const texture = new THREE.Texture(img)
      texture.needsUpdate = true
      resolve({ url, texture, width: img.width, height: img.height })
    }
    img.onerror = reject
    img.src = url
  })
}
