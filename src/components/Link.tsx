import { FC, ReactNode } from 'react'
import { Link as InternalLink } from 'react-router-dom'

type Props = {
  external?: boolean
  url: string
  children: ReactNode
}

const Link: FC<Props> = ({ external, url, children }) => {
  if (external) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return <InternalLink to={url}>{children}</InternalLink>
}

export default Link
