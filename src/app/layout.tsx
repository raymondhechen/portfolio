'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import { ReactNode } from 'react'
import { ThemeProvider, styled } from 'styled-components'
import { darkTheme, lightTheme } from '@/styles/theme'
import Sidebar from '@/modules/Sidebar'
import useDarkMode from '@/styles/useDarkMode'

const inter = Inter({ subsets: ['latin'] })

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray1};
  transition: background-color 0.2s ease-in-out;
  width: 100vw;
  height: 100vh;
  display: flex;
`

export default function RootLayout({ children }: { children: ReactNode }) {
  const { isDarkTheme, toggleTheme } = useDarkMode()

  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <AppContainer>
              <Sidebar toggleTheme={toggleTheme} />
              {children}
            </AppContainer>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
