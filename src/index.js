import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'

import { UserIdContextProvider } from 'context/UserIdContext'
import { IsLoginContextProvider } from 'context/IsLoginContext'
import { DarkModeContextProvider } from 'context/DarkModeContext'

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <IsLoginContextProvider>
        <UserIdContextProvider>
          <Routes />
        </UserIdContextProvider>
      </IsLoginContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
