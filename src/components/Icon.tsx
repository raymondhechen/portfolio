import { CSSProperties, ReactNode } from 'react'
import { IconHome, IconPencil, IconPhoto, IconShadow } from '@tabler/icons'

export type IconType = 'home' | 'photo' | 'pencil' | 'shadow'

type Props = {
  type: IconType
  size?: number
  color?: string
  stroke?: number
  style?: CSSProperties
  className?: string
}

const Icon = ({ type, color, size = 24, stroke = 1.5, style, className }: Props) => {
  let IconNode: ReactNode

  switch (type) {
    case 'home':
      IconNode = <IconHome />
      break
    case 'photo':
      IconNode = <IconPhoto />
      break
    case 'pencil':
      IconNode = <IconPencil />
      break
    case 'shadow':
      IconNode = <IconShadow />
      break
    default:
      return <div />
  }

  return (
    <IconNode.type size={size} color={color} stroke={stroke} style={style} className={className} />
  )
}

export default Icon
