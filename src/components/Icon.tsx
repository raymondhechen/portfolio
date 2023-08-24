'use client'

import { CSSProperties, ReactNode } from 'react'
import {
  LinkedinIcon,
  TwitterIcon,
  HomeIcon,
  PencilIcon,
  ImageIcon,
  MoonStarIcon,
} from 'lucide-react'

export type IconType =
  | 'home'
  | 'photo'
  | 'pencil'
  | 'brightness'
  | 'linkedin'
  | 'twitter'
  | 'brand-future-connoisseurs'
  | 'brand-retool'
  | 'brand-paracosm'

type Props = {
  type: IconType
  size?: number
  color?: string
  stroke?: number
  style?: CSSProperties
  className?: string
}

const Icon = ({
  type,
  color,
  size = 22,
  stroke = 1.5,
  style,
  className,
}: Props) => {
  let IconNode: ReactNode
  let additionalProps: Record<string, string> = {}

  switch (type) {
    case 'home':
      IconNode = <HomeIcon />
      break
    case 'photo':
      IconNode = <ImageIcon />
      break
    case 'pencil':
      IconNode = <PencilIcon />
      break
    case 'brightness':
      IconNode = <MoonStarIcon />
      break
    case 'twitter':
      IconNode = <TwitterIcon />
      break
    case 'linkedin':
      IconNode = <LinkedinIcon />
      break
    default:
      return <div />
  }

  return (
    <IconNode.type
      size={size}
      color={color}
      strokeWidth={stroke}
      style={style}
      className={className}
      {...additionalProps}
    />
  )
}

export default Icon
