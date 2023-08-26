import { ReactNode, createContext } from 'react'

export const DarkModeContext = createContext(false)

export const DarkModeProvider = ({
  children,
  isDarkTheme,
}: {
  children: ReactNode
  isDarkTheme: boolean
}) => {
  return (
    <DarkModeContext.Provider value={isDarkTheme}>
      {children}
    </DarkModeContext.Provider>
  )
}
