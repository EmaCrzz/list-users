import React, { useState, useEffect } from 'react'

import { returnTheme } from 'theme'

const Context = React.createContext({})

export function DarkModeContextProvider ({ children }) {
  const KEY_MODE = 'dark-mode'
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem(KEY_MODE)) || false)
  const [theme, setTheme] = useState(returnTheme(darkMode))

  useEffect(() => {
    setTheme(returnTheme(darkMode))
    localStorage.setItem('dark-mode', JSON.parse(darkMode))
  }, [darkMode])

  return (
    <Context.Provider value={{ darkMode, setDarkMode, theme }}>
      {children}
    </Context.Provider>
  )
}

export default Context
