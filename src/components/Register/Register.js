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
import { register, validate } from 'utilities/users'
import { initialData, initialStateError } from './Logic/constants'

export default function Register () {
  const classes = useStyles()
  const history = useHistory()

  const [dataInput, setDataInput] = useState(initialData)
  const [error, setError] = useState(initialStateError)

  const handleOnChange = (e) => setDataInput({ ...dataInput, [e.target.name]: e.target.value })

  const handleOnClick = () => {
    const { errors, ifError } = validate(dataInput)

    if (!ifError) {
      register(dataInput)
      setDataInput(initialData)
      swal.fire({
        title: 'Se ha registrado correctamente',
        icon: 'success'
      })
      history.push('/login')
      return
    }
    setError(errors)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container component="main" maxWidth="xs">
      <Grid container justify="center" style={{ height: '90vh' }}>
        <Grid item style={{ display: 'flex' }}>
          <form className={classes.container} onSubmit={handleOnSubmit}>
            <Typography
              className={`${classes.itemText} ${classes.title}`}
              variant="h6"
            >
              Registrate
            </Typography>
            <Divider className={`${classes.width} ${classes.itemText}`} />
            <TextField
              autoFocus
              className={`${classes.itemText}`}
              error={error.username.error}
              helperText={error.username.msg || ''}
              label="Nombre de Usuario"
              name="username"
              onChange={handleOnChange}
              type="text"
            />
            <TextField
              className={classes.itemText}
              error={error.password.error}
              helperText={error.password.msg || ''}
              label="Contraseña"
              name="password"
              onChange={handleOnChange}
              type="password"
            />
            <TextField
              className={classes.itemText}
              error={error.password2.error}
              helperText={error.password2.msg || ''}
              label="Repetir Contraseña"
              name="password2"
              onChange={handleOnChange}
              type="password"
            />
            <TextField
              className={classes.itemText}
              error={error.email.error}
              helperText={error.email.msg || ''}
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
              variant="contained"
            >
              Registrarse
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}
