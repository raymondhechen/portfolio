import { Image } from '@react-three/drei'
import * as THREE from 'three'

type Props = {
  url: string
  position: THREE.Vector3Tuple
  scale: THREE.Vector2Tuple
}

const PhotoGridItem = ({ position, scale, url }: Props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image position={position} scale={scale} url={url} />
}

export default PhotoGridItem
