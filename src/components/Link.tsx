import { FC, ReactNode } from 'react'
import { Link as InternalLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledExternalLink = styled.a`
  text-decoration: none;
`

type Props = {
  external?: boolean
  url: string
  children: ReactNode
}

const Link: FC<Props> = ({ external, url, children }) => {
  if (external) {
    return (
      <StyledExternalLink href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledExternalLink>
    )
  }

  return <InternalLink to={url}>{children}</InternalLink>
}

export default Link
