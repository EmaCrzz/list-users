import React, { useState, useEffect } from 'react'

import deepPurple from '@material-ui/core/colors/deepPurple'
import purple from '@material-ui/core/colors/purple'

import { returnTheme } from 'theme'

const Context = React.createContext({})

export function DarkModeContextProvider ({ children }) {
  const KEY_MODE = 'dark-mode'
  const KEY_COLOR_LIGHT = 'color-light'
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem(KEY_MODE)) || false)
  const [colorLight, setColorLight] = useState(JSON.parse(localStorage.getItem(KEY_COLOR_LIGHT)) || { primary: deepPurple[500], secondary: purple[500] })
  const [theme, setTheme] = useState(returnTheme(darkMode, colorLight))

  useEffect(() => {
    setTheme(returnTheme(darkMode, colorLight))
    localStorage.setItem('dark-mode', JSON.parse(darkMode))
    localStorage.setItem('color-light', JSON.stringify(colorLight))
  }, [darkMode, colorLight])

  return (
    <Context.Provider value={{ darkMode, setDarkMode, theme, colorLight, setColorLight }}>
      {children}
    </Context.Provider>
  )
}

export default Context
