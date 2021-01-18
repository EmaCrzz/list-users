import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'theme'
import { UserIdContextProvider } from 'context/UserIdContext'
import { IsLoginContextProvider } from 'context/IsLoginContext'
import Routes from 'routes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IsLoginContextProvider>
        <UserIdContextProvider>
          <Routes />
        </UserIdContextProvider>
      </IsLoginContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
