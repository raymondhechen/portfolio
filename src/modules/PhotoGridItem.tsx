import { Image, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
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
  const scroll = useScroll()
  // const damp = THREE.MathUtils.damp

  useFrame(() => {
    ref.current.position.x += scroll.delta
  })

  // useFrame((state, delta) => {
  //   if (!ref.current) return
  //   ref.current.scale.x = ref.current.scale.x + delta
  // })

  console.log(position)

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image ref={ref} position={position} scale={scale} {...props} />
  )
}

export default PhotoGridItem
