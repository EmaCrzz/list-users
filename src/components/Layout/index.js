import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuIcon from '@material-ui/icons/Menu'

// import IsLoginContext from 'context/IsLoginContext'
import { useStyles, Brightness2Icon, WbSunnyIcon } from './stylesLayout'

export default function Layout ({ children, info, listUsers, bool }) {
  // const { setIsLogin } = useContext(IsLoginContext)
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false)
  const history = useHistory()

  const handleOnClick = () => history.push()

  const handleChange = () => setChecked((prev) => !prev)

  console.log(history)

  return (
    <>
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
              control={<Switch checked={checked} color='default' onChange={handleChange} />}
              label={checked
                ? <Brightness2Icon/>
                : <WbSunnyIcon />

              }
            />
            <Button color="inherit" onClick={() => handleOnClick()} >{info}</Button>

          </Toolbar>
        </AppBar>
      </div>
      {children}
    </>
  )
}
