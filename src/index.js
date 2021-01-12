import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'theme'
import { UserIdContextProvider } from 'context/UserIdContext'
import App from 'components/App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserIdContextProvider>
        <App />
      </UserIdContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
