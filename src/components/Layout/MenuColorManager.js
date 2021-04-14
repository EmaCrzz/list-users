import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'

import { useStyles, Menu, MenuItem } from './stylesLayout'
import IsLoginContext from 'context/IsLoginContext'

export default function MenuColorManager () {
  const classes = useStyles()
  const { isLogin } = useContext(IsLoginContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  const goManagerColors = () => {
    history.push('/configuration-colors')
    handleClose()
  }

  if (isLogin) {
    return (
      <div>
        <IconButton
          aria-label="menu"
          className={classes.menuButton}
          color="inherit"
          edge="start"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="customized-menu"
          keepMounted
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={goManagerColors} primary="Administrar colores"/>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
