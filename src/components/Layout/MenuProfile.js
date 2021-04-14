import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { Menu, MenuItem } from './stylesLayout'
import IsLoginContext from 'context/IsLoginContext'

export default function MenuProfile ({ info }) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const history = useHistory()
  const { logout, isLogin } = useContext(IsLoginContext)

  const handleClick = event => setAnchorEl(event.currentTarget)
  const goRegister = () => {
    info.toLowerCase() === 'login' && history.push('/login')
    info.toLowerCase() === 'registrarse' && history.push('/register')
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // si está logueado
  if (isLogin) {
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
