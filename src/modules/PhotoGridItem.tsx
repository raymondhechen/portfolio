import { Image } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { Mesh } from 'three'

type Props = {
  index: number
  url: string
  position: THREE.Vector3Tuple
  scale: THREE.Vector2Tuple
}

const PhotoGridItem = ({ index, position, scale, ...props }: Props) => {
  const ref = useRef<Mesh>(null!)

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image ref={ref} position={position} scale={scale} {...props} />
}

export default PhotoGridItem
