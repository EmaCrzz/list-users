import React, { useState } from 'react'
import { checkExist } from 'utilities/users'

const Context = React.createContext({})

export function IsLoginContextProvider ({ children }) {
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isAuth')))

  const loggedin = ({ user, password }) => {
    const isExists = checkExist({ username: user })
    if (!isExists) return { error: true, msg: 'Credenciales inválidas' }

    if (isExists.password !== password) return { error: true, msg: 'Credenciales inválidas' }

    setIsLogin(true)
    localStorage.setItem('isAuth', 'true')
    return { error: false, msg: '' }
  }

  const logout = () => {
    localStorage.setItem('isAuth', 'false')
    setIsLogin(false)
  }

  return (
    <Context.Provider value={{ isLogin, setIsLogin, loggedin, logout }}>
      {children}
    </Context.Provider>
  )
}

export default Context
