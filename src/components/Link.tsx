import React, { FC, ReactNode } from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

const StyledExternalLink = styled.a`
  text-decoration: none;
`

type Props = {
  external?: boolean
  url: string
  children: ReactNode
}

const Link: FC<Props> = ({ external, children, url }) => {
  if (external) {
    return (
      <NextLink href={url} passHref>
        <StyledExternalLink href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </StyledExternalLink>
      </NextLink>
    )
  }

  return <NextLink href={url}>{children}</NextLink>
}

Link.displayName = 'Link'

export default Link
