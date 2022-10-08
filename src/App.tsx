import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Sidebar from './sidebar/Sidebar'
import { lightTheme, darkTheme } from './styles/theme'

export type ThemeName = 'light' | 'dark'
const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray1};
  transition: background-color 0.2s ease-in-out;
  width: 100vw;
  height: 100vh;
  display: flex;
`

const App = () => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = (themeName: ThemeName) => {
    switch (themeName) {
      case 'dark':
        setTheme(darkTheme)
        break
      case 'light':
      default:
        setTheme(lightTheme)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Sidebar toggleTheme={toggleTheme} />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
