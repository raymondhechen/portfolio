import React from 'react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Button from '../components/Button'
import Column from '../components/Column'
import Link from '../components/Link'

const SidebarContainer = styled.div`
  width: auto;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.gray7};
  transition: border 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 8px;
  }
`

type Props = {
  toggleTheme: () => void
}

const Sidebar = ({ toggleTheme }: Props) => {
  const router = useRouter()
  const theme = useContext(ThemeContext)

  return (
    <SidebarContainer>
      <Column style={{ gap: '12px' }}>
        <Link url="/">
          <Button type="tertiary" icon="home" active={router.pathname === '/'} />
        </Link>
        <Link url="/paracosm">
          <Button
            type="tertiary"
            icon="brand-paracosm"
            active={router.pathname.startsWith('/paracosm')}
          />
        </Link>
        <Link url="/futureconnoisseurs">
          <Button
            type="tertiary"
            icon="brand-future-connoisseurs"
            active={router.pathname.startsWith('/futureconnoisseurs')}
          />
        </Link>
        <Link url="/retool">
          <Button
            type="tertiary"
            icon="brand-retool"
            active={router.pathname.startsWith('/retool')}
          />
        </Link>
      </Column>
      <Column style={{ gap: '12px' }}>
        <Link url="https://twitter.com/raymondhechen" external>
          <Button type="tertiary" icon="twitter" />
        </Link>
        <Link url="https://www.linkedin.com/in/raymondhechen/" external>
          <Button type="tertiary" icon="linkedin" />
        </Link>
        <Button
          type="tertiary"
          icon="brightness"
          onClick={toggleTheme}
          active={theme.type === 'dark'}
        />
      </Column>
    </SidebarContainer>
  )
}

export default Sidebar
