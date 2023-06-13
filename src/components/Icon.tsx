import { CSSProperties, ReactNode } from 'react'
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrightness,
  IconHome,
  IconPencil,
  IconPhoto,
} from '@tabler/icons'
import IconFutureConnoisseurs from '../assets/futureconnoisseurs.svg'
import IconRetool from '../assets/retool.svg'

export type IconType =
  | 'home'
  | 'photo'
  | 'pencil'
  | 'brightness'
  | 'linkedin'
  | 'twitter'
  | 'brand-future-connoisseurs'
  | 'brand-retool'

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
  let additionalProps: Record<string, string> = {}

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
    case 'brightness':
      IconNode = <IconBrightness />
      break
    case 'twitter':
      IconNode = <IconBrandTwitter />
      break
    case 'linkedin':
      IconNode = <IconBrandLinkedin />
      break
    case 'brand-future-connoisseurs':
      IconNode = <IconFutureConnoisseurs />
      additionalProps.fill = 'hsl(247,3.4%,50.7%)'
      break
    case 'brand-retool':
      IconNode = <IconRetool />
      additionalProps.fill = 'hsl(247,3.4%,50.7%)'
      break
    default:
      return <div />
  }

  return (
    <IconNode.type
      size={size}
      color={color}
      stroke={stroke}
      style={style}
      className={className}
      {...additionalProps}
    />
  )
}

export default Icon
