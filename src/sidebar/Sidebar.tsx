import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Button from '../components/Button'
import Column from '../components/Column'

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
  const theme = useContext(ThemeContext)

  return (
    <SidebarContainer>
      <Column>
        <Button type="tertiary" icon="home" />
      </Column>
      <Column>
        <Button
          type="tertiary"
          icon="shadow"
          onClick={toggleTheme}
          active={theme.type === 'dark'}
        />
      </Column>
    </SidebarContainer>
  )
}

export default Sidebar
