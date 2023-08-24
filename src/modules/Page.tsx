'use client'

import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // if overflow scroll happens and this component is nested in another full width/height element, there's actually no bottom padding
  // https://alexandergottlieb.com/2018/02/22/overflow-scroll-and-the-right-padding-problem-a-css-only-solution/
  overflow-y: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 20px 30px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 15px 25px;
  }
`

type Props = {
  children: ReactNode
}

const Page: FC<Props> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>
}

export default Page
