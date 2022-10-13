import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledExternalLink = styled.a`
  text-decoration: none;
`

type Props = {
  external?: boolean
  url: string
  children: ReactNode
}

const LinkComponent: FC<Props> = ({ external, children, url }) => {
  if (external) {
    return (
      <Link href={url} passHref>
        <StyledExternalLink href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </StyledExternalLink>
      </Link>
    )
  }

  return <Link href={url}>{children}</Link>
}

LinkComponent.displayName = 'LinkComponent'

export default LinkComponent
