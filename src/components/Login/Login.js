import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import { useStyles } from './stylesLogin'
import IsLoginContext from 'context/IsLoginContext'

export default function Login () {
  const classes = useStyles()

  const [checked, setChecked] = React.useState({ checked: true })
  const [dataInput, setDataInput] = React.useState({ user: '', password: '' })
  const { setIsLogin } = useContext(IsLoginContext)

  const handleOnChange = (e) => {
    e.target.name === 'checked'
      ? setChecked({ ...checked, [e.target.name]: e.target.checked })
      : setDataInput({ ...dataInput, [e.target.name]: e.target.value })
  }

  const handleOnClick = () => {
    localStorage.getItem(JSON.stringify({ user: dataInput.user, password: dataInput.password })) ? setIsLogin(true) : setIsLogin(false)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <Grid container justify='center' style={{ height: '90vh' }}>
      <Grid container item justify='center' style={{ display: 'flex' }} xs={6}>
        <form className={classes.container} onSubmit={handleOnSubmit}>
          <Typography className={`${classes.title}`} variant="h6">
            Login
          </Typography>
          <Divider className={`${classes.width} ${classes.itemText}`}/>

          <TextField
            className={`${classes.itemText}`}
            label="Nombre de Usuario"
            name="user"
            onChange={handleOnChange}
            type="text"
          />
          <TextField
            className={classes.itemText}
            label="Contraseña"
            name="password"
            onChange={handleOnChange}
            type="password"
          />
          <FormControlLabel className={classes.itemText}
            control={
              <Checkbox
                checked={checked.checked}
                color="primary"
                name="checked"
                onChange={handleOnChange}
              />
            }
            label="Recordarme"
          />
          <Button
            className={classes.itemText}
            color="primary"
            onClick={handleOnClick}
            type="submit"
            variant="contained">
            Iniciar Sesión
          </Button>
          <Typography >
            <Link className={classes.fontLink} to="/register" variant="body2">
              Crear cuenta nueva
            </Link>
          </Typography>
        </form>
      </Grid>
    </Grid>
  )
}
