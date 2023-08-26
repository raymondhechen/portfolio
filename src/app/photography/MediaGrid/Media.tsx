'use client'

import Image from 'next/image'
import { FC } from 'react'
import { styled } from 'styled-components'

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`

type MediaProps = {
  src: string
  colStart: number
  colEnd: number
  rowStart: number
  rowEnd: number
}

const Media: FC<MediaProps> = ({ src, colStart, colEnd, rowStart, rowEnd }) => {
  return (
    <ImageContainer
      style={{
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
      }}
    >
      <Image
        src={src}
        placeholder="blur"
        blurDataURL={src}
        alt={src}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </ImageContainer>
  )
}

export default Media
