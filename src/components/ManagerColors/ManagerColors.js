import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { useStyles, TextField } from './styles'
import DarkModeContext from 'context/DarkModeContext'
import Demo from './Demo'

export default function ManagerColors () {
  const classes = useStyles()
  const history = useHistory()
  const { colorLight, setColorLight } = useContext(DarkModeContext)
  const initialColor = { primary: colorLight.primary, secondary: colorLight.secondary }
  const [color, setColor] = useState(initialColor)
  const initialNameColor = { colorPrimary: colorLight.primary, colorSecondary: colorLight.secondary }
  const [nameColor, setNameColor] = useState(initialNameColor)

  const goBack = () => {
    history.goBack()
  }

  const handleOnChange = (e) => {
    e.target.name === 'primary' && setColor({ ...color, [e.target.name]: e.target.value })
    e.target.name === 'secondary' && setColor({ ...color, [e.target.name]: e.target.value })
  }

  const handleOnClick = () => {
    console.log(typeof (color))
    setColorLight(color)
    setNameColor({ colorPrimary: color.primary, colorSecondary: color.secondary })
  }

  return (
    <div>
      <Button
        className={classes.buttonBack}
        color="primary"
        onClick={goBack}
        variant="contained"
      >
        <ArrowBackIcon />
      </Button>

      <Grid container>
        <Grid item lg={6} md={6} sm={6} xl={6} xs={12}>
          <div className={classes.container}>
            <div className={classes.inputGroup}>
              <TextField

                defaultValue={colorLight.primary}
                label="Seleccionar color primario"
                name='primary'
                onChange={handleOnChange}
                type='color'
                variant='filled'
              >
              </TextField>
              <TextField
                InputProps={{ value: nameColor.colorPrimary }}
                label="color"
                name='colorPrimary'
              />
            </div>
            <div className={classes.inputGroup}>
              <TextField

                color='secondary'
                defaultValue={colorLight.secondary}
                label="Seleccionar color secundario"
                name='secondary'
                onChange={handleOnChange}
                type='color'
                variant='filled'
              />
              <TextField
                InputProps={{ value: nameColor.colorSecondary }}
                color='secondary'
                label="color"
                name='colorSecondary'
              />
            </div>
            <Button
              className={classes.button}
              color='default'
              onClick={handleOnClick}
              type='submit'
              variant="outlined">
              Aplicar
            </Button>
          </div>
        </Grid>
        <Grid itemlg={6} md={6} sm={6} xl={6} xs={12}>
          <Container >
            <Demo />
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}
