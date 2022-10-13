import type { FC, ReactNode } from 'react'
import type { CSSProperties } from 'styled-components'

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'b1'

type TextProps = {
  type: TextType
  children: ReactNode
}

const Text: FC<TextProps> = ({ type, children }) => {
  let style: CSSProperties

  switch (type) {
    case 'h1':
      style = {
        fontSize: '45px',
        fontWeight: '500',
      }
      break
    case 'h2':
      style = {
        fontSize: '40px',
      }
      break
    case 'h3':
      style = {
        fontSize: '35px',
      }
      break
    case 'h4':
      style = {
        fontSize: '30px',
      }
      break
    case 'h5':
      style = {
        fontSize: '25px',
      }
      break
    case 'b1':
      style = {
        fontSize: '15px',
      }
  }

  return <div style={style}>{children}</div>
}

export default Text
