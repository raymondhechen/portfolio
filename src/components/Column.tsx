import type { ReactNode } from 'react'
import styled, { CSSProperties } from 'styled-components'

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
