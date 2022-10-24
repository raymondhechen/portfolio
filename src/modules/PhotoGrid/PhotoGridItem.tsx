import * as THREE from 'three'

type Props = {
  texture: THREE.Texture
  position: THREE.Vector3Tuple
  scale: THREE.Vector2Tuple
}

const PhotoGridItem = ({ position, scale, texture }: Props) => {
  return (
    <mesh position={position}>
      <planeBufferGeometry args={scale} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export default PhotoGridItem
