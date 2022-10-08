import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import HomePage from './pages/Home'
import PhotographyPage from './pages/Photography'
import WritingPage from './pages/Writing'
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
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <AppContainer>
          <Sidebar toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/writing" element={<WritingPage />} />
          </Routes>
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
