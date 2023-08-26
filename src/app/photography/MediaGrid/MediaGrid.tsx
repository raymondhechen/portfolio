'use client'

import { FC, ReactNode } from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 25px;
  grid-gap: 10px;
  width: 100%;
`

type MediaGridProps = {
  children: ReactNode
}

const MediaGrid: FC<MediaGridProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default MediaGrid
