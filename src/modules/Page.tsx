import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;
  overflow-y: scroll;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 30px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 20px;
  }
`

type Props = {
  children: ReactNode
}

const Page: FC<Props> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>
}

export default Page
