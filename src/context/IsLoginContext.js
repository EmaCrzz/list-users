import React, { useState } from 'react'

const Context = React.createContext({})

export function IsLoginContextProvider ({ children }) {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <Context.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </Context.Provider>
  )
}

export default Context
