'use client'

import { useEffect, useState } from 'react'

const parseBoolean = (boolString: string) => {
  return boolString === 'true'
}

const useDarkMode = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('dark')
    if (storedDarkMode !== null) {
      setIsDarkTheme(parseBoolean(storedDarkMode))
      return
    }

    const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)')
    if (prefersLightTheme.matches) {
      setIsDarkTheme(false)
      localStorage.setItem('dark', 'false')
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem('dark', `${!isDarkTheme}`)
  }

  return { isDarkTheme, toggleTheme }
}

export default useDarkMode
