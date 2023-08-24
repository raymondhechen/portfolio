'use client'

import React, { FC, ReactNode } from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

const StyledExternalLink = styled.a`
  text-decoration: none;
  :visited {
    color: ${(props) => props.theme.colors.accentText};
  }
`

type Props = {
  external?: boolean
  url: string
  children: ReactNode
}

const Link: FC<Props> = ({ external, children, url }) => {
  if (external) {
    return (
      <StyledExternalLink href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledExternalLink>
    )
  }

  return <NextLink href={url}>{children}</NextLink>
}

Link.displayName = 'Link'

export default Link
