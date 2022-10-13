import type { ReactNode } from 'react'
import styled from 'styled-components'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

type Props = {
  children: ReactNode
}

const Column = ({ children }: Props) => {
  return <ColumnContainer>{children}</ColumnContainer>
}

export default Column
