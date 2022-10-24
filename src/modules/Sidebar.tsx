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
`

type Props = {
  toggleTheme: () => void
}

const Sidebar = ({ toggleTheme }: Props) => {
  const router = useRouter()

  const theme = useContext(ThemeContext)
  const homePathMatch = router.pathname === '/'
  const photographyPathMatch = router.pathname.startsWith('/photography')
  const writingPathMatch = router.pathname === '/writing'

  return (
    <SidebarContainer>
      <Column>
        <Link url="/">
          <Button type="tertiary" icon="home" active={!!homePathMatch} />
        </Link>
        <div style={{ height: '12px' }} />
        <Link url="/photography">
          <Button type="tertiary" icon="photo" active={!!photographyPathMatch} />
        </Link>
        <div style={{ height: '12px' }} />
        <Link url="/writing">
          <Button type="tertiary" icon="pencil" active={!!writingPathMatch} />
        </Link>
      </Column>
      <Column>
        <Link url="https://twitter.com/raymondhechen" external>
          <Button type="tertiary" icon="twitter" />
        </Link>
        <div style={{ height: '12px' }} />
        <Link url="https://www.linkedin.com/in/raymondhechen/" external>
          <Button type="tertiary" icon="linkedin" />
        </Link>
        <div style={{ height: '12px' }} />
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
