import React, { useState } from 'react'

const Context = React.createContext({})

export function UserIdContextProvider ({ children }) {
  const [userId, setUserId] = useState('')

  return (
    <Context.Provider value={{ userId, setUserId }}>
      {children}
    </Context.Provider>
  )
}

export default Context
