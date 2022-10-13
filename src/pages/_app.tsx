import '../styles/globals.css'
import { lightTheme, darkTheme } from '../styles/theme'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Sidebar from '../modules/Sidebar'

export type ThemeName = 'light' | 'dark'
const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray1};
  transition: background-color 0.2s ease-in-out;
  width: 100vw;
  height: 100vh;
  display: flex;
`

const MyApp = ({ Component, pageProps }: AppProps) => {
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
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProvider>
  )
}

export default MyApp
