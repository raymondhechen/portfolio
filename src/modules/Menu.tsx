import { ReactNode } from 'react'
import styled, { useTheme } from 'styled-components'
import Text from '../components/Text'

const MenuContainer = styled.div`
  width: auto;
  height: 100%;
  padding: 12px 0;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(props) => props.theme.colors.gray7};
  ::-webkit-scrollbar {
    display: none;
  }
`

type MenuParams = {
  children: ReactNode
}

export const Menu = ({ children }: MenuParams) => {
  return <MenuContainer>{children}</MenuContainer>
}

const MenuItemContainer = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
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
      <Text type="h6" color={active ? theme.colors.accentText : theme.colors.gray12}>
        {title}
      </Text>
      <Text type="b1" color={active ? theme.colors.accentSolidHover : theme.colors.gray11}>
        {subtitle}
      </Text>
    </MenuItemContainer>
  )
}
