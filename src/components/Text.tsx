import type { FC, ReactNode } from 'react'
import type { CSSProperties } from 'styled-components'
import styled from 'styled-components'

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1'

type TextProps = {
  type: TextType
  color?: string
  children: ReactNode
}

const TextContainer = styled.div`
  color: ${(props) => props.theme.colors.gray12};
`

const Text: FC<TextProps> = ({ type, color, children }) => {
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
    case 'h6':
      style = {
        fontSize: '20px',
      }
      break
    case 'b1':
      style = {
        fontSize: '15px',
      }
  }

  return <TextContainer style={{ ...style, color }}>{children}</TextContainer>
}

export default Text
