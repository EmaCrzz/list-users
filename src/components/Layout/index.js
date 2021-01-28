import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Switch from '@material-ui/core/Switch'
import MenuIcon from '@material-ui/icons/Menu'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { useStyles, Brightness2Icon, WbSunnyIcon, FormControlLabel } from './stylesLayout'
import MenuProfile from './MenuProfile'
import DarkModeContext from 'context/DarkModeContext'

const getInfo = ({ pathname }) => {
  switch (pathname) {
    case '/home':
      return 'Perfil'

    case '/register':
      return 'Login'

    case '/login':
      return 'Registrarse'

    default:
      return ''
  }
}

export default function Layout ({ children, listUsers, bool }) {
  const classes = useStyles()
  const { pathname } = useLocation()
  const { theme, darkMode, setDarkMode } = useContext(DarkModeContext)
  const info = getInfo({ pathname })

  const handleChange = () => {
    setDarkMode(!darkMode)
  }

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`${classes.root} `}>
        <AppBar position="sticky">
          <Toolbar>
            {bool === 'true' &&
            <IconButton
              aria-label="menu"
              className={classes.menuButton}
              color="inherit"
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            }
            <Typography className={classes.title} variant={bool === 'true' ? 'h6' : 'subtitle2'} >
              {listUsers}
            </Typography>

            <FormControlLabel
              control={<Switch checked={darkMode} color='default' onChange={handleChange} />}
              label={darkMode
                ? <Brightness2Icon />
                : <WbSunnyIcon />

              }
            />
            {/*  <Button color="inherit" onClick={() => handleOnClick()} >{info}</Button> */}
            <MenuProfile info={info} />

          </Toolbar>
        </AppBar>
      </div>
      {children}
    </ThemeProvider>

  )
}
