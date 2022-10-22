import type { FC, ReactNode } from 'react'
import type { CSSProperties } from 'styled-components'
import styled from 'styled-components'

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3'

type TextProps = {
  type: TextType
  color?: string
  children: ReactNode
  style?: CSSProperties
}

const TextContainer = styled.div`
  color: ${(props) => props.theme.colors.gray12};
  transition: var(--transition);
`

const Text: FC<TextProps> = ({ style: styleProp, type, color, children }) => {
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
        fontSize: '17.5px',
      }
      break
    case 'b2':
      style = {
        fontSize: '15px',
      }
      break
    case 'b3':
      style = {
        fontSize: '12.5px',
      }
  }

  return <TextContainer style={{ ...style, ...styleProp, color }}>{children}</TextContainer>
}

export default Text
