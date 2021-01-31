import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

import { ThemeProvider } from '@material-ui/core/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import Demo from './Demo'

const returnTheme = ({ primary, secondary }) => {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: primary
      },
      secondary: {
        main: secondary
      }
    }
  })
  return theme
}
const initColors = { primary: '#3f51b5', secondary: '#f50057' }

export default function SettingsColorPicker () {
  const classes = useStyles()
  const [theme, setTheme] = useState(() => returnTheme({
    primary: initColors.primary,
    secondary: initColors.secondary
  }))
  const [colors, setColors] = useState({ ...initColors })

  const handleChange = ({ key, color }) => {
    setColors({ ...colors, [key]: color })
    if (key === 'primary') {
      const newTheme = returnTheme({
        primary: color,
        secondary: initColors.secondary
      })
      setTheme(newTheme)
    } else {
      const newTheme = returnTheme({
        primary: initColors.primary,
        secondary: color
      })
      setTheme(newTheme)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Container className={classes.container} maxWidth="xs">
            <div className={classes.containerInputColor}>
              <Typography variant="h6">Primario</Typography>
              <SketchPicker
                color={colors.primary}
                onChange={color =>
                  handleChange({ key: 'primary', color: color.hex })
                }
              />
            </div>
            <div className={classes.containerInputColor}>
              <Typography variant="h6">Secundario</Typography>
              <SketchPicker
                color={colors.secondary}
                onChange={color =>
                  handleChange({ key: 'secondary', color: color.hex })
                }
              />
            </div>
          </Container>
        </Grid>
        <Grid className={classes.demo} item sm={6} xs={12}>
          <Typography variant="h6">Demo</Typography>
          <Demo />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    '& > *': {
      margin: spacing(2)
    }
  },
  containerInputColor: {
    display: 'flex',
    flexDirection: 'column'
  },
  picker: {
    '& input': {
      color: palette.text.primary
    }
  },
  demo: {
    padding: spacing(1, 2),
    height: 'calc(100vh - 65px)',
    overflow: 'auto'
  }
}))
