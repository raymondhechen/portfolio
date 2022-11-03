import styled from 'styled-components'
import type { FC, ReactNode } from 'react'
import type { CSSProperties } from 'styled-components'

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3'
type TextWeight = 300 | 400 | 500 | 600

type TextStylesType = Record<
  TextType,
  {
    desktop: string
    tablet?: string
    mobile?: string
  }
>

const TextStyles: TextStylesType = {
  h1: {
    desktop: '50px',
    tablet: '40px',
    mobile: '30px',
  },
  h2: {
    desktop: '40px',
    tablet: '27.5px',
    mobile: '22.5px',
  },
  h3: {
    desktop: '35px',
  },
  h4: {
    desktop: '30px',
  },
  h5: {
    desktop: '25px',
  },
  h6: {
    desktop: '20px',
  },
  b1: {
    desktop: '17.5px',
  },
  b2: {
    desktop: '15px',
  },
  b3: {
    desktop: '12.5px',
  },
}

const TextContainer = styled.div<{ type: TextType }>`
  color: ${(props) => props.theme.colors.gray12};
  transition: var(--transition);
  font-size: ${(props) => TextStyles[props.type].desktop};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => TextStyles[props.type].tablet};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => TextStyles[props.type].tablet};
  }
`

type TextProps = {
  type: TextType
  weight?: TextWeight
  color?: string
  children: ReactNode
  style?: CSSProperties
}

const Text: FC<TextProps> = ({ style, type, weight, color, children }) => {
  return (
    <TextContainer type={type} style={{ ...style, color, fontWeight: weight }}>
      {children}
    </TextContainer>
  )
}

export default Text
