import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

type Props = {
  children: ReactNode
}

const Page: FC<Props> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>
}

export default Page
