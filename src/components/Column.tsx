'use client'

import type { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

type Props = {
  children: ReactNode
  style?: CSSProperties
}

const Column = ({ children, style }: Props) => {
  return <ColumnContainer style={style}>{children}</ColumnContainer>
}

export default Column
