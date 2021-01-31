import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SettingsIcon from '@material-ui/icons/Settings'

import { Menu, MenuItem } from './stylesLayout'
import IsLoginContext from 'context/IsLoginContext'

export default function MenuProfile ({ info }) {
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { logout } = useContext(IsLoginContext)
  const isAuth = localStorage.getItem('isAuth')

  const handleClick = event => setAnchorEl(event.currentTarget)

  const goRegister = () => {
    info.toLowerCase() === 'login' && history.push('/login')
    info.toLowerCase() === 'registrarse' && history.push('/register')
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const goToSettings = () => {
    history.push('/settings/colors')
    handleClose()
  }

  // si está logueado
  if (isAuth === 'true') {
    return (
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          color="primary"
          disableElevation
          onClick={handleClick}
          variant="contained"
        >
          {info}
        </Button>
        <Menu
          anchorEl={anchorEl}
          id="customized-menu"
          keepMounted
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          <MenuItem>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Configuración de cuenta" />
          </MenuItem>
          <MenuItem onClick={goToSettings}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </MenuItem>
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión" />
          </MenuItem>
        </Menu>
      </div>
    )
  }

  return (
    <Button
      aria-controls="customized-menu"
      aria-haspopup="true"
      color="primary"
      disableElevation
      onClick={goRegister}
      variant="contained"
    >
      {info}
    </Button>
  )
}
