import React from 'react'
import swal from 'sweetalert2'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import { useStyles } from './stylesRegister'

const initialData = {
  user: '',
  password: '',
  password2: '',
  email: ''
}

export default function Register () {
  const classes = useStyles()

  const [dataInput, setDataInput] = React.useState(initialData)

  const handleOnChange = (e) => setDataInput({ ...dataInput, [e.target.name]: e.target.value })

  const handleOnClick = () => {
    const id = { user: dataInput.user, password: dataInput.password }
    localStorage.setItem(JSON.stringify(id), JSON.stringify(dataInput))
    setDataInput(initialData)
    swal.fire({
      title: 'Se ha registrado correctamente',
      icon: 'success'
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <Grid container justify='center' style={{ height: '90vh' }}>
      <Grid item style={{ display: 'flex' }} xs={6}>
        <form className={classes.container} onSubmit={handleOnSubmit}>
          <Typography className={`${classes.itemText} ${classes.title}`} variant="h6">
                        Registrate
          </Typography>
          <Divider className={`${classes.width} ${classes.itemText}`} />
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
          <TextField
            className={classes.itemText}
            label="Repetir Contraseña"
            name="password2"
            onChange={handleOnChange}
            type="password"
          />
          <TextField
            className={classes.itemText}
            label="Email"
            name="email"
            onChange={handleOnChange}
            type="email"
          />
          <Button
            color="primary"
            onClick={handleOnClick}
            style={{ marginTop: '1rem' }}
            type="submit"
            variant="contained">
                Registrarse
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}
