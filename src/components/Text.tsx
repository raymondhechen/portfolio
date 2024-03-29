'use client'

import styled from 'styled-components'
import type { CSSProperties, FC, ReactNode } from 'react'

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3'
type TextWeight = 300 | 400 | 500 | 600

type TextStylesType = Partial<
  Record<
    TextType,
    {
      desktop: string
      tablet?: string
      mobile?: string
    }
  >
>

const FontSizes: TextStylesType = {
  h1: {
    desktop: '50px',
    tablet: '37.5px',
    mobile: '27.5px',
  },
  h2: {
    desktop: '40px',
    tablet: '27.5px',
    mobile: '25px',
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
    tablet: '17.5px',
  },
  b1: {
    desktop: '17.5px',
    tablet: '15px',
    mobile: '15px',
  },
  b2: {
    desktop: '15px',
  },
  b3: {
    desktop: '12.5px',
  },
}

const LineHeights: TextStylesType = {
  b1: {
    desktop: '25px',
    tablet: '20px',
  },
}

const TextContainer = styled.div<{ type: TextType }>`
  color: ${(props) => props.theme.colors.gray12};
  transition: var(--transition);
  font-size: ${(props) => FontSizes[props.type]?.desktop};
  line-height: ${(props) => LineHeights[props.type]?.desktop ?? 'inherit'};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => FontSizes[props.type]?.tablet};
    line-height: ${(props) => LineHeights[props.type]?.tablet ?? 'inherit'};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => FontSizes[props.type]?.mobile};
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
