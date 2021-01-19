import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert2'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'

import { useStyles } from './stylesRegister'
import { register, checkExist, validate } from 'utilities/users'
import { initialData, initialStateError } from './Logic/constants'

export default function Register () {
  const classes = useStyles()
  const history = useHistory()

  const [dataInput, setDataInput] = useState(initialData)
  const [error, setError] = useState(initialStateError)

  const handleOnChange = (e) => setDataInput({ ...dataInput, [e.target.name]: e.target.value })

  const handleOnClick = () => {
    if (errorUsername.error) {
      setError({ username: errorUsername.msg })
    } else if (errorPassword.error) {
      setError({ password: errorPassword.msg })
    } else if (errorPassword2.error) {
      setError({ password2: errorPassword2.msg })
    } else if (errorEmail.error) {
      setError({ email: errorEmail.msg })
    } else {
      if (checkExist({ username: dataInput.username })) {
        swal.fire({
          title: 'Error al registrarse',
          icon: 'error'
        })
      } else {
        register(dataInput)
        setDataInput(initialData)
        swal.fire({
          title: 'Se ha registrado correctamente',
          icon: 'success'
        })
        history.push('/login')
      }
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container component="main" maxWidth="xs">
      <Grid container justify='center' style={{ height: '90vh' }}>
        <Grid item style={{ display: 'flex' }}>
          <form className={classes.container} onSubmit={handleOnSubmit}>
            <Typography className={`${classes.itemText} ${classes.title}`} variant="h6">
                        Registrate
            </Typography>
            <Divider className={`${classes.width} ${classes.itemText}`} />
            <TextField
              className={`${classes.itemText}`}
              error={!!error.username}
              helperText={error.username || ''}
              label="Nombre de Usuario"
              name="username"
              onChange={handleOnChange}
              type="text"
            />
            <TextField
              className={classes.itemText}
              error={!!error.password}
              helperText={error.password || ''}
              label="Contraseña"
              name="password"
              onChange={handleOnChange}
              type="password"
            />
            <TextField
              className={classes.itemText}
              error={!!error.password2}
              helperText={error.password2 || ''}
              label="Repetir Contraseña"
              name="password2"
              onChange={handleOnChange}
              type="password"
            />
            <TextField
              className={classes.itemText}
              error={!!error.email}
              helperText={error.email || ''}
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
    </Container>
  )
}
