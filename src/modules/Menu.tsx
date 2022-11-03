import { ReactNode } from 'react'
import styled, { useTheme } from 'styled-components'
import Text from '../components/Text'

const MenuContainer = styled.div`
  width: auto;
  min-width: 200px;
  height: 100%;
  padding: 12px 0;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-right: 1px solid ${(props) => props.theme.colors.gray7};
  transition: var(--transition);
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

type MenuParams = {
  children: ReactNode
  title: string
}

export const Menu = ({ children, title }: MenuParams) => {
  return (
    <MenuContainer>
      <MenuHeader>{title}</MenuHeader>
      {children}
    </MenuContainer>
  )
}

const MenuHeaderContainer = styled.div`
  display: flex;
  padding: 4px 16px 12px 16px;
`

type MenuHeaderProps = {
  children: ReactNode
}

export const MenuHeader = ({ children }: MenuHeaderProps) => {
  return (
    <MenuHeaderContainer>
      <Text type="h6" weight={500}>
        {children}
      </Text>
    </MenuHeaderContainer>
  )
}

const MenuItemContainer = styled.div<{ active: boolean }>`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  box-sizing: border-box;
  cursor: pointer;
  transition: var(--transition);
  background-color: ${(props) => (props.active ? props.theme.colors.gray4 : 'transparent')};
  :hover {
    background-color: ${(props) => props.theme.colors.gray3};
  }
`

type MenuItemParams = {
  title: string
  subtitle: string
  active?: boolean
  onClick?: () => void
}

export const MenuItem = ({ title, subtitle, active = false, onClick }: MenuItemParams) => {
  const theme = useTheme()

  return (
    <MenuItemContainer onClick={onClick} active={active}>
      <Text
        type="b1"
        color={active ? theme.colors.accentText : theme.colors.gray12}
        style={{ marginBottom: '4px' }}>
        {title}
      </Text>
      <Text type="b3" color={active ? theme.colors.accentSolidHover : theme.colors.gray11}>
        {subtitle}
      </Text>
    </MenuItemContainer>
  )
}
