import { Image, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { Mesh } from 'three'
import { PhotoType } from '../notion/photography.requests'

type Props = {
  url: string
  position: THREE.Vector3Tuple
  scale: THREE.Vector2Tuple
  allPhotos: PhotoType[]
}

const PhotoGridItem = ({ url, position, scale, allPhotos }: Props) => {
  const ref = useRef<Mesh>(null!)
  const scroll = useScroll()

  useFrame(() => {
    const y = scroll.curve(0, 1)
    console.log(y)
  })

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image ref={ref} url={url} position={position} scale={scale} />
}

export default PhotoGridItem
