import { useEffect, useState } from 'react'
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
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)

  useEffect(() => {
    const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)')
    if (prefersLightTheme.matches) {
      setIsDarkTheme(false)
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContainer>
        <Sidebar toggleTheme={toggleTheme} />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
